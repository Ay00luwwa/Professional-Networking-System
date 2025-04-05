import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white dark:bg-black border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">General</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Browse</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learning" className="text-muted-foreground hover:text-primary">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-muted-foreground hover:text-primary">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/salary" className="text-muted-foreground hover:text-primary">
                  Salary
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Business Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/talent" className="text-muted-foreground hover:text-primary">
                  Talent
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-muted-foreground hover:text-primary">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/sales" className="text-muted-foreground hover:text-primary">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/learning-solutions" className="text-muted-foreground hover:text-primary">
                  Learning Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-primary">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-muted-foreground hover:text-primary">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-muted-foreground hover:text-primary">
                  Safety Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
              <span className="font-bold">P</span>
            </div>
            <span className="text-lg font-bold text-primary">ConnectMe</span>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ConnectMe Corporation. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
