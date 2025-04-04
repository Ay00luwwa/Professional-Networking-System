"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Briefcase, Building, MapPin, Clock, BarChart, ArrowUpRight, FileText, CheckCircle, XCircle, Clock4 } from "lucide-react";

// Application status types
type ApplicationStatus = "pending" | "reviewed" | "interview" | "rejected" | "offered" | "withdrawn";

interface Application {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  appliedDate: string;
  status: ApplicationStatus;
  notes?: string;
  resume: string;
  coverLetter?: string;
  interviews?: {
    date: string;
    type: "phone" | "video" | "in-person";
    with: string;
    notes?: string;
  }[];
}

export default function ApplicationsPage() {
  const { toast } = useToast();

  // Mock applications data
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "1",
      jobTitle: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      appliedDate: "2 days ago",
      status: "reviewed",
      resume: "resume_jane_doe.pdf",
      coverLetter: "I'm excited to apply for the Senior Frontend Developer position...",
      interviews: [
        {
          date: "Apr 5, 2023",
          type: "phone",
          with: "HR Manager",
          notes: "Initial screening call went well. Will proceed to technical interview."
        }
      ]
    },
    {
      id: "2",
      jobTitle: "Product Manager",
      company: "Global Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      appliedDate: "1 week ago",
      status: "pending",
      resume: "resume_jane_doe.pdf"
    },
    {
      id: "3",
      jobTitle: "UX/UI Designer",
      company: "Creative Digital",
      location: "Los Angeles, CA (Hybrid)",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      appliedDate: "2 weeks ago",
      status: "interview",
      resume: "resume_jane_doe.pdf",
      coverLetter: "I'm excited to apply for the UX/UI Designer position...",
      interviews: [
        {
          date: "Apr 10, 2023",
          type: "video",
          with: "Design Lead",
          notes: "Portfolio review went well. Next round will be with the team."
        },
        {
          date: "Apr 15, 2023",
          type: "video",
          with: "Design Team",
          notes: "Team interview scheduled."
        }
      ]
    },
    {
      id: "4",
      jobTitle: "Frontend Developer",
      company: "Startup Studios",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      appliedDate: "1 month ago",
      status: "rejected",
      resume: "resume_jane_doe.pdf",
      notes: "Thank you for your application. We've decided to move forward with candidates who have more experience in our specific tech stack."
    },
    {
      id: "5",
      jobTitle: "Senior Product Designer",
      company: "Design Co",
      location: "Remote",
      type: "Contract",
      salary: "$60 - $80 per hour",
      appliedDate: "3 weeks ago",
      status: "offered",
      resume: "resume_jane_doe.pdf",
      coverLetter: "I'm excited to apply for the Senior Product Designer position...",
      notes: "Congratulations! We're pleased to offer you the position with a starting rate of $75/hour. Please review the attached offer letter."
    }
  ]);

  // Get counts for each status
  const pendingCount = applications.filter(app => app.status === "pending").length;
  const interviewCount = applications.filter(app => app.status === "interview").length;
  const rejectedCount = applications.filter(app => app.status === "rejected").length;
  const offeredCount = applications.filter(app => app.status === "offered").length;

  // Function to withdraw application
  const withdrawApplication = (id: string) => {
    // In a real app, this would call an API
    setApplications(prev =>
      prev.map(app =>
        app.id === id
          ? { ...app, status: "withdrawn" }
          : app
      )
    );

    toast({
      title: "Application withdrawn",
      description: "Your application has been withdrawn successfully.",
    });
  };

  // Helper function to get status badge
  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">Pending Review</Badge>;
      case "reviewed":
        return <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">Under Review</Badge>;
      case "interview":
        return <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">Interview Stage</Badge>;
      case "rejected":
        return <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">Not Selected</Badge>;
      case "offered":
        return <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">Offer Received</Badge>;
      case "withdrawn":
        return <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">Withdrawn</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  // Helper function to get status icon
  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case "pending":
        return <Clock4 className="h-5 w-5 text-blue-500" />;
      case "reviewed":
        return <Briefcase className="h-5 w-5 text-purple-500" />;
      case "interview":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "offered":
        return <CheckCircle className="h-5 w-5 text-amber-500" />;
      case "withdrawn":
        return <XCircle className="h-5 w-5 text-gray-500" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Applications</h1>
            <p className="text-muted-foreground">
              Track and manage your job applications
            </p>
          </div>

          <Button className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/jobs'}>
            Browse Jobs
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">{applications.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock4 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending/Under Review</p>
                <p className="text-2xl font-bold">{pendingCount}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interview Stage</p>
                <p className="text-2xl font-bold">{interviewCount}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Offers</p>
                <p className="text-2xl font-bold">{offeredCount}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="interview">Interviews</TabsTrigger>
                <TabsTrigger value="offered">Offers</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <ApplicationList
                  applications={applications}
                  withdrawApplication={withdrawApplication}
                  getStatusBadge={getStatusBadge}
                  getStatusIcon={getStatusIcon}
                />
              </TabsContent>

              <TabsContent value="active">
                <ApplicationList
                  applications={applications.filter(app => ["pending", "reviewed", "interview"].includes(app.status))}
                  withdrawApplication={withdrawApplication}
                  getStatusBadge={getStatusBadge}
                  getStatusIcon={getStatusIcon}
                />
              </TabsContent>

              <TabsContent value="interview">
                <ApplicationList
                  applications={applications.filter(app => app.status === "interview")}
                  withdrawApplication={withdrawApplication}
                  getStatusBadge={getStatusBadge}
                  getStatusIcon={getStatusIcon}
                />
              </TabsContent>

              <TabsContent value="offered">
                <ApplicationList
                  applications={applications.filter(app => app.status === "offered")}
                  withdrawApplication={withdrawApplication}
                  getStatusBadge={getStatusBadge}
                  getStatusIcon={getStatusIcon}
                />
              </TabsContent>

              <TabsContent value="archived">
                <ApplicationList
                  applications={applications.filter(app => ["rejected", "withdrawn"].includes(app.status))}
                  withdrawApplication={withdrawApplication}
                  getStatusBadge={getStatusBadge}
                  getStatusIcon={getStatusIcon}
                />
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </MainLayout>
  );
}

