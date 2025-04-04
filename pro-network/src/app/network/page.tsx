import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, UserCheck, Search, Building, MapPin, Filter, X, Users } from "lucide-react";

// Mock connection requests data
const connectionRequests = [
  {
    id: 1,
    name: "John Smith",
    title: "Product Manager at Tech Co",
    mutualConnections: 12,
    avatarInitials: "JS",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    title: "UX Designer at Creative Studios",
    mutualConnections: 5,
    avatarInitials: "SW",
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Senior Developer at Software Inc",
    mutualConnections: 8,
    avatarInitials: "MJ",
  },
];

// Mock suggested connections data
const suggestedConnections = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Frontend Developer at Web Solutions",
    mutualConnections: 15,
    avatarInitials: "AT",
  },
  {
    id: 2,
    name: "Emma Davis",
    title: "Product Designer at UX Agency",
    mutualConnections: 7,
    avatarInitials: "ED",
  },
  {
    id: 3,
    name: "David Chen",
    title: "Software Engineer at Tech Innovations",
    mutualConnections: 9,
    avatarInitials: "DC",
  },
  {
    id: 4,
    name: "Olivia Martin",
    title: "Marketing Specialist at Brand Co",
    mutualConnections: 4,
    avatarInitials: "OM",
  },
  {
    id: 5,
    name: "James Wilson",
    title: "Data Scientist at Analytics Pro",
    mutualConnections: 11,
    avatarInitials: "JW",
  },
  {
    id: 6,
    name: "Sophie Garcia",
    title: "Project Manager at Global Systems",
    mutualConnections: 6,
    avatarInitials: "SG",
  },
];

export default function NetworkPage() {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Network</h1>
          <div className="flex gap-2">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search connections" className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Connection stats */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">732</div>
                  <div className="text-sm text-muted-foreground">Connections</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <UserPlus className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{connectionRequests.length}</div>
                  <div className="text-sm text-muted-foreground">Pending Requests</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">48</div>
                  <div className="text-sm text-muted-foreground">Company Connections</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">120</div>
                  <div className="text-sm text-muted-foreground">Local Connections</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection requests */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Connection Requests</CardTitle>
            </CardHeader>
            <CardContent>
              {connectionRequests.length > 0 ? (
                <div className="space-y-4">
                  {connectionRequests.map((request) => (
                    <div key={request.id} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                          {request.avatarInitials}
                        </div>
                      </div>
                      <div className="flex-grow space-y-1 min-w-0">
                        <h3 className="font-medium truncate">{request.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{request.title}</p>
                        <p className="text-xs text-muted-foreground">{request.mutualConnections} mutual connections</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1">Accept</Button>
                          <Button size="sm" variant="outline" className="flex-1">Ignore</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No pending connection requests</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Suggested connections */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">People You May Know</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {suggestedConnections.map((connection) => (
                  <div key={connection.id} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                        {connection.avatarInitials}
                      </div>
                    </div>
                    <div className="flex-grow space-y-1 min-w-0">
                      <h3 className="font-medium truncate">{connection.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{connection.title}</p>
                      <p className="text-xs text-muted-foreground">{connection.mutualConnections} mutual connections</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <UserPlus className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                        <Button size="sm" variant="ghost">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Connection tabs */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-xl">Your Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Connections</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="colleagues">Colleagues</TabsTrigger>
                  <TabsTrigger value="industry">Same Industry</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Your connections will appear here. Connect with more professionals to grow your network.
                    </p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90">Find People</Button>
                  </div>
                </TabsContent>

                <TabsContent value="recent">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Your recent connections will appear here.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="colleagues">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connections from your current and previous companies will appear here.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="industry">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connections from your industry will appear here.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
