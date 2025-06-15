
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Save to DB: see note in chat
    setDialogOpen(false);
    toast.success("Enrollment Submitted!", {
      description: "We have received your enrollment details.",
      duration: 5000,
    });
    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <div className="mt-6">
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/7964a8e3-f92e-4dde-995b-ffaceb073f57.png"
                alt="Next-Gen AI School Logo"
                className="w-12 h-12 rounded-full shadow-md object-cover bg-white"
              />
              <h1 className="text-2xl font-bold text-blue-600">
                Next-Gen AI School
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Enroll Now dialog */}
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 font-semibold"
                  >
                    Enroll Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Enroll Now</DialogTitle>
                    <DialogDescription>
                      Fill the form to express your interest. We will contact you!
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <Input
                      required
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleFormChange}
                    />
                    <Input
                      required
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleFormChange}
                    />
                    <Input
                      required
                      name="phone"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleFormChange}
                    />
                    <div className="flex justify-end pt-2 space-x-2">
                      <DialogClose asChild>
                        <Button variant="outline" type="button">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold">
                        Submit
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2">
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile Enroll Now Button */}
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full"
                    >
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Enroll Now</DialogTitle>
                      <DialogDescription>
                        Fill the form to express your interest. We will contact you!
                      </DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <Input
                        required
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleFormChange}
                      />
                      <Input
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleFormChange}
                      />
                      <Input
                        required
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleFormChange}
                      />
                      <div className="flex justify-end pt-2 space-x-2">
                        <DialogClose asChild>
                          <Button variant="outline" type="button">
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Infinite Scrolling Marquee for Contact Details */}
      <div className="w-full overflow-hidden bg-blue-50 border-b border-blue-200">
        <div
          className="whitespace-nowrap text-blue-800 font-semibold text-md py-2 animate-marquee"
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          <span className="mx-8">
            31-B-7 Old Civil Lines Near Care Hospital Sahiwal
            &nbsp;•&nbsp; www.NextgenaiSchool.Org
            &nbsp;•&nbsp; info@nextgenaischool.org
            &nbsp;•&nbsp; +92 313 6409165
            &nbsp;•&nbsp; +92 308 8062222
          </span>
          <span className="mx-8">
            31-B-7 Old Civil Lines Near Care Hospital Sahiwal
            &nbsp;•&nbsp; www.NextgenaiSchool.Org
            &nbsp;•&nbsp; info@nextgenaischool.org
            &nbsp;•&nbsp; +92 313 6409165
            &nbsp;•&nbsp; +92 308 8062222
          </span>
        </div>
      </div>
      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            min-width: 200%;
          }
        `}
      </style>
    </div>
  );
};

export default Navigation;
