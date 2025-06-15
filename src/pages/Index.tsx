import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Users,
  BookOpen,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses as featuredCourses } from "@/data/courses";

const Index = () => {
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

  // Array of images to show in hero
  const heroImages = [
    {
      src: "/lovable-uploads/e6f59396-fb6d-49e7-b0ac-de2ee719afd3.png",
      alt: "Graduate looking at AI city",
    },
    {
      src: "/lovable-uploads/09f8fffe-8493-4b7c-97c8-0a7fc60d6417.png",
      alt: "Girl learning AI on laptop",
    },
    {
      src: "/lovable-uploads/49eac747-6f00-4f7c-ad78-cf4c38c2105c.png",
      alt: "Confident school students",
    },
    {
      src: "/lovable-uploads/3542977f-e149-4e49-b26c-75d467114156.png",
      alt: "Smiling student with books",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,235,255,0.7),rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline and CTA */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                100% SATISFACTION GUARANTEE
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                Empowering Kids to Code with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nurturing the next generation of creators, thinkers, and innovators
                through interactive AI and coding education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join For Free
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full transition-all duration-300 font-bold"
                >
                  <Play className="mr-2 h-5 w-5 fill-blue-600" />
                  See How It Works
                </Button>
              </div>
            </div>
            {/* Right: Animated Hero Images */}
            <div className="relative h-96 flex items-center justify-center lg:block">
              {/* Decorative floating circles */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-300 rounded-full opacity-80"></div>
              <div className="absolute bottom-12 -left-12 w-10 h-10 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-20 w-6 h-6 bg-purple-300 rounded-full opacity-70"></div>
              <div className="grid grid-cols-2 gap-4 h-full items-center">
                {heroImages.map((img, i) => (
                  <div
                    key={img.src}
                    className={`
                      flex items-center justify-center 
                      ${i % 2 === 0 ? "pt-10" : "pb-10"}
                      animate-fade-in
                      group
                    `}
                    style={{
                      animation: `fade-in 0.6s ${(i+1)*0.1}s both, scale-in 0.4s ${(i+1)*0.15}s both`
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`
                        ${i % 2 === 0 ? "rounded-full" : "rounded-3xl"} 
                        object-cover
                        w-40 h-40 lg:w-48 lg:h-48 
                        shadow-lg border-4 border-white
                        transition-transform duration-300
                        group-hover:scale-110
                        hover:shadow-2xl hover:brightness-105
                        hover:-translate-y-2
                        hover:ring-4 hover:ring-blue-200
                        cursor-pointer
                      `}
                      style={{
                        boxShadow: "0 8px 36px 0 rgba(80, 100, 255, 0.15)",
                        transitionProperty: "transform, box-shadow, filter"
                      }}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
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
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description.substring(0, 100)}...</p>
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