// Application List Component
function ApplicationList({
  applications,
  withdrawApplication,
  getStatusBadge,
  getStatusIcon
}: {
  applications: Application[],
  withdrawApplication: (id: string) => void,
  getStatusBadge: (status: ApplicationStatus) => React.ReactNode,
  getStatusIcon: (status: ApplicationStatus) => React.ReactNode
}) {

  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No applications found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold">{application.jobTitle}</h3>
                    {getStatusBadge(application.status)}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{application.company}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`/jobs/${application.id}`} target="_blank" rel="noopener noreferrer">
                      View Job
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  {["pending", "reviewed", "interview"].includes(application.status) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => withdrawApplication(application.id)}
                    >
                      Withdraw
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{application.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{application.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  <span>{application.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Applied {application.appliedDate}</span>
                </div>
              </div>

              {application.notes && (
                <div className="bg-muted p-3 rounded-md mb-4">
                  <p className="text-sm text-muted-foreground">{application.notes}</p>
                </div>
              )}

              {application.interviews && application.interviews.length > 0 && (
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium">Interviews</h4>
                  <div className="space-y-2">
                    {application.interviews.map((interview, index) => (
                      <div key={index} className="bg-muted p-3 rounded-md">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{interview.type.charAt(0).toUpperCase() + interview.type.slice(1)} Interview with {interview.with}</div>
                          <div className="text-sm text-muted-foreground">{interview.date}</div>
                        </div>
                        {interview.notes && <p className="text-sm text-muted-foreground">{interview.notes}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  View Resume
                </Button>
                {application.coverLetter && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    View Cover Letter
                  </Button>
                )}
              </div>
            </div>

            <div className="bg-muted py-6 px-4 flex flex-col items-center justify-center gap-2 min-w-[100px]">
              {getStatusIcon(application.status)}
              <div className="text-xs font-medium text-center">
                {application.status === "pending" && "Pending Review"}
                {application.status === "reviewed" && "Under Review"}
                {application.status === "interview" && "Interview Stage"}
                {application.status === "rejected" && "Not Selected"}
                {application.status === "offered" && "Offer Received"}
                {application.status === "withdrawn" && "Withdrawn"}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
