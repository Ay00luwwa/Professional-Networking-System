import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Building, Briefcase, GraduationCap, Edit, Link as LinkIcon, UserPlus, MessageSquare } from "lucide-react";

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Jane Doe",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    connections: 732,
    about: "Passionate frontend developer with 8+ years of experience building responsive and accessible web applications. Specializing in React, TypeScript, and modern frontend frameworks. Committed to creating seamless user experiences and mentoring junior developers.",
    experience: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA (Remote)",
        duration: "2021 - Present",
        description: "Lead frontend developer for the company's flagship product. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Digital Solutions",
        location: "New York, NY",
        duration: "2018 - 2021",
        description: "Developed responsive web applications using React and TypeScript. Collaborated with design and backend teams to implement new features.",
      },
      {
        id: 3,
        title: "Junior Web Developer",
        company: "Startup Studios",
        location: "Austin, TX",
        duration: "2015 - 2018",
        description: "Built and maintained client websites using HTML, CSS, and JavaScript. Worked closely with designers to implement pixel-perfect designs.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        duration: "2011 - 2015",
      },
    ],
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Tailwind CSS", "Redux", "GraphQL", "UI/UX Design", "Responsive Design", "Accessibility"],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      {
        id: 2,
        name: "Professional Frontend Developer",
        issuer: "Frontend Masters",
        date: "2021",
      },
    ],
    languages: ["English (Native)", "Spanish (Professional Working)"],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform Redesign",
        description: "Led the frontend redesign of a major e-commerce platform, resulting in a 25% increase in conversion rate and 40% reduction in bounce rate.",
      },
      {
        id: 2,
        name: "Accessibility Audit Tool",
        description: "Developed an internal tool to audit web applications for accessibility issues, helping the company achieve WCAG 2.1 AA compliance.",
      },
    ],
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white text-4xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-xl text-muted-foreground">{user.title}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                      {user.company && (
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span>{user.company}</span>
                        </div>
                      )}
                      {user.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{user.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <UserPlus className="h-4 w-4" />
                        <span>{user.connections} connections</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="border-primary text-primary">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>About</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p>{user.about}</p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Experience</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {user.experience.map((exp, index) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <div className="text-muted-foreground space-y-1">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm">{exp.description}</p>
                      {index < user.experience.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Education</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {user.education.map((edu, index) => (
                    <div key={edu.id} className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{edu.school}</h3>
                          <div className="text-muted-foreground space-y-1">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4" />
                              <span>{edu.degree}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < user.education.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Projects</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {user.projects.map((project, index) => (
                    <div key={project.id} className="space-y-2">
                      <h3 className="font-bold text-lg">{project.name}</h3>
                      <p className="text-sm">{project.description}</p>
                      {index < user.projects.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Skills</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map(skill => (
                    <Badge key={skill} variant="outline" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Certifications</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user.certifications.map(cert => (
                    <div key={cert.id} className="space-y-1">
                      <h3 className="font-bold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Languages</CardTitle>
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {user.languages.map((language, idx) => (
                    <li key={idx}>{language}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
