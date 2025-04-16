"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Bell,
  MessageSquare,
  Briefcase,
  Users,
  User,
  Menu,
  Home,
  LogOut
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [notificationsCount, setNotificationsCount] = useState(3); // Mock notification count

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
              <span className="font-bold">C</span>
            </div>
            <span className="hidden md:inline-flex text-xl font-bold text-primary">ConnectMe</span>
          </Link>
          <div className="hidden md:flex relative w-60">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 bg-muted"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          {status === "authenticated" ? (
            <>
              <div className="hidden md:flex items-center gap-1">
                <Link href="/">
                  <Button variant="ghost" size="icon" aria-label="Home">
                    <Home className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/network">
                  <Button variant="ghost" size="icon" aria-label="My Network">
                    <Users className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button variant="ghost" size="icon" aria-label="Jobs">
                    <Briefcase className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/messages">
                  <Button variant="ghost" size="icon" aria-label="Messages">
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/notifications">
                  <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
                    <Bell className="h-5 w-5" />
                    {notificationsCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-primary">
                        {notificationsCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 border">
                      <div className="w-full h-full flex items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                        {session.user?.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center gap-2 p-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                        {session.user?.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                      </div>
                      <div>
                        <p className="font-medium">{session.user?.name}</p>
                        <p className="text-xs text-muted-foreground">{session.user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="cursor-pointer">View Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/signin">
                <Button variant="outline" className="hidden md:flex">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-primary hover:bg-primary/90">Join Now</Button>
              </Link>
            </div>
          )}

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                {status === "authenticated" ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/network">My Network</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/jobs">Jobs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/messages">Messages</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/notifications">Notifications</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleSignOut}>
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/jobs">Jobs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/auth/signin">Sign In</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/auth/signup">Join Now</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
