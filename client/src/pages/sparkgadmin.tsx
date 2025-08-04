import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Settings, 
  MessageSquare, 
  Star, 
  FileText, 
  BookOpen, 
  Link as LinkIcon,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Upload,
  Download,
  Users,
  BarChart3,
  TrendingUp,
  Mail,
  Building
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { 
  Testimonial, 
  Resource, 
  CaseStudy, 
  SiteSetting, 
  Newsletter, 
  WorkshopRequest, 
  ContactForm 
} from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  image: z.string().url().optional().or(z.literal("")),
  rating: z.number().min(1).max(5).default(5),
  isActive: z.boolean().default(true),
});

const resourceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  fileUrl: z.string().url().optional().or(z.literal("")),
  downloadUrl: z.string().url().optional().or(z.literal("")),
  fileType: z.string().optional(),
  fileSize: z.number().optional(),
  isActive: z.boolean().default(true),
  isDirectUpload: z.boolean().default(true),
});

const siteSettingSchema = z.object({
  key: z.string().min(1, "Key is required"),
  value: z.string().min(1, "Value is required"),
});

export default function SparkGAdmin() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const queryClient = useQueryClient();

  // Queries
  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/admin/testimonials"],
  });

  const { data: resources = [], isLoading: resourcesLoading } = useQuery<Resource[]>({
    queryKey: ["/api/admin/resources"],
  });

  const { data: caseStudies = [], isLoading: caseStudiesLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/admin/case-studies"],
  });

  const { data: siteSettings = [], isLoading: settingsLoading } = useQuery<SiteSetting[]>({
    queryKey: ["/api/admin/site-settings"],
  });

  const { data: newsletters = [] } = useQuery<Newsletter[]>({
    queryKey: ["/api/admin/newsletters"],
  });

  const { data: workshopRequests = [] } = useQuery<WorkshopRequest[]>({
    queryKey: ["/api/admin/workshop-requests"],
  });

  const { data: contactForms = [] } = useQuery<ContactForm[]>({
    queryKey: ["/api/admin/contact-forms"],
  });

  // Mutations
  const createTestimonialMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/admin/testimonials", data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] }),
  });

  const updateTestimonialMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      apiRequest("PATCH", `/api/admin/testimonials/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] }),
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/testimonials/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] }),
  });

  const createResourceMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/admin/resources", data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] }),
  });

  const updateResourceMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      apiRequest("PATCH", `/api/admin/resources/${id}`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] }),
  });

  const deleteResourceMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/resources/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] }),
  });

  const updateSiteSettingMutation = useMutation({
    mutationFn: ({ key, value }: { key: string; value: string }) => 
      apiRequest("POST", "/api/admin/site-settings", { key, value }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/admin/site-settings"] }),
  });

  // Stats calculations
  const totalEngagement = newsletters.length + workshopRequests.length + contactForms.length;
  const activeTestimonials = testimonials.filter(t => t.isActive).length;
  const activeResources = resources.filter(r => r.isActive).length;
  const publishedCaseStudies = caseStudies.filter(cs => cs.isPublished).length;

  // Get current CTA URLs
  const heroCtaUrl = siteSettings.find(s => s.key === 'hero_cta_url')?.value || '/about';
  const headerCtaUrl = siteSettings.find(s => s.key === 'header_cta_url')?.value || '/about';

  return (
    <div className="min-h-screen bg-sparkg-dark p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">SparkG Media Dashboard</h1>
          <p className="text-gray-300">Powerful control center for your premium thought leadership agency</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-[#9B7B0B]/20 to-yellow-500/10 border-[#9B7B0B]/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#9B7B0B]/20 rounded-lg">
                  <Users className="w-6 h-6 text-[#9B7B0B]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{totalEngagement}</p>
                  <p className="text-gray-300 text-sm">Total Leads</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Star className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{activeTestimonials}</p>
                  <p className="text-gray-300 text-sm">Active Testimonials</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <FileText className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{activeResources}</p>
                  <p className="text-gray-300 text-sm">Active Resources</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{publishedCaseStudies}</p>
                  <p className="text-gray-300 text-sm">Published Case Studies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#9B7B0B]">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="data-[state=active]:bg-[#9B7B0B]">
              <MessageSquare className="w-4 h-4 mr-2" />
              Testimonials
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-[#9B7B0B]">
              <FileText className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="case-studies" className="data-[state=active]:bg-[#9B7B0B]">
              <BookOpen className="w-4 h-4 mr-2" />
              Case Studies
            </TabsTrigger>
            <TabsTrigger value="leads" className="data-[state=active]:bg-[#9B7B0B]">
              <Users className="w-4 h-4 mr-2" />
              Leads
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#9B7B0B]">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-[#9B7B0B]" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Newsletter Subscribers</span>
                    <Badge variant="secondary">{newsletters.length}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Workshop Requests</span>
                    <Badge variant="secondary">{workshopRequests.length}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-300">Contact Forms</span>
                    <Badge variant="secondary">{contactForms.length}</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-[#9B7B0B]" />
                    Quick Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Hero CTA URL</label>
                    <div className="flex space-x-2">
                      <Input 
                        value={heroCtaUrl} 
                        className="bg-white/5 border-white/20 text-white"
                        readOnly
                      />
                      <Button 
                        size="sm" 
                        onClick={() => setSelectedTab("settings")}
                        className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Header CTA URL</label>
                    <div className="flex space-x-2">
                      <Input 
                        value={headerCtaUrl} 
                        className="bg-white/5 border-white/20 text-white"
                        readOnly
                      />
                      <Button 
                        size="sm" 
                        onClick={() => setSelectedTab("settings")}
                        className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <TestimonialManager 
              testimonials={testimonials}
              isLoading={testimonialsLoading}
              onCreate={createTestimonialMutation.mutate}
              onUpdate={updateTestimonialMutation.mutate}
              onDelete={deleteTestimonialMutation.mutate}
            />
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <ResourceManager 
              resources={resources}
              isLoading={resourcesLoading}
              onCreate={createResourceMutation.mutate}
              onUpdate={updateResourceMutation.mutate}
              onDelete={deleteResourceMutation.mutate}
            />
          </TabsContent>

          {/* Case Studies Tab */}
          <TabsContent value="case-studies" className="space-y-6">
            <CaseStudyManager 
              caseStudies={caseStudies}
              isLoading={caseStudiesLoading}
            />
          </TabsContent>

          {/* Leads Tab */}
          <TabsContent value="leads" className="space-y-6">
            <LeadsManager 
              newsletters={newsletters}
              workshopRequests={workshopRequests}
              contactForms={contactForms}
            />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <SiteSettingsManager 
              settings={siteSettings}
              isLoading={settingsLoading}
              onUpdate={updateSiteSettingMutation.mutate}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Component definitions will continue...
function TestimonialManager({ testimonials, isLoading, onCreate, onUpdate, onDelete }: any) {
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: "",
      title: "",
      company: "",
      content: "",
      image: "",
      rating: 5,
      isActive: true,
    },
  });

  const onSubmit = (data: any) => {
    try {
    if (editingTestimonial) {
      onUpdate({ id: editingTestimonial.id, data });
        toast({
          title: "Success!",
          description: "Testimonial updated successfully.",
        });
    } else {
      onCreate(data);
        toast({
          title: "Success!",
          description: "Testimonial created successfully.",
        });
    }
    setIsDialogOpen(false);
    setEditingTestimonial(null);
    form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save testimonial. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    form.reset({
      name: "",
      title: "",
      company: "",
      content: "",
      image: "",
      rating: 5,
      isActive: true,
      name: testimonial.name,
      title: testimonial.title,
      company: testimonial.company,
      content: testimonial.content,
      image: testimonial.image || "",
      rating: testimonial.rating || 5,
      isActive: testimonial.isActive,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete the testimonial from ${name}?`)) {
      onDelete(id);
      toast({
        title: "Success!",
        description: "Testimonial deleted successfully.",
      });
    }
  };
  const handleAdd = () => {
    setEditingTestimonial(null);
    form.reset();
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return <div className="text-white">Loading testimonials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Testimonials Manager</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAdd} className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-sparkg-dark border-white/20 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white/5 border-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white/5 border-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white/5 border-white/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Testimonial Content</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-white/5 border-white/20 min-h-[100px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image URL (Optional)</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white/5 border-white/20" placeholder="https://..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating (1-5)</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number" 
                            min="1" 
                            max="5" 
                            className="bg-white/5 border-white/20"
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/20 p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Active</FormLabel>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="border-white/20"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90">
                    {editingTestimonial ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial: Testimonial) => (
          <Card key={testimonial.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge variant={testimonial.isActive ? "default" : "secondary"}>
                  {testimonial.isActive ? "Active" : "Inactive"}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(testimonial)}
                    className="border-white/20"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(testimonial.id, testimonial.name)}
                    className="border-red-500/20 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#9B7B0B] text-[#9B7B0B]" />
                ))}
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-[#9B7B0B] text-xs">{testimonial.title} at {testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ResourceManager({ resources, isLoading, onCreate, onUpdate, onDelete }: any) {
  // Similar implementation to TestimonialManager
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Resource Manager</h2>
      <p className="text-gray-300">Resource management coming soon...</p>
    </div>
  );
}

