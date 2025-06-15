
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@nextgenaischool.com",
      description: "Get a response within 24 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Innovation Drive, Tech City, TC 12345",
      description: "Schedule a campus tour",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "Quick questions & support",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "Our programs are designed for children aged 8 and above. We have different tracks for various skill levels, from complete beginners to advanced programmers."
    },
    {
      question: "Do you offer online classes?",
      answer: "Currently, we focus on physical classes to ensure hands-on learning and better interaction. However, we're developing online options for the future."
    },
    {
      question: "What equipment does my child need?",
      answer: "We provide all necessary computers and equipment during classes. For homework and practice, a basic computer or tablet with internet access is helpful."
    },
    {
      question: "How do you ensure my child's safety online?",
      answer: "We have strict online safety protocols, supervised internet access, and teach digital citizenship as part of our curriculum."
    },
    {
      question: "Can I see my child's progress?",
      answer: "Yes! Parents receive regular progress reports and can access our student portal to track their child's achievements and completed projects."
    },
    {
      question: "What if my child has no coding experience?",
      answer: "Perfect! Most of our students start with zero coding experience. Our beginner courses are specifically designed for complete newcomers to programming."
    }
  ];

  const subjects = [
    "General Inquiry",
    "Course Information",
    "Enrollment Questions",
    "Technical Support",
    "Billing & Payments",
    "Schedule a Tour",
    "Partnership Opportunities",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-yellow-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 text-lg px-6 py-3">
            Get in Touch
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            We're Here to Help
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            Have questions about our AI and coding programs? Want to schedule a tour? 
            We'd love to hear from you and help your child start their journey into the future of technology.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{info.title}</h3>
                  <p className="text-gray-800 font-medium mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
            <p className="text-xl text-gray-600">We'll get back to you within 24 hours</p>
          </div>
          
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="rounded-lg border-gray-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="rounded-lg border-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="rounded-lg border-gray-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="rounded-lg border-gray-300">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      className="rounded-lg border-gray-300"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg py-4 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Phone & Email Support</h4>
              <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="opacity-90">Saturday: 10:00 AM - 4:00 PM EST</p>
              <p className="opacity-90">Sunday: Closed</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Campus Visits</h4>
              <p className="opacity-90">Monday - Saturday: By appointment</p>
              <p className="opacity-90">Tours available: 10:00 AM - 4:00 PM</p>
              <p className="opacity-90">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
