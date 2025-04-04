import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Building, Briefcase, Clock, Filter, BookmarkPlus } from "lucide-react";

// Mock job data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    description: "We're looking for an experienced Frontend Developer to join our team. The ideal candidate has 5+ years of experience with React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Global Solutions",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    posted: "1 week ago",
    description: "Join our product team to lead the development of innovative digital products. You'll work closely with design, engineering, and marketing teams.",
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Remote",
    type: "Contract",
    salary: "$90 - $110 per hour",
    posted: "3 days ago",
    description: "Looking for a seasoned DevOps engineer to help us build and maintain our cloud infrastructure using AWS, Kubernetes, and CI/CD pipelines.",
    skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Terraform"],
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "Creative Digital",
    location: "Los Angeles, CA (Hybrid)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "5 days ago",
    description: "Looking for a talented UX/UI Designer to create beautiful, intuitive interfaces for our clients. Must have experience with Figma and design systems.",
    skills: ["Figma", "UI Design", "UX Research", "Design Systems"],
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "1 day ago",
    description: "Join our data science team to build machine learning models and derive insights from large datasets. Must have experience with Python, SQL, and machine learning frameworks.",
    skills: ["Python", "SQL", "Machine Learning", "TensorFlow", "PyTorch"],
  },
];

export default function JobsPage() {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
          <Button className="bg-primary hover:bg-primary/90">Post a Job</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Search and filters sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Search Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Job title, skills, or company"
                    className="pl-8"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    className="pl-8"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Search</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Job Type</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="full-time" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="full-time" className="text-sm">Full-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="part-time" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="part-time" className="text-sm">Part-time</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="contract" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="contract" className="text-sm">Contract</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="internship" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="internship" className="text-sm">Internship</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Experience Level</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="entry" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="entry" className="text-sm">Entry Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mid" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="mid" className="text-sm">Mid Level</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="senior" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="senior" className="text-sm">Senior Level</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Location Type</h3>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remote" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="remote" className="text-sm">Remote</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="onsite" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="onsite" className="text-sm">On-site</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="hybrid" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="hybrid" className="text-sm">Hybrid</label>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">Clear Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Job listings */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="recommended">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                </TabsList>
                <div className="text-sm text-muted-foreground">
                  {jobs.length} jobs found
                </div>
              </div>

              <TabsContent value="recommended" className="space-y-4 mt-4">
                {jobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <div className="space-y-3">
                          <div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building className="h-4 w-4" />
                              <span>{job.company}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>

                          <p className="text-sm line-clamp-2">{job.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="bg-primary/10 text-primary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <BookmarkPlus className="h-5 w-5" />
                          </Button>
                          <div className="text-sm font-medium text-muted-foreground">
                            {job.salary}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 px-6 py-3">
                      <div className="flex justify-between items-center w-full">
                        <div className="text-sm text-muted-foreground">
                          Be an early applicant
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4 mt-4">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Switch to the Recent tab to see the latest job listings.</p>
                </div>
              </TabsContent>

              <TabsContent value="saved" className="space-y-4 mt-4">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Save jobs to view them later in this tab.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
