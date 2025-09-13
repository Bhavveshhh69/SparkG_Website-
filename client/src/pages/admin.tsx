import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CalendarDays, 
  Mail, 
  Building, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Download,
  Star,
  Plus,
  Edit,
  Trash2,
  FileText
} from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Newsletter, WorkshopRequest, ContactForm, Testimonial, Resource } from "@shared/schema";

export default function Admin() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch data for admin dashboard
  const { data: newsletters = [], isLoading: newslettersLoading } = useQuery<Newsletter[]>({
    queryKey: ["/api/admin/newsletters"],
  });

  const { data: workshopRequests = [], isLoading: workshopsLoading } = useQuery<WorkshopRequest[]>({
    queryKey: ["/api/admin/workshop-requests"],
  });

  const { data: contactForms = [], isLoading: contactsLoading } = useQuery<ContactForm[]>({
    queryKey: ["/api/admin/contact-forms"],
  });

  // Fetch testimonials
  const { data: testimonials = [], isLoading: testimonialsLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/admin/testimonials"],
  });

  // Fetch resources
  const { data: resources = [], isLoading: resourcesLoading } = useQuery<Resource[]>({
    queryKey: ["/api/admin/resources"],
  });

  // Mutations for testimonials
  const createTestimonialMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/admin/testimonials", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({
        title: "Success!",
        description: "Testimonial created successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive",
      });
    }
  });

  const updateTestimonialMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      apiRequest("PATCH", `/api/admin/testimonials/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({
        title: "Success!",
        description: "Testimonial updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive",
      });
    }
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/testimonials/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/testimonials"] });
      toast({
        title: "Success!",
        description: "Testimonial deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive",
      });
    }
  });

  // Mutations for resources
  const createResourceMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/admin/resources", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] });
      toast({
        title: "Success!",
        description: "Resource created successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  const updateResourceMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      apiRequest("PATCH", `/api/admin/resources/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] });
      toast({
        title: "Success!",
        description: "Resource updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  const deleteResourceMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/resources/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/resources"] });
      toast({
        title: "Success!",
        description: "Resource deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete resource. Please try again.",
        variant: "destructive",
      });
    }
  });

  // CSV Export functions
  const exportToCSV = (data: any[], filename: string, headers: string[]) => {
    if (data.length === 0) {
      alert("No data to export");
      return;
    }

    const csvContent = [
      headers.join(","),
      ...data.map(row => 
        headers.map(header => {
          const key = header.toLowerCase().replace(/\s+/g, "");
          let value = "";
          
          if (key === "name") value = row.name || "";
          else if (key === "email") value = row.email || "";
          else if (key === "companyname") value = row.companyName || "";
          else if (key === "subject") value = row.subject || "";
          else if (key === "message") value = row.message || "";
          else if (key === "createdat") value = new Date(row.createdAt).toLocaleDateString();
          
          // Escape commas and quotes in CSV
          if (value.includes(",") || value.includes('"')) {
            value = `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportNewsletters = () => {
    exportToCSV(newsletters, "newsletter_subscribers", ["Name", "Email", "Created At"]);
  };

  const exportWorkshops = () => {
    exportToCSV(workshopRequests, "workshop_requests", ["Company Name", "Email", "Message", "Created At"]);
  };

  const exportContacts = () => {
    exportToCSV(contactForms, "contact_forms", ["Name", "Email", "Subject", "Message", "Created At"]);
  };

  const stats = [
    {
      title: "Newsletter Subscribers",
      value: newsletters.length,
      icon: Mail,
      change: "+12% from last month"
    },
    {
      title: "Workshop Requests",
      value: workshopRequests.length,
      icon: Building,
      change: "+23% from last month"
    },
    {
      title: "Contact Forms",
      value: contactForms.length,
      icon: MessageSquare,
      change: "+8% from last month"
    },
    {
      title: "Total Interactions",
      value: newsletters.length + workshopRequests.length + contactForms.length,
      icon: TrendingUp,
      change: "+15% from last month"
    }
  ];

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (newslettersLoading || workshopsLoading || contactsLoading) {
    return (
      <div className="min-h-[100dvh] bg-background flex items-center justify-center">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">SparkG Media Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your platform and track engagement</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-semibold">Admin Panel</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/30 border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-green-500 text-xs mt-2">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="bg-card/30 border-border/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary">
              Overview
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="data-[state=active]:bg-primary">
              Testimonials
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-primary">
              Resources
            </TabsTrigger>
            <TabsTrigger value="newsletters" className="data-[state=active]:bg-primary">
              Newsletter Subscribers
            </TabsTrigger>
            <TabsTrigger value="workshops" className="data-[state=active]:bg-primary">
              Workshop Requests
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-primary">
              Contact Forms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Newsletter Signups */}
              <Card className="bg-card/30 border-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Recent Newsletter Signups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {newsletters.slice(0, 5).map((newsletter) => (
                      <div key={newsletter.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{newsletter.name}</p>
                          <p className="text-muted-foreground text-sm">{newsletter.email}</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {formatDate(newsletter.createdAt)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Workshop Requests */}
              <Card className="bg-card/30 border-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Recent Workshop Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workshopRequests.slice(0, 5).map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{request.companyName}</p>
                          <p className="text-muted-foreground text-sm">{request.email}</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {formatDate(request.createdAt)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials">
            <TestimonialManager 
              testimonials={testimonials}
              isLoading={testimonialsLoading}
              onCreate={createTestimonialMutation.mutate}
              onUpdate={updateTestimonialMutation.mutate}
              onDelete={deleteTestimonialMutation.mutate}
            />
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources">
            <ResourceManager 
              resources={resources}
              isLoading={resourcesLoading}
              onCreate={createResourceMutation.mutate}
              onUpdate={updateResourceMutation.mutate}
              onDelete={deleteResourceMutation.mutate}
            />
          </TabsContent>

          <TabsContent value="newsletters">
            <Card className="bg-card/30 border-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Newsletter Subscribers ({newsletters.length})</CardTitle>
                <Button 
                  onClick={exportNewsletters}
                  disabled={newsletters.length === 0}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {newsletters.map((newsletter) => (
                    <div key={newsletter.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8 text-primary" />
                        <div>
                          <p className="text-white font-medium">{newsletter.name}</p>
                          <p className="text-muted-foreground">{newsletter.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          Subscribed
                        </Badge>
                        <p className="text-muted-foreground text-sm mt-1">{formatDate(newsletter.createdAt)}</p>
                      </div>
                    </div>
                  ))}
                  {newsletters.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No newsletter subscribers yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workshops">
            <Card className="bg-card/30 border-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Workshop Requests ({workshopRequests.length})</CardTitle>
                <Button 
                  onClick={exportWorkshops}
                  disabled={workshopRequests.length === 0}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workshopRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Building className="w-8 h-8 text-primary" />
                          <div>
                            <p className="text-white font-medium">{request.companyName}</p>
                            <p className="text-muted-foreground">{request.email}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {formatDate(request.createdAt)}
                        </Badge>
                      </div>
                      <div className="ml-11">
                        <p className="text-muted-foreground text-sm mb-3">
                          <strong>Message:</strong>
                        </p>
                        <p className="text-foreground bg-card/20 p-3 rounded text-sm">
                          {request.message}
                        </p>
                      </div>
                    </div>
                  ))}
                  {workshopRequests.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No workshop requests yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card className="bg-card/30 border-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Contact Forms ({contactForms.length})</CardTitle>
                <Button 
                  onClick={exportContacts}
                  disabled={contactForms.length === 0}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactForms.map((contact) => (
                    <div key={contact.id} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="w-8 h-8 text-primary" />
                          <div>
                            <p className="text-white font-medium">{contact.name}</p>
                            <p className="text-muted-foreground">{contact.email}</p>
                            <p className="text-primary text-sm">{contact.subject}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {formatDate(contact.createdAt)}
                        </Badge>
                      </div>
                      <div className="ml-11">
                        <p className="text-white bg-card/20 p-3 rounded text-sm">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  ))}
                  {contactForms.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No contact forms yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Testimonial Manager Component
function TestimonialManager({ testimonials, isLoading, onCreate, onUpdate, onDelete }: any) {
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete the testimonial from ${name}?`)) {
      onDelete(id);
    }
  };

  const handleAdd = () => {
    setEditingTestimonial(null);
    setIsDialogOpen(true);
  };

  const handleSave = (data: any) => {
    try {
      if (editingTestimonial) {
        onUpdate({ id: editingTestimonial.id, data });
      } else {
        onCreate(data);
      }
      setIsDialogOpen(false);
      setEditingTestimonial(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save testimonial. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="text-white">Loading testimonials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Testimonials Manager</h2>
        <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
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
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
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
                  <p className="text-primary text-xs">{testimonial.title} at {testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Simple dialog for adding/editing testimonials */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsDialogOpen(false)}
                  className="text-muted-foreground hover:text-white"
                >
                  ✕
                </Button>
              </div>
              
              <TestimonialForm 
                testimonial={editingTestimonial}
                onSave={handleSave}
                onCancel={() => setIsDialogOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Resource Manager Component
function ResourceManager({ resources, isLoading, onCreate, onUpdate, onDelete }: any) {
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete the resource "${title}"?`)) {
      onDelete(id);
    }
  };

  const handleAdd = () => {
    setEditingResource(null);
    setIsDialogOpen(true);
  };

  const handleSave = (data: any) => {
    try {
      if (editingResource) {
        onUpdate({ id: editingResource.id, data });
      } else {
        onCreate(data);
      }
      setIsDialogOpen(false);
      setEditingResource(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save resource. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="text-white">Loading resources...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Resources Manager</h2>
        <Button onClick={handleAdd} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Resource
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource: Resource) => (
          <Card key={resource.id} className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge variant={resource.isActive ? "default" : "secondary"}>
                  {resource.isActive ? "Active" : "Inactive"}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(resource)}
                    className="border-white/20"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(resource.id, resource.title)}
                    className="border-red-500/20 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {resource.fileUrl && (
                <div className="mb-4">
                  <img 
                    src={resource.fileUrl} 
                    alt={resource.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {resource.description}
              </p>
              
              <div className="space-y-2 text-xs text-gray-400">
                {resource.fileType && (
                  <p>Type: {resource.fileType}</p>
                )}
                {resource.fileSize && (
                  <p>Size: {resource.fileSize} KB</p>
                )}
                {resource.downloadUrl && (
                  <p className="text-primary">Download Available</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Simple dialog for adding/editing resources */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {editingResource ? "Edit Resource" : "Add Resource"}
                </h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsDialogOpen(false)}
                  className="text-muted-foreground hover:text-white"
                >
                  ✕
                </Button>
              </div>
              
              <ResourceForm 
                resource={editingResource}
                onSave={handleSave}
                onCancel={() => setIsDialogOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple Testimonial Form Component
function TestimonialForm({ testimonial, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    name: testimonial?.name || "",
    title: testimonial?.title || "",
    company: testimonial?.company || "",
    content: testimonial?.content || "",
    image: testimonial?.image || "",
    rating: testimonial?.rating || 5,
    isActive: testimonial?.isActive !== undefined ? testimonial.isActive : true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Image URL (Optional)</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          placeholder="https://..."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Rating (1-5)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
        />
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm font-medium text-white">Active</label>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          className="border-white/20"
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          {testimonial ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}

// Simple Resource Form Component
function ResourceForm({ resource, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: resource?.title || "",
    description: resource?.description || "",
    fileUrl: resource?.fileUrl || "",
    downloadUrl: resource?.downloadUrl || "",
    fileType: resource?.fileType || "",
    fileSize: resource?.fileSize || 0,
    isActive: resource?.isActive !== undefined ? resource.isActive : true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Cover Image URL</label>
        <input
          type="text"
          name="fileUrl"
          value={formData.fileUrl}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          placeholder="https://..."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-white mb-1">Download URL</label>
        <input
          type="text"
          name="downloadUrl"
          value={formData.downloadUrl}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          placeholder="https://..."
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">File Type</label>
          <input
            type="text"
            name="fileType"
            value={formData.fileType}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
            placeholder="PDF, DOCX, etc."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1">File Size (KB)</label>
          <input
            type="number"
            name="fileSize"
            value={formData.fileSize}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/20 rounded px-3 py-2 text-white"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm font-medium text-white">Active</label>
      </div>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          className="border-white/20"
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          {resource ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
