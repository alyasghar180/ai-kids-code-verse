
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, BookOpen, Zap, ArrowRight, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "AI Computer Interaction",
      description: "Learn how to communicate with AI systems through fun, interactive projects.",
      age: "8+",
      duration: "6 weeks",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      lessons: 12
    },
    {
      id: 2,
      title: "AI for Young Learners",
      description: "Discover the basics of artificial intelligence through games and storytelling.",
      age: "8+",
      duration: "4 weeks",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      lessons: 8
    },
    {
      id: 3,
      title: "Coding with AI: Step-by-Step",
      description: "Build amazing projects with guided tutorials and AI assistance.",
      age: "8+",
      duration: "8 weeks",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      lessons: 16
    },
    {
      id: 4,
      title: "Real World AI Applications",
      description: "Create practical applications that solve real problems using AI.",
      age: "8+",
      duration: "10 weeks",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      lessons: 20
    },
    {
      id: 5,
      title: "Building AI Agents",
      description: "Design and develop your own AI agents with advanced programming concepts.",
      age: "8+",
      duration: "12 weeks",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-gradient-to-br from-pink-400 to-red-500",
      lessons: 24
    }
  ];

  const testimonials = [
    {
      name: "Emma, Age 10",
      quote: "I built my first chatbot and now I want to create more AI friends!",
      avatar: "/placeholder.svg?height=60&width=60",
      course: "AI for Young Learners"
    },
    {
      name: "Sarah (Emma's Mom)",
      quote: "The courses are perfectly structured for kids. Emma is so excited about technology now!",
      avatar: "/placeholder.svg?height=60&width=60",
      course: "Parent Review"
    },
    {
      name: "Alex, Age 12",
      quote: "I never thought coding could be so fun! The AI projects are amazing.",
      avatar: "/placeholder.svg?height=60&width=60",
      course: "Building AI Agents"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Future-Ready Skills",
      description: "Prepare kids for tomorrow's digital world with cutting-edge AI knowledge."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Hands-on projects and real-world applications make learning engaging and fun."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals who know how to teach complex concepts simply."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-yellow-400/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-lg px-4 py-2">
                Ages 8+ • Physical Classes
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Empowering Kids to Code with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nurturing the next generation of creators, thinkers, and innovators through 
                interactive AI and coding education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Interactive AI Learning</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Next-Gen AI School?</h2>
            <p className="text-xl text-gray-600">We believe every child can become a tech leader</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Courses</h2>
            <p className="text-xl text-gray-600">Discover our most popular AI and coding programs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.slice(0, 3).map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                <div className={`h-48 ${course.color} flex items-center justify-center relative`}>
                  <div className="text-white text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-2" />
                    <Badge className="bg-white/20 text-white">
                      {course.lessons} Lessons
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Age {course.age}
                    </Badge>
                    <Badge variant="outline" className="text-gray-600">
                      {course.duration}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg rounded-full">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from kids and parents</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Child's AI Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of kids already learning the skills of tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300"
            >
              Schedule Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
