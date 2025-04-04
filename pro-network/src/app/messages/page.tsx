import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Phone, Video, MoreHorizontal, Send, Paperclip, Plus, Image, Smile } from "lucide-react";

// Mock conversations data
const conversations = [
  {
    id: 1,
    name: "John Smith",
    title: "Product Manager at Tech Co",
    avatar: "JS",
    lastMessage: "Thanks for the project update. Can we schedule a call this week?",
    time: "10:30 AM",
    unread: true,
    active: true,
    messages: [
      {
        id: 1,
        sender: "John Smith",
        content: "Hi there! I saw your profile and I'm impressed with your frontend development experience.",
        time: "Yesterday, 2:14 PM",
        isUser: false,
      },
      {
        id: 2,
        sender: "You",
        content: "Thank you, John! I appreciate that. How can I help you?",
        time: "Yesterday, 2:30 PM",
        isUser: true,
      },
      {
        id: 3,
        sender: "John Smith",
        content: "I'm leading a project at Tech Co and we're looking for a senior frontend developer. Would you be interested in discussing the opportunity?",
        time: "Yesterday, 3:45 PM",
        isUser: false,
      },
      {
        id: 4,
        sender: "You",
        content: "That sounds interesting! I'd be happy to learn more about the project and the role.",
        time: "Yesterday, 4:12 PM",
        isUser: true,
      },
      {
        id: 5,
        sender: "John Smith",
        content: "Great! I'll send you the project details in a bit. By the way, what frameworks are you most comfortable with?",
        time: "Yesterday, 5:30 PM",
        isUser: false,
      },
      {
        id: 6,
        sender: "You",
        content: "I'm most experienced with React and Next.js, but I've also worked with Vue and Angular in the past. I'm comfortable with TypeScript and modern CSS frameworks like Tailwind.",
        time: "Yesterday, 6:02 PM",
        isUser: true,
      },
      {
        id: 7,
        sender: "John Smith",
        content: "Perfect! That aligns well with our tech stack. I've just sent you the project overview via email.",
        time: "Yesterday, 6:45 PM",
        isUser: false,
      },
      {
        id: 8,
        sender: "John Smith",
        content: "Thanks for the project update. Can we schedule a call this week?",
        time: "Today, 10:30 AM",
        isUser: false,
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Wilson",
    title: "UX Designer at Creative Studios",
    avatar: "SW",
    lastMessage: "I'd love to collaborate on the new design system!",
    time: "Yesterday",
    unread: false,
    active: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Senior Developer at Software Inc",
    avatar: "MJ",
    lastMessage: "Let me know when you've reviewed the code.",
    time: "Tuesday",
    unread: false,
    active: false,
  },
  {
    id: 4,
    name: "Emma Davis",
    title: "Product Designer at UX Agency",
    avatar: "ED",
    lastMessage: "The latest prototype looks great. Looking forward to your feedback.",
    time: "Monday",
    unread: false,
    active: false,
  },
  {
    id: 5,
    name: "David Chen",
    title: "Software Engineer at Tech Innovations",
    avatar: "DC",
    lastMessage: "Did you see that new JavaScript framework? It's pretty interesting.",
    time: "Apr 15",
    unread: false,
    active: false,
  },
  {
    id: 6,
    name: "Olivia Martin",
    title: "Marketing Specialist at Brand Co",
    avatar: "OM",
    lastMessage: "The content for the campaign is almost ready.",
    time: "Apr 12",
    unread: false,
    active: false,
  },
];

export default function MessagesPage() {
  // Get the active conversation (for demo purposes, just use the first one)
  const activeConversation = conversations.find(conv => conv.active);

  return (
    <MainLayout>
      <div className="container px-0 md:px-6 py-0 md:py-8 h-[calc(100vh-65px)] flex flex-col">
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Conversation list */}
            <div className="hidden md:block border-r">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search messages" className="pl-8" />
                </div>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-220px)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b flex items-start gap-3 hover:bg-muted/50 cursor-pointer ${conversation.active ? 'bg-muted' : ''}`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {conversation.avatar}
                      </div>
                      {conversation.active && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.title}</p>
                      <p className="text-sm truncate">
                        {conversation.unread ? (
                          <span className="font-medium text-foreground">{conversation.lastMessage}</span>
                        ) : (
                          conversation.lastMessage
                        )}
                      </p>
                    </div>
                    {conversation.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  New Message
                </Button>
              </div>
            </div>

            {/* Conversation area */}
            <div className="col-span-2 flex flex-col h-full">
              {activeConversation ? (
                <>
                  {/* Conversation header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                          {activeConversation.avatar}
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background"></div>
                      </div>
                      <div>
                        <h3 className="font-medium">{activeConversation.name}</h3>
                        <p className="text-xs text-muted-foreground">{activeConversation.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {activeConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        {!message.isUser && (
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                              {activeConversation.avatar}
                            </div>
                          </div>
                        )}
                        <div className={`max-w-[70%] ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message input */}
                  <div className="p-3 border-t">
                    <div className="flex items-end gap-2">
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Image className="h-4 w-4" />
                      </Button>
                      <div className="relative flex-grow">
                        <Textarea
                          placeholder="Type a message..."
                          className="min-h-[50px] resize-none pr-10"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 bottom-2"
                        >
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <h3 className="font-medium text-lg">No conversation selected</h3>
                    <p className="text-muted-foreground">Choose a conversation or start a new one</p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90">
                      <Plus className="mr-2 h-4 w-4" />
                      New Message
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
