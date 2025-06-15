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
import FlipCard from "@/components/FlipCard";

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

  return (
    <div className="relative min-h-screen bg-white font-sans bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/75 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,235,255,0.7),rgba(255,255,255,0))]"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headline and CTA */}
              <div className="text-center lg:text-left">
                {/* 100% SATISFACTION GUARANTEE */}
                <p
                  className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.18em] mb-6 text-gray-700"
                  style={{ letterSpacing: "0.18em" }}
                >
                  100% SATISFACTION GUARANTEE
                </p>
                {/* Responsive Clean Headline */}
                <h1
                  className="text-5xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold mb-6 font-['Fredoka',_Quicksand,_Baloo_2,_Nunito,_sans-serif] leading-tight text-gray-900"
                  style={{ lineHeight: "1.08" }}
                >
                  Empowering Kids
                  <span className="font-semibold ml-2" style={{ fontWeight: 550 }}>
                    to Code
                  </span>
                  <span className="font-bold ml-2" style={{ fontWeight: 700 }}>
                    with AI
                  </span>
                </h1>
                {/* Clean Subheading */}
                <p
                  className="text-lg xs:text-xl sm:text-2xl text-gray-700 mb-7 leading-relaxed font-['Nunito',_Inter,_sans-serif] max-w-2xl mx-auto"
                >
                  Nurturing the next generation of creators, thinkers, and innovators through interactive AI and coding education.
                </p>
                {/* Responsive CTA Buttons & Subline */}
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce focus-visible:animate-pulse active:scale-95 hover:ring-4 hover:ring-yellow-200"
                  >
                    Join For Free
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full transition-all duration-300 font-bold hover:animate-bounce"
                  >
                    <svg className="inline-block mr-2 h-5 w-5 fill-blue-600" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    See How It Works
                  </Button>
                </div>
                <div
                  className="text-xs text-gray-500 mt-2"
                >
                  Takes less than 2 mins. No credit card needed.
                </div>
              </div>
              {/* Right: Decorative Illustration */}
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

        {/* What Makes Us Different Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-3 font-['Fredoka','Quicksand','Nunito',sans-serif]">
                What Makes Us <span className="text-[#FFBE0B] animate-pulse">Different?</span>
              </h2>
            </div>
            <div className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
              rounded-3xl shadow-none max-w-5xl mx-auto
            ">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#e3f6fd] hover:shadow-lg transition-all">
                <span className="bg-[#e0f7fa] rounded-full p-4 mb-4 text-3xl">🚀</span>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">Tech for Tomorrow</h3>
                <p className="text-gray-600 text-base font-['Nunito',sans-serif]">Equip kids with future-proof AI and coding skills.</p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#ffeedd] hover:shadow-lg transition-all">
                <span className="bg-[#fff7c0] rounded-full p-4 mb-4 text-3xl">🧠</span>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">Think Like an Innovator</h3>
                <p className="text-gray-600 text-base font-['Nunito',sans-serif]">Encourage creativity, logic, and problem-solving.</p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#ffe0f7] hover:shadow-lg transition-all">
                <span className="bg-[#ffd1f6] rounded-full p-4 mb-4 text-3xl">🎮</span>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">Gamified Learning</h3>
                <p className="text-gray-600 text-base font-['Nunito',sans-serif]">Kids unlock badges, avatars &amp; rewards as they learn.</p>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#dbecfb] hover:shadow-lg transition-all">
                <span className="bg-[#d2ebfb] rounded-full p-4 mb-4 text-3xl">👩‍🏫</span>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">Mentors, Not Just Teachers</h3>
                <p className="text-gray-600 text-base font-['Nunito',sans-serif]">Our instructors mentor kids through personalized feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why AI for Kids Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-blue-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex-shrink-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=700&q=80"
                alt="Kid learning AI with a laptop"
                className="rounded-3xl shadow-lg w-full max-w-md object-cover"
                loading="lazy"
                style={{ minHeight: 240 }}
              />
            </div>
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 font-['Fredoka',_Quicksand,_Baloo_2,_Nunito,_sans-serif]">
                Why AI for Kids?
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-['Nunito','Inter',sans-serif]">
                Artificial Intelligence isn't just the future—it's the present. By introducing children to AI concepts early, we're not just teaching them to use technology; we're empowering them to shape it.
              </p>
              {/* Key points */}
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-200 text-blue-700 rounded-full p-2 mt-1">
                    <svg width="20" height="20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#3A86FF" /><path d="M7.5 10.8l2 2 3-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-800">
                    AI is becoming part of everyday life – from voice assistants to recommendation systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-yellow-200 text-yellow-800 rounded-full p-2 mt-1">
                    <svg width="20" height="20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FFBE0B" /><path d="M7.5 10.8l2 2 3-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-800">
                    Early exposure helps children understand and shape the technology they'll live with.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-pink-200 text-pink-800 rounded-full p-2 mt-1">
                    <svg width="20" height="20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FF006E" /><path d="M7.5 10.8l2 2 3-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-800">
                    AI education develops computational thinking and logical reasoning skills.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-200 text-green-800 rounded-full p-2 mt-1">
                    <svg width="20" height="20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#4ADE80" /><path d="M7.5 10.8l2 2 3-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-800">
                    Children who learn AI early will have significant advantages in future careers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple-200 text-purple-800 rounded-full p-2 mt-1">
                    <svg width="20" height="20" fill="none" className="inline" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#CDB4DB" /><path d="M7.5 10.8l2 2 3-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-base text-gray-800">
                    AI projects encourage creativity while teaching practical programming skills.
                  </span>
                </li>
              </ul>
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
    </div>
  );
};

export default Index;
