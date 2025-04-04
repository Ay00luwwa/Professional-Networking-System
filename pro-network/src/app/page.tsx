import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, Users, Award, Lightbulb, Search, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-white dark:bg-black overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary text-primary">
                  Professional Networking Reimagined
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Connect, Collaborate, and Grow Your Career
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join millions of professionals. Find opportunities, share knowledge, and build your professional brand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Join Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative lg:pl-10">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="h-[350px] w-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                          JD
                        </div>
                        <div>
                          <h3 className="font-bold">Jane Doe</h3>
                          <p className="text-sm text-muted-foreground">Software Engineer at Tech Company</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 bg-muted rounded w-full"></div>
                        <div className="h-2 bg-muted rounded w-5/6"></div>
                        <div className="h-2 bg-muted rounded w-4/6"></div>
                      </div>
                      <div className="absolute bottom-6 right-6 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted"></div>
                        <div className="w-8 h-8 rounded-full bg-muted"></div>
                        <div className="w-8 h-8 rounded-full bg-muted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">The Professional Network for Everyone</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Join millions of professionals around the world in building your career
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-sm md:text-base text-muted-foreground">Global Users</div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20M+</div>
              <div className="text-sm md:text-base text-muted-foreground">Job Listings</div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-sm md:text-base text-muted-foreground">Countries</div>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow p-4 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm md:text-base text-muted-foreground">Fortune 500</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Tools and resources designed to help you at every stage of your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Briefcase className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Find the Right Job</CardTitle>
                <CardDescription>
                  Search millions of jobs and get matched with opportunities aligned with your skills and experience.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/jobs">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Explore Jobs <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Build Your Network</CardTitle>
                <CardDescription>
                  Connect with colleagues, industry peers, and potential mentors to expand your professional circle.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/network">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Grow Network <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Lightbulb className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Learn New Skills</CardTitle>
                <CardDescription>
                  Access courses and resources to develop in-demand skills and advance your career.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/learning">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Search className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Find Talent</CardTitle>
                <CardDescription>
                  Post jobs and search for candidates with the skills and experience your organization needs.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/hire">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Post a Job <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Showcase Your Skills</CardTitle>
                <CardDescription>
                  Build a professional profile that highlights your achievements, skills, and experience.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/profile">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Create Profile <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Stay Connected</CardTitle>
                <CardDescription>
                  Engage with your network through messaging, updates, and industry news.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/messages">
                  <Button variant="ghost" className="text-primary flex items-center gap-1">
                    Start Messaging <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Take the Next Step?</h2>
              <p className="text-lg max-w-[600px]">
                Join ProNetwork today to connect with professionals, find opportunities, and grow your career.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <Link href="/auth/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
