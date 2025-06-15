
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "5 Fun AI Projects for Kids to Try This Summer",
      category: "AI for Kids",
      date: "June 10, 2025",
      author: "Jane Doe",
      excerpt: "Spark your child's curiosity with these engaging and educational AI projects they can build right from home.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Is Your Child Ready for a Coding Class? Signs to Look For",
      category: "Digital Parenting",
      date: "June 5, 2025",
      author: "John Smith",
      excerpt: "Coding is a valuable skill, but when is the right time to start? Here are key indicators that your child is ready to learn.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "AI in the Classroom: The Future of Education",
      category: "AI Trends",
      date: "May 28, 2025",
      author: "Emily White",
      excerpt: "Artificial intelligence is set to revolutionize learning. Discover how AI is shaping the future of education.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Demystifying Machine Learning for Parents",
      category: "Digital Parenting",
      date: "May 20, 2025",
      author: "Alex Green",
      excerpt: "Machine learning sounds complex, but the basic concepts are easy to grasp. We break it down for you.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Blog</h1>
          <p className="text-xl text-gray-600">Tips, trends, and stories from the world of AI education.</p>
        </div>
      </section>

      <section className="py-8 px-4 sticky top-[68px] bg-gray-50/95 backdrop-blur-sm z-40">
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full"
            />
          </div>
        </div>
      </section>

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <Badge className="mb-2">{post.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    By {post.author} on {post.date}
                  </div>
                  <Button variant="link" className="p-0 text-blue-600">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
