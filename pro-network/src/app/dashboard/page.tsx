"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Bell, Briefcase, Users, MessageSquare, Calendar, ArrowRight, UserPlus, Building, MapPin } from "lucide-react";

interface UserData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  location: string;
  bio: string;
  role: string;
  mobile_number: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
  skills: string;
  experience: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/auth/signin');
        toast({
          title: "Authentication required",
          description: "Please sign in to access the dashboard",
          variant: "destructive",
        });
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/me/', {
          headers: {
            'Authorization': `Token ${token}`,
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          const text = await response.text();
          console.error('Server response:', text);
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('User data:', data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast({
          title: "Error",
          description: "Failed to load user data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router, toast]);

  const getUserInitials = () => {
    if (!userData) return 'U';
    const firstName = userData.first_name || '';
    const lastName = userData.last_name || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U';
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container px-4 md:px-6 py-8">
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {userData?.first_name || 'User'}!</h1>
          <p className="text-muted-foreground">Here's what's happening in your network today.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick Stats */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Connections</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Messages</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Notifications</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                    {getUserInitials()}
                  </div>
                  <div>
                    <h3 className="font-medium">{userData?.first_name} {userData?.last_name}</h3>
                    <p className="text-sm text-muted-foreground">{userData?.role}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {userData?.location || 'Add location'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Bio</p>
                  <p className="text-sm text-muted-foreground">{userData?.bio || 'Add a bio to tell people about yourself'}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills</p>
                  <p className="text-sm text-muted-foreground">{userData?.skills || 'Add your skills'}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userData?.website && (
                    <Link href={userData.website} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">Website</Button>
                    </Link>
                  )}
                  {userData?.linkedin && (
                    <Link href={userData.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">LinkedIn</Button>
                    </Link>
                  )}
                  {userData?.github && (
                    <Link href={userData.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">GitHub</Button>
                    </Link>
                  )}
                  {userData?.twitter && (
                    <Link href={userData.twitter} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">Twitter</Button>
                    </Link>
                  )}
                </div>
                <Link href="/profile">
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Network Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle>Network Suggestions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">No suggestions available at the moment</p>
                <Button variant="outline" className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  View All Suggestions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">No recent activity</p>
                    <p className="text-sm text-muted-foreground">Your network activity will appear here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Recommendations */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Job Recommendations</CardTitle>
                <Link href="/jobs">
                  <Button variant="ghost" className="text-primary">
                    View All Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">No job recommendations available at the moment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
} 