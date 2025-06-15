
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
  Cpu,
  Sparkles,
  Code,
  BrainCog
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses as featuredCourses } from "@/data/courses";
import { motion, AnimatePresence } from "framer-motion";

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

  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Future-Ready Skills",
      description: "Prepare kids for tomorrow's digital world with cutting-edge AI knowledge.",
      bg: "bg-gradient-to-br from-violet-200 via-yellow-50 to-blue-100",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Hands-on projects and real-world applications make learning engaging and fun.",
      bg: "bg-gradient-to-br from-violet-200 via-yellow-50 to-blue-100",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals who know how to teach complex concepts simply.",
      bg: "bg-gradient-to-br from-violet-200 via-yellow-50 to-blue-100",
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,235,255,0.7),rgba(255,255,255,0))]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline and CTA */}
            <div className="text-center lg:text-left">
              {/* 100% SATISFACTION GUARANTEE */}
              <motion.p
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 bg-gradient-to-r from-[#3A86FF] to-[#FFBE0B] bg-clip-text text-transparent"
                style={{ letterSpacing: "0.18em" }}
              >
                100% SATISFACTION GUARANTEE
              </motion.p>
              {/* Animated Headline */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, type: "spring", stiffness: 60 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 font-['Fredoka',_Quicksand,_Baloo_2,_Nunito,_sans-serif] leading-tight"
              >
                <span className="inline-block bg-gradient-to-r from-[#3A86FF] via-[#FFBE0B] to-[#FF006E] bg-clip-text text-transparent px-1">
                  Empowering Kids
                </span>
                {" "}
                <span className="inline-block bg-gradient-to-r from-[#83C5BE] to-[#CDB4DB] bg-clip-text text-transparent px-1 animate-pulse">
                  to Code
                </span>
                {" with "}
                <span className="inline-block bg-gradient-to-r from-[#FFBE0B] via-[#3A86FF] to-[#FF006E] bg-clip-text text-transparent px-1 animate-glow font-black shadow-blue-400">
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.35, type: "spring", stiffness: 80 }}
                    className="drop-shadow-lg"
                  >
                    AI
                  </motion.span>
                </span>
              </motion.h1>
              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-['Nunito',_Inter,_sans-serif] max-w-2xl mx-auto"
              >
                <span className="inline-block">
                  Nurturing the
                </span>{" "}
                <span className="inline-block bg-gradient-to-r from-[#FFBE0B] to-[#83C5BE] bg-clip-text text-transparent font-bold">
                  next generation
                </span>{" "}
                <span className="inline-block">of creators, thinkers,&nbsp;and</span>
                <span className="inline-block bg-gradient-to-r from-[#FF006E] to-[#3A86FF] bg-clip-text text-transparent font-bold">
                  innovators
                </span>
                <span>
                  &nbsp;through interactive&nbsp;
                  <span className="text-[#3A86FF] font-semibold">AI</span>{" "}
                  and&nbsp;coding&nbsp;education.
                </span>
              </motion.p>
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
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
              </motion.div>
            </div>
            {/* Right: Animated/Atrractive Illustration replacing Images */}
            <div className="relative h-96 flex items-center justify-center lg:block overflow-visible">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 32 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, type: "spring", bounce: 0.2 }}
                className="relative w-80 h-80 mx-auto flex items-center justify-center"
              >
                {/* Large Blurred AI Glow Blob */}
                <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-yellow-300/60 via-blue-200/60 to-purple-200/70 blur-2xl opacity-80 animate-pulse" />
                {/* Layered Colorful Rings */}
                <div className="absolute w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blue-400/50 animate-spin-slow"></div>
                <div className="absolute w-36 h-36 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-300/40 animate-spin-reverse"></div>
                <div className="absolute w-28 h-28 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pink-400/50 animate-spin-fast"></div>
                {/* Dots and Spark Animations */}
                <Sparkles className="absolute top-10 left-7 text-pink-500 opacity-70 animate-bounce" size={32} />
                <Cpu className="absolute bottom-12 right-8 text-blue-600 animate-float" size={40} />
                <motion.div
                  className="absolute bottom-8 left-9 flex items-center animate-jump"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Code className="text-yellow-500 mr-2" size={28}/>
                  <span className="text-blue-700 font-bold drop-shadow-md animate-bounce">AI</span>
                </motion.div>
                {/* Center Icon */}
                <motion.div
                  className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 flex items-center justify-center shadow-xl border-white border-4 mx-auto"
                  animate={{
                    scale: [1, 1.11, 1],
                    rotate: [0, 6, -6, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <BrainCog className="text-white animate-spin-slow" size={54}/>
                </motion.div>
                {/* Decorative small dots */}
                <div className="absolute top-16 right-24 w-4 h-4 bg-pink-400 rounded-full blur-sm opacity-90 animate-ping"></div>
                <div className="absolute bottom-20 left-16 w-3 h-3 bg-yellow-300 rounded-full blur-[2px] opacity-70 animate-pulse"></div>
              </motion.div>
              {/* Key @tailwindcss animations for spin, float, bounce etc (if those classes don't exist add to Tailwind config) */}
              <style>
                {`
                  @keyframes spin-slow { 100% { transform: rotate(360deg); }}
                  @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
                  @keyframes spin-fast { 100% { transform: rotate(540deg); }}
                  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px);} }
                  @keyframes jump { 0%, 100% { transform: translateY(0);} 50% { transform: translateY(-18px);} }
                  .animate-spin-slow { animation: spin-slow 7s linear infinite; }
                  .animate-spin-reverse { animation: spin-reverse 5s linear infinite; }
                  .animate-spin-fast { animation: spin-fast 2.5s linear infinite;}
                  .animate-float { animation: float 2.6s ease-in-out infinite; }
                  .animate-jump { animation: jump 2.2s cubic-bezier(.4,0,.6,1) infinite; }
                `}
              </style>
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
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 45, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04, boxShadow: "0 4px 50px 0 rgba(58,134,255,0.20)" }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 + index * 0.18,
                  type: "spring",
                  stiffness: 60,
                  bounce: 0.35
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full"
              >
                <Card
                  className={`
                    text-center p-8 hover:shadow-2xl transition-shadow duration-300 border-0
                    ${benefit.bg}
                    relative overflow-hidden group
                    cursor-pointer
                  `}
                  style={{
                    backgroundBlendMode: "overlay",
                    boxShadow: "0 4px 30px 0 rgba(58,134,255,0.13)",
                    borderRadius: "1.25rem"
                  }}
                >
                  <CardContent className="pt-6">
                    <motion.div
                      className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-inner border border-white/40 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{
                        rotate: [0, 6, -6, 0],
                        scale: 1.13
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 6,
                        repeat: 0,
                        duration: 0.5
                      }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-extrabold mb-4 text-gray-800 drop-shadow font-['Fredoka','Quicksand','Baloo 2',sans-serif]">
                      <motion.span
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.65,
                          delay: 0.24 + index * 0.14,
                          type: "tween"
                        }}
                        viewport={{ once: true }}
                        className="block bg-gradient-to-r from-[#3A86FF] via-[#FFBE0B] to-[#FF006E] bg-clip-text text-transparent"
                      >
                        {benefit.title}
                      </motion.span>
                    </h3>
                    <motion.p
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.80,
                        delay: 0.31 + index * 0.14,
                        type: "tween"
                      }}
                      viewport={{ once: true }}
                      className="text-gray-700 leading-relaxed font-['Nunito', 'Inter', sans-serif]"
                    >
                      {benefit.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
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