function CaseStudyManager({ caseStudies, isLoading }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Case Study Manager</h2>
      <p className="text-gray-300">Case study management coming soon...</p>
    </div>
  );
}

function LeadsManager({ newsletters, workshopRequests, contactForms }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Leads Manager</h2>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              Newsletter Subscribers ({newsletters.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {newsletters.map((newsletter: Newsletter) => (
                <div key={newsletter.id} className="p-2 bg-white/5 rounded text-sm">
                  <p className="text-white font-medium">{newsletter.name}</p>
                  <p className="text-gray-400">{newsletter.email}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Building className="w-5 h-5 mr-2 text-green-500" />
              Workshop Requests ({workshopRequests.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {workshopRequests.map((request: WorkshopRequest) => (
                <div key={request.id} className="p-2 bg-white/5 rounded text-sm">
                  <p className="text-white font-medium">{request.companyName}</p>
                  <p className="text-gray-400">{request.email}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
              Contact Forms ({contactForms.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {contactForms.map((contact: ContactForm) => (
                <div key={contact.id} className="p-2 bg-white/5 rounded text-sm">
                  <p className="text-white font-medium">{contact.name}</p>
                  <p className="text-gray-400">{contact.email}</p>
                  <p className="text-gray-500 text-xs">{contact.subject}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SiteSettingsManager({ settings, isLoading, onUpdate }: any) {
  const [heroCtaUrl, setHeroCtaUrl] = useState("");
  const [headerCtaUrl, setHeaderCtaUrl] = useState("");

  // Initialize values
  const heroSetting = settings.find((s: SiteSetting) => s.key === 'hero_cta_url');
  const headerSetting = settings.find((s: SiteSetting) => s.key === 'header_cta_url');

  const handleUpdateHeroCta = () => {
    onUpdate({ key: 'hero_cta_url', value: heroCtaUrl });
  };

  const handleUpdateHeaderCta = () => {
    onUpdate({ key: 'header_cta_url', value: headerCtaUrl });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Site Settings</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">CTA Button URLs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Hero Section CTA URL</label>
              <div className="flex space-x-2">
                <Input
                  value={heroCtaUrl || heroSetting?.value || "/about"}
                  onChange={(e) => setHeroCtaUrl(e.target.value)}
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="/about"
                />
                <Button 
                  onClick={handleUpdateHeroCta}
                  className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90"
                >
                  Update
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Header Menu CTA URL</label>
              <div className="flex space-x-2">
                <Input
                  value={headerCtaUrl || headerSetting?.value || "/about"}
                  onChange={(e) => setHeaderCtaUrl(e.target.value)}
                  className="bg-white/5 border-white/20 text-white"
                  placeholder="/about"
                />
                <Button 
                  onClick={handleUpdateHeaderCta}
                  className="bg-[#9B7B0B] hover:bg-[#9B7B0B]/90"
                >
                  Update
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Current Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {settings.map((setting: SiteSetting) => (
                <div key={setting.id} className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span className="text-gray-300 text-sm">{setting.key}</span>
                  <code className="text-[#9B7B0B] text-sm bg-white/10 px-2 py-1 rounded">
                    {setting.value}
                  </code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}