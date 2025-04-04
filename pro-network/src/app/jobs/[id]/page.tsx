"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { MapPin, Building, Clock, Briefcase, DollarSign, BarChart, BookmarkPlus, Share2, Flag, FileText, Upload, Check, AlertCircle } from "lucide-react";
import { useState } from "react";

// Mock job details
const jobsData = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    experience: "5+ years",
    posted: "2 days ago",
    description: "We're looking for an experienced Frontend Developer to join our team. The ideal candidate has 5+ years of experience with React, TypeScript, and modern web technologies.",
    responsibilities: [
      "Build high-quality, responsive web applications using React and TypeScript",
      "Collaborate with designers, product managers, and backend developers",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and provide constructive feedback",
      "Mentor junior developers and contribute to best practices"
    ],
    requirements: [
      "5+ years of experience with JavaScript and modern web technologies",
      "3+ years of experience with React and TypeScript",
      "Strong understanding of web fundamentals (HTML, CSS, browser compatibility)",
      "Experience with responsive design and cross-browser compatibility",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work hours and remote work options",
      "Professional development budget",
      "Generous paid time off"
    ],
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind CSS"],
    applicants: 24,
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Global Solutions",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    experience: "3+ years",
    posted: "1 week ago",
    description: "Join our product team to lead the development of innovative digital products. You'll work closely with design, engineering, and marketing teams.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize requirements from stakeholders",
      "Work with design and engineering teams to deliver high-quality products",
      "Analyze user feedback and metrics to inform product decisions",
      "Present product updates to leadership"
    ],
    requirements: [
      "3+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation skills",
      "Experience with agile development methodologies",
      "Technical background or ability to understand complex technical concepts"
    ],
    benefits: [
      "Competitive salary and bonus",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Career development opportunities",
      "Team events and activities"
    ],
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping", "Data Analysis"],
    applicants: 47,
  },
];

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = params.id;
  const job = jobsData.find(j => j.id === jobId);
  const router = useRouter();
  const { toast } = useToast();

  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeFile: null as File | null,
    coverLetter: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // If job not found, redirect to jobs page
  if (!job) {
    if (typeof window !== 'undefined') {
      router.push('/jobs');
    }
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({
        ...prev,
        resumeFile: e.target.files![0],
      }));
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!applicationData.name || !applicationData.email || !applicationData.resumeFile) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would submit the form data to an API
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationSubmitted(true);

      toast({
        title: "Application submitted",
        description: "Your application has been successfully submitted",
      });
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">{job.title}</h1>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <BookmarkPlus className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="h-4 w-4" />
                <span>{job.company}</span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Requirements</h2>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Benefits</h2>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Job Type</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Salary</span>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Posted</span>
                  <span className="font-medium">{job.posted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applicants</span>
                  <span className="font-medium">{job.applicants}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    {applicationSubmitted ? (
                      <div className="py-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <Check className="h-8 w-8 text-green-600" />
                        </div>
                        <DialogTitle>Application Submitted!</DialogTitle>
                        <DialogDescription>
                          Your application for <span className="font-medium">{job.title}</span> at <span className="font-medium">{job.company}</span> has been successfully submitted. We'll notify you when there are updates.
                        </DialogDescription>
                        <div className="flex justify-center gap-4 pt-4">
                          <Button variant="outline" onClick={() => router.push('/jobs')}>Browse More Jobs</Button>
                          <Button
                            className="bg-primary hover:bg-primary/90"
                            onClick={() => router.push('/profile/applications')}
                          >
                            View My Applications
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Please fill out the form below to apply for this position at {job.company}.
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleApplicationSubmit}>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                              <Input
                                id="name"
                                name="name"
                                value={applicationData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={applicationData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={applicationData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="resume">Resume <span className="text-red-500">*</span></Label>
                              <div className="border border-dashed rounded-md p-4">
                                <div className="flex flex-col items-center justify-center space-y-2">
                                  {applicationData.resumeFile ? (
                                    <div className="flex items-center gap-2">
                                      <FileText className="h-5 w-5 text-green-500" />
                                      <span className="text-sm">{applicationData.resumeFile.name}</span>
                                    </div>
                                  ) : (
                                    <>
                                      <Upload className="h-8 w-8 text-muted-foreground" />
                                      <p className="text-sm text-muted-foreground">Drag and drop your resume or click to browse</p>
                                    </>
                                  )}
                                  <Input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                  />
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => document.getElementById('resume')?.click()}
                                  >
                                    {applicationData.resumeFile ? "Change File" : "Upload Resume"}
                                  </Button>
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX. Max size: 5MB</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="coverLetter">Cover Letter</Label>
                              <Textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={applicationData.coverLetter}
                                onChange={handleInputChange}
                                placeholder="Write a brief cover letter (optional)"
                                className="min-h-[120px]"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                              {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                          </DialogFooter>
                        </form>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-md flex items-center justify-center">
                    <span className="text-primary font-bold">{job.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{job.company}</h3>
                    <p className="text-sm text-muted-foreground">Technology</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.company} is a leading technology company specializing in innovative solutions for enterprise clients. With a team of talented professionals, we're committed to delivering high-quality products and services.
                </p>
                <Button variant="outline" className="w-full">View Company Profile</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Report Job</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  <Flag className="h-4 w-4 mr-2" />
                  Report this job
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
