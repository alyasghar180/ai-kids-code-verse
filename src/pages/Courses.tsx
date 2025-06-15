
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, Users, Star, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "AI Computer Interaction",
      category: "AI Fundamentals",
      description: "Learn how to communicate with AI systems through fun, interactive projects. Students will explore voice assistants, chatbots, and smart interfaces.",
      age: "8+",
      duration: "6 weeks",
      lessons: 12,
      students: 156,
      rating: 4.9,
      price: "$149",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      outcomes: ["Build voice-controlled games", "Create simple chatbots", "Understand AI responses"],
      prerequisites: "None - Perfect for beginners",
      tools: ["Scratch for AI", "Voice recognition tools", "Simple chat interfaces"]
    },
    {
      id: 2,
      title: "AI for Young Learners",
      category: "AI Fundamentals",
      description: "Discover the basics of artificial intelligence through games, storytelling, and hands-on activities designed specifically for young minds.",
      age: "8+",
      duration: "4 weeks",
      lessons: 8,
      students: 203,
      rating: 4.8,
      price: "$99",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      outcomes: ["Understand what AI is", "Create AI-powered stories", "Build simple AI games"],
      prerequisites: "None - Beginner friendly",
      tools: ["AI story generators", "Educational games", "Interactive simulations"]
    },
    {
      id: 3,
      title: "Coding with AI: Step-by-Step",
      category: "Programming",
      description: "Build amazing projects with guided tutorials and AI assistance. Perfect introduction to programming with intelligent help along the way.",
      age: "8+",
      duration: "8 weeks",
      lessons: 16,
      students: 189,
      rating: 4.9,
      price: "$199",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      outcomes: ["Write first programs with AI help", "Create interactive animations", "Build simple web pages"],
      prerequisites: "Basic computer skills",
      tools: ["Scratch", "AI coding assistants", "Visual programming tools"]
    },
    {
      id: 4,
      title: "Real World AI Applications",
      category: "Advanced Projects",
      description: "Create practical applications that solve real problems using AI. Students work on projects that have real-world impact and relevance.",
      age: "8+",
      duration: "10 weeks",
      lessons: 20,
      students: 124,
      rating: 4.7,
      price: "$249",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      outcomes: ["Build weather prediction apps", "Create smart home simulations", "Develop AI art generators"],
      prerequisites: "Completion of Step-by-Step course or equivalent",
      tools: ["Python basics", "AI APIs", "Real-world datasets"]
    },
    {
      id: 5,
      title: "Building AI Agents",
      category: "Advanced Projects",
      description: "Design and develop your own AI agents with advanced programming concepts. The most comprehensive course for future AI developers.",
      age: "8+",
      duration: "12 weeks",
      lessons: 24,
      students: 87,
      rating: 4.8,
      price: "$299",
      color: "bg-gradient-to-br from-pink-400 to-red-500",
      outcomes: ["Create intelligent game characters", "Build personal assistant bots", "Develop learning algorithms"],
      prerequisites: "Real World Applications course or strong programming background",
      tools: ["Advanced programming", "Machine learning basics", "AI frameworks"]
    },
    {
      id: 6,
      title: "AI Art & Creativity",
      category: "Creative AI",
      description: "Explore the intersection of artificial intelligence and creativity. Learn to create stunning digital art, music, and stories using AI tools.",
      age: "8+",
      duration: "6 weeks",
      lessons: 12,
      students: 145,
      rating: 4.9,
      price: "$159",
      color: "bg-gradient-to-br from-indigo-400 to-purple-600",
      outcomes: ["Generate AI artwork", "Compose AI-assisted music", "Write collaborative stories with AI"],
      prerequisites: "None - Creativity focused",
      tools: ["AI art generators", "Music AI tools", "Creative writing assistants"]
    }
  ];

  const categories = ["all", "AI Fundamentals", "Programming", "Advanced Projects", "Creative AI"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-yellow-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 text-lg px-6 py-3">
            Our Courses
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Discover Your AI Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            From complete beginners to advanced programmers, we have the perfect course 
            to ignite your child's passion for AI and coding. All courses are designed 
            for ages 8+ with hands-on, project-based learning.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2 flex-1 max-w-md">
              <Search className="h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gray-300 rounded-full"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48 rounded-full">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-600">
              {filteredCourses.length} courses found
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                <div className={`h-48 ${course.color} flex items-center justify-center relative`}>
                  <div className="text-white text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-2" />
                    <Badge className="bg-white/20 text-white">
                      {course.lessons} Lessons
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800 font-semibold">
                      {course.price}
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
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">{course.category}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{course.description}</p>
                  
                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Learning Outcomes Preview */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">You'll learn to:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.outcomes.slice(0, 2).map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Course to Choose?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our education specialists help you find the perfect learning path for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Course Recommendations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
