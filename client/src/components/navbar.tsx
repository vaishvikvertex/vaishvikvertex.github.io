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
    { name: "What We Do", href: "/what-we-do" },
    { name: "Innovation", href: "/innovation" },
    { name: "Projects", href: "/projects" },
    { name: "Knowledge", href: "/knowledge-hub" },
    { name: "Media", href: "/media" },
  ];

  const collaborations = [
    { name: "Synergia Technologies", href: "/collaborations/synergia" },
    { name: "Orbitek Systems", href: "/collaborations/orbitek" },
    { name: "Novex Dynamics", href: "/collaborations/novex" },
    { name: "BlueCore Industries", href: "/collaborations/bluecore" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-900">V²S PVT.LTD.</h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
              
              {/* Collaborations Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 flex items-center gap-1"
                  >
                    Collaborations
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {collaborations.map((collaboration) => (
                    <DropdownMenuItem key={collaboration.name} asChild>
                      <Link
                        href={collaboration.href}
                        className="w-full cursor-pointer"
                      >
                        {collaboration.name}
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
                  
                  {/* Collaborations Section */}
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Collaborations
                    </h3>
                    {collaborations.map((collaboration) => (
                      <Link
                        key={collaboration.name}
                        href={collaboration.href}
                        className="block text-base font-medium text-gray-700 hover:text-primary-600 py-1 pl-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {collaboration.name}
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
