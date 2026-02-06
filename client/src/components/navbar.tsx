import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  const pillars = [
    { name: "AI & Cognitive Computing", href: "/pillars/ai-cognitive-computing" },
    { name: "Maritime & Offshore", href: "/pillars/maritime-offshore" },
    { name: "Asset Health & Predictive", href: "/pillars/asset-health-predictive" },
    { name: "Safety & Reliability", href: "/pillars/industrial-safety-risk" },
    { name: "Robotics & Digital Reality", href: "/pillars/robotics-autonomy-digital" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/logo-bg.png"
                  alt="V²S Logo"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* What We Do Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 flex items-center gap-1"
                  >
                    What We Do
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {pillars.map((pillar) => (
                    <DropdownMenuItem key={pillar.name} asChild>
                      <Link
                        href={pillar.href}
                        className="w-full cursor-pointer"
                      >
                        {pillar.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* What We Do Section */}
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      What We Do
                    </h3>
                    {pillars.map((pillar) => (
                      <Link
                        key={pillar.name}
                        href={pillar.href}
                        className="block text-base font-medium text-gray-700 hover:text-primary-600 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {pillar.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
