import React, { useRef, useState, useEffect } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileUrl: (url: string) => void;
  currentUrl?: string;
  accept?: string;
  label?: string;
  placeholder?: string;
}

export function FileUpload({ 
  onFileUrl, 
  currentUrl = '', 
  accept = 'image/*',
  label = 'Image',
  placeholder = 'Enter image URL or upload file...'
}: FileUploadProps) {
  const [url, setUrl] = useState(currentUrl);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    setPreview(newUrl);
    onFileUrl(newUrl);
  };

  // Effect to sync currentUrl prop changes
  React.useEffect(() => {
    if (currentUrl !== url) {
      setUrl(currentUrl);
      const abs = currentUrl && !currentUrl.startsWith('http')
        ? `${window.location.origin}${currentUrl}`
        : currentUrl;
      setPreview(abs);
    }
  }, [currentUrl]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      console.log('Uploading file:', file.name, file.type, file.size);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      console.log('Upload response status:', response.status);
      console.log('Upload response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Upload failed with response:', errorText);
        throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
      }

      const responseText = await response.text();
      console.log('Raw response:', responseText);
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        console.error('Response text:', responseText);
        throw new Error('Server returned invalid JSON response');
      }
      
      const uploadedUrl = data.url as string;
      const absoluteUrl = uploadedUrl.startsWith('http')
        ? uploadedUrl
        : `${window.location.origin}${uploadedUrl}`;

      setUrl(absoluteUrl);
      setPreview(absoluteUrl);
      onFileUrl(absoluteUrl);

      toast({
        title: "Success!",
        description: "Image uploaded successfully.",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const clearFile = () => {
    setUrl('');
    setPreview(null);
    onFileUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium text-white">{label}</label>
      
      {/* URL Input */}
      <div className="flex space-x-2">
        <Input
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder={placeholder}
          className="bg-white/5 border-white/20 flex-1"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="border-white/20 px-3"
        >
          {isUploading ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
        </Button>
        {(url || preview) && (
          <Button
            type="button"
            variant="outline"
            onClick={clearFile}
            className="border-red-500/20 text-red-400 hover:bg-red-500/10 px-3"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Preview */}
      {preview && (
        <div className="mt-4">
          <div className="relative inline-block">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg border border-white/20"
              onError={(e) => {
                // Only show error for external URLs, not for uploaded files (relative paths)
                if (preview.startsWith('http')) {
                  setPreview(null);
                  toast({
                    title: "Invalid image",
                    description: "The image URL is not valid or accessible.",
                    variant: "destructive",
                  });
                } else {
                  // For uploaded files, just log the error but don't clear preview
                  console.warn('Image load error for uploaded file:', preview);
                }
              }}
            />
            <div className="absolute -top-2 -right-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={clearFile}
                className="w-6 h-6 p-0 border-red-500/20 text-red-400 hover:bg-red-500/10 rounded-full"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {!preview && (
        <div className="mt-4 p-6 border-2 border-dashed border-white/20 rounded-lg text-center">
          <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-400">
            Enter a URL above or click upload to select an image
          </p>
        </div>
      )}
    </div>
  );
} 