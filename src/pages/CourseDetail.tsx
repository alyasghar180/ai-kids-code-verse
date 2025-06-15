
import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, Clock, Users, Star, Cpu, Wrench, Calendar, ArrowRight } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === Number(courseId));

  if (!course) {
    return <NotFound />;
  }

  const details = [
    { icon: <BookOpen className="h-5 w-5" />, label: "Lessons", value: course.lessons },
    { icon: <Clock className="h-5 w-5" />, label: "Duration", value: course.duration },
    { icon: <Users className="h-5 w-5" />, label: "Skill Level", value: "Age " + course.age },
    { icon: <Star className="h-5 w-5" />, label: "Rating", value: `${course.rating} / 5.0` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className={`py-20 px-4 text-white ${course.color}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">{course.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl opacity-90 leading-relaxed">{course.description}</p>
            </div>
            <div className="flex justify-center">
                <div className="bg-white/20 p-8 rounded-2xl backdrop-blur-sm w-full max-w-md">
                    <h3 className="text-2xl font-bold mb-4">Course Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        {details.map(detail => (
                            <div key={detail.label} className="flex items-center space-x-3">
                                {detail.icon} <span>{detail.label}</span>
                            </div>
                        ))}
                    </div>
                     <p className="text-4xl font-bold my-6 text-center">{course.price}</p>
                    <Button asChild size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-full transition-transform duration-200 hover:scale-105">
                        <Link to={`/enroll?courseId=${course.id}`}>Enroll Now</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {course.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">Weekly Breakdown</h2>
            <div className="space-y-6 border-l-2 border-blue-200 ml-3">
                {course.timeline.map((item, i) => (
                    <div key={i} className="relative pl-8">
                        <div className="absolute -left-3.5 top-1 h-6 w-6 bg-blue-500 rounded-full border-4 border-white"></div>
                        <p className="font-semibold text-lg text-gray-800">{item}</p>
                    </div>
                ))}
            </div>
          </div>

          <aside className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2"><Wrench /><span>Tools You'll Use</span></CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  {course.tools.map((tool, i) => <li key={i}>{tool}</li>)}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2"><Cpu /><span>Prerequisites</span></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{course.prerequisites}</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
