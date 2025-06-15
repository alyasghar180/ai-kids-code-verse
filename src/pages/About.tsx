
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Lightbulb, Users, Award, Rocket, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Creativity",
      description: "We believe in nurturing each child's unique creative potential through innovative AI projects.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem-Solving",
      description: "Teaching kids to think critically and solve real-world challenges using technology.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Future-Ready",
      description: "Preparing students for careers that don't exist yet with adaptable, foundational skills.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Building teamwork skills through group projects and peer learning experiences.",
      color: "from-green-500 to-teal-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Students", icon: <Users className="h-6 w-6" /> },
    { number: "50+", label: "Expert Instructors", icon: <Award className="h-6 w-6" /> },
    { number: "15+", label: "AI Courses", icon: <Target className="h-6 w-6" /> },
    { number: "98%", label: "Parent Satisfaction", icon: <Heart className="h-6 w-6" /> }
  ];

  const whyAI = [
    "AI is becoming part of everyday life - from voice assistants to recommendation systems",
    "Early exposure helps children understand and shape the technology they'll live with",
    "AI education develops computational thinking and logical reasoning skills",
    "Children who learn AI early will have significant advantages in future careers",
    "AI projects encourage creativity while teaching practical programming skills"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-yellow-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 text-lg px-6 py-3">
            About Next-Gen AI School
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Empowering Tomorrow's Leaders
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            At Next-Gen AI School, we believe every child has the potential to become a tech leader. 
            Our mission is to make AI and coding education accessible, engaging, and transformative 
            for young minds aged 8 and above.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We exist to bridge the gap between today's education and tomorrow's needs. 
                Through hands-on learning experiences, we transform complex AI concepts 
                into exciting adventures that inspire curiosity and build confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach combines the latest in educational technology with proven 
                pedagogical methods, ensuring that every child not only learns to code 
                but develops the critical thinking skills essential for the AI age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                  Join Our Mission
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Target className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Building Future Leaders</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center relative">
                <div className="text-white text-center">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">The Future is AI</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Why AI for Kids?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Artificial Intelligence isn't just the future—it's the present. By introducing 
                children to AI concepts early, we're not just teaching them to use technology; 
                we're empowering them to shape it.
              </p>
              <div className="space-y-4">
                {whyAI.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a movement that's shaping the next generation of innovators and problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Courses
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
