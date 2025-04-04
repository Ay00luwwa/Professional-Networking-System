"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { UserPlus, MessageSquare, Briefcase, Bell, Calendar, Clock, Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock notification types
type NotificationType = "connection" | "message" | "job" | "event";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  actionable: boolean;
  sender?: {
    name: string;
    avatar: string;
    title?: string;
  };
  job?: {
    title: string;
    company: string;
  };
}

export default function NotificationsPage() {
  // Mock notifications data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "connection",
      title: "Connection Request",
      description: "John Smith wants to connect with you",
      timestamp: "2 hours ago",
      read: false,
      actionable: true,
      sender: {
        name: "John Smith",
        avatar: "JS",
        title: "Product Manager at Tech Co"
      }
    },
    {
      id: "2",
      type: "message",
      title: "New Message",
      description: "Sarah Wilson sent you a message",
      timestamp: "1 day ago",
      read: false,
      actionable: false,
      sender: {
        name: "Sarah Wilson",
        avatar: "SW",
        title: "UX Designer at Creative Studios"
      }
    },
    {
      id: "3",
      type: "job",
      title: "Job Recommendation",
      description: "We found a job that matches your skills",
      timestamp: "3 days ago",
      read: true,
      actionable: true,
      job: {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc."
      }
    },
    {
      id: "4",
      type: "event",
      title: "Upcoming Event",
      description: "Tech Conference 2023 is happening next week",
      timestamp: "5 days ago",
      read: true,
      actionable: true
    },
    {
      id: "5",
      type: "connection",
      title: "Connection Request",
      description: "Michael Johnson wants to connect with you",
      timestamp: "1 week ago",
      read: true,
      actionable: true,
      sender: {
        name: "Michael Johnson",
        avatar: "MJ",
        title: "Senior Developer at Software Inc"
      }
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Mark notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  // Accept connection request
  const acceptConnection = (id: string) => {
    // In a real app, this would call an API
    toast({
      title: "Connection accepted",
      description: `You've accepted the connection request.`,
    });
    markAsRead(id);
  };

  // Decline connection request
  const declineConnection = (id: string) => {
    // In a real app, this would call an API
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // View job recommendation
  const viewJob = (id: string) => {
    // In a real app, this would navigate to the job page
    markAsRead(id);
  };

  // Mock toast function
  const toast = ({ title, description }: { title: string, description: string }) => {
    console.log(`${title}: ${description}`);
  };

  // Mark notifications as read when the component mounts
  useEffect(() => {
    // In a real app, this would call an API to update the read status
    // Here we're just simulating that the user has viewed the notifications
  }, []);

  // Get the icon for each notification type
  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "connection":
        return <UserPlus className="h-5 w-5 text-primary" />;
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case "job":
        return <Briefcase className="h-5 w-5 text-green-500" />;
      case "event":
        return <Calendar className="h-5 w-5 text-orange-500" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount > 0
                ? `You have ${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}`
                : 'No new notifications'}
            </p>
          </div>

          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>

        <Card>
          <CardHeader className="px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  {unreadCount > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {unreadCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="connections">Connections</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="pt-4">
                <NotificationsList
                  notifications={notifications}
                  markAsRead={markAsRead}
                  acceptConnection={acceptConnection}
                  declineConnection={declineConnection}
                  viewJob={viewJob}
                  getNotificationIcon={getNotificationIcon}
                />
              </TabsContent>

              <TabsContent value="unread" className="pt-4">
                <NotificationsList
                  notifications={notifications.filter(n => !n.read)}
                  markAsRead={markAsRead}
                  acceptConnection={acceptConnection}
                  declineConnection={declineConnection}
                  viewJob={viewJob}
                  getNotificationIcon={getNotificationIcon}
                />
              </TabsContent>

              <TabsContent value="connections" className="pt-4">
                <NotificationsList
                  notifications={notifications.filter(n => n.type === "connection")}
                  markAsRead={markAsRead}
                  acceptConnection={acceptConnection}
                  declineConnection={declineConnection}
                  viewJob={viewJob}
                  getNotificationIcon={getNotificationIcon}
                />
              </TabsContent>

              <TabsContent value="messages" className="pt-4">
                <NotificationsList
                  notifications={notifications.filter(n => n.type === "message")}
                  markAsRead={markAsRead}
                  acceptConnection={acceptConnection}
                  declineConnection={declineConnection}
                  viewJob={viewJob}
                  getNotificationIcon={getNotificationIcon}
                />
              </TabsContent>

              <TabsContent value="jobs" className="pt-4">
                <NotificationsList
                  notifications={notifications.filter(n => n.type === "job")}
                  markAsRead={markAsRead}
                  acceptConnection={acceptConnection}
                  declineConnection={declineConnection}
                  viewJob={viewJob}
                  getNotificationIcon={getNotificationIcon}
                />
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </MainLayout>
  );
}

// Notifications List Component
function NotificationsList({
  notifications,
  markAsRead,
  acceptConnection,
  declineConnection,
  viewJob,
  getNotificationIcon
}: {
  notifications: Notification[],
  markAsRead: (id: string) => void,
  acceptConnection: (id: string) => void,
  declineConnection: (id: string) => void,
  viewJob: (id: string) => void,
  getNotificationIcon: (type: NotificationType) => React.ReactNode
}) {

  if (notifications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No notifications found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border flex items-start gap-4 ${notification.read ? 'bg-white dark:bg-black' : 'bg-primary/5'}`}
          onClick={() => markAsRead(notification.id)}
        >
          <div className="p-2 rounded-full bg-muted">
            {getNotificationIcon(notification.type)}
          </div>

          <div className="flex-grow space-y-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{notification.title}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {notification.timestamp}
              </div>
            </div>

            {notification.sender && (
              <div className="flex items-center gap-2 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {notification.sender.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium">{notification.sender.name}</p>
                  {notification.sender.title && (
                    <p className="text-xs text-muted-foreground">{notification.sender.title}</p>
                  )}
                </div>
              </div>
            )}

            {notification.job && (
              <div className="mt-1">
                <p className="text-sm font-medium">{notification.job.title}</p>
                <p className="text-xs text-muted-foreground">{notification.job.company}</p>
              </div>
            )}

            <p className="text-sm text-muted-foreground">{notification.description}</p>

            {notification.actionable && (
              <div className="flex flex-wrap gap-2 mt-2">
                {notification.type === "connection" && (
                  <>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation();
                        acceptConnection(notification.id);
                      }}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        declineConnection(notification.id);
                      }}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                  </>
                )}

                {notification.type === "job" && (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      viewJob(notification.id);
                    }}
                  >
                    View Job
                  </Button>
                )}

                {notification.type === "event" && (
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    View Event
                  </Button>
                )}
              </div>
            )}
          </div>

          {!notification.read && (
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
