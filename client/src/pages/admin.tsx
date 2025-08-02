import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Mail, Building, MessageSquare, Users, TrendingUp, Download } from "lucide-react";
import type { Newsletter, WorkshopRequest, ContactForm } from "@shared/schema";

export default function Admin() {
  const [selectedTab, setSelectedTab] = useState("overview");

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
      <div className="min-h-screen bg-sparkg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sparkg-dark">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">SparkG Media Admin Dashboard</h1>
            <p className="text-sparkg-gray">Manage your platform and track engagement</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sparkg-gold rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-semibold">Admin Panel</span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-sparkg-black/30 border-sparkg-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sparkg-gray text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-sparkg-gold" />
                </div>
                <p className="text-green-500 text-xs mt-2">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="bg-sparkg-black/30 border-sparkg-border/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-sparkg-gold">
              Overview
            </TabsTrigger>
            <TabsTrigger value="newsletters" className="data-[state=active]:bg-sparkg-gold">
              Newsletter Subscribers
            </TabsTrigger>
            <TabsTrigger value="workshops" className="data-[state=active]:bg-sparkg-gold">
              Workshop Requests
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-sparkg-gold">
              Contact Forms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Newsletter Signups */}
              <Card className="bg-sparkg-black/30 border-sparkg-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Recent Newsletter Signups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {newsletters.slice(0, 5).map((newsletter) => (
                      <div key={newsletter.id} className="flex items-center justify-between p-3 bg-sparkg-dark/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{newsletter.name}</p>
                          <p className="text-sparkg-gray text-sm">{newsletter.email}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          {formatDate(newsletter.createdAt)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Workshop Requests */}
              <Card className="bg-sparkg-black/30 border-sparkg-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Recent Workshop Requests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workshopRequests.slice(0, 5).map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 bg-sparkg-dark/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{request.companyName}</p>
                          <p className="text-sparkg-gray text-sm">{request.email}</p>
                        </div>
                        <Badge variant="secondary" className="bg-sparkg-gold/20 text-sparkg-gold">
                          {formatDate(request.createdAt)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="newsletters">
            <Card className="bg-sparkg-black/30 border-sparkg-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Newsletter Subscribers ({newsletters.length})</CardTitle>
                <Button 
                  onClick={exportNewsletters}
                  disabled={newsletters.length === 0}
                  className="bg-sparkg-gold hover:bg-sparkg-gold/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {newsletters.map((newsletter) => (
                    <div key={newsletter.id} className="flex items-center justify-between p-4 bg-sparkg-dark/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Users className="w-8 h-8 text-sparkg-gold" />
                        <div>
                          <p className="text-white font-medium">{newsletter.name}</p>
                          <p className="text-sparkg-gray">{newsletter.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          Subscribed
                        </Badge>
                        <p className="text-sparkg-gray text-sm mt-1">{formatDate(newsletter.createdAt)}</p>
                      </div>
                    </div>
                  ))}
                  {newsletters.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sparkg-gray">No newsletter subscribers yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workshops">
            <Card className="bg-sparkg-black/30 border-sparkg-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Workshop Requests ({workshopRequests.length})</CardTitle>
                <Button 
                  onClick={exportWorkshops}
                  disabled={workshopRequests.length === 0}
                  className="bg-sparkg-gold hover:bg-sparkg-gold/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workshopRequests.map((request) => (
                    <div key={request.id} className="p-4 bg-sparkg-dark/50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Building className="w-8 h-8 text-sparkg-gold" />
                          <div>
                            <p className="text-white font-medium">{request.companyName}</p>
                            <p className="text-sparkg-gray">{request.email}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-sparkg-gold/20 text-sparkg-gold">
                          {formatDate(request.createdAt)}
                        </Badge>
                      </div>
                      <div className="ml-11">
                        <p className="text-sparkg-gray text-sm mb-3">
                          <strong>Message:</strong>
                        </p>
                        <p className="text-white bg-sparkg-black/20 p-3 rounded text-sm">
                          {request.message}
                        </p>
                      </div>
                    </div>
                  ))}
                  {workshopRequests.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sparkg-gray">No workshop requests yet</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card className="bg-sparkg-black/30 border-sparkg-border/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Contact Forms ({contactForms.length})</CardTitle>
                <Button 
                  onClick={exportContacts}
                  disabled={contactForms.length === 0}
                  className="bg-sparkg-gold hover:bg-sparkg-gold/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactForms.map((contact) => (
                    <div key={contact.id} className="p-4 bg-sparkg-dark/50 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="w-8 h-8 text-sparkg-gold" />
                          <div>
                            <p className="text-white font-medium">{contact.name}</p>
                            <p className="text-sparkg-gray">{contact.email}</p>
                            <p className="text-sparkg-gold text-sm">{contact.subject}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                          {formatDate(contact.createdAt)}
                        </Badge>
                      </div>
                      <div className="ml-11">
                        <p className="text-white bg-sparkg-black/20 p-3 rounded text-sm">
                          {contact.message}
                        </p>
                      </div>
                    </div>
                  ))}
                  {contactForms.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sparkg-gray">No contact forms yet</p>
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
