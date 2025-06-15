
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/data/courses";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const enrollmentFormSchema = z.object({
  studentFirstName: z.string().min(1, "Student's first name is required"),
  studentLastName: z.string().min(1, "Student's last name is required"),
  parentFirstName: z.string().min(1, "Parent's first name is required"),
  parentLastName: z.string().min(1, "Parent's last name is required"),
  childAge: z.coerce.number().min(8, "Child must be at least 8 years old.").max(18, "Please contact us for students over 18."),
  phone: z.string().min(10, "A valid phone number is required"),
  email: z.string().email("A valid email is required"),
  address: z.string().min(1, "Address is required"),
  courseId: z.string({ required_error: "Please select a course." }),
});

type EnrollmentFormValues = z.infer<typeof enrollmentFormSchema>;

const Enrollment = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('courseId');

  const form = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentFormSchema),
    defaultValues: {
      studentFirstName: "",
      studentLastName: "",
      parentFirstName: "",
      parentLastName: "",
      phone: "",
      email: "",
      address: "",
      courseId: courseId || undefined,
    },
  });

  function onSubmit(data: EnrollmentFormValues) {
    console.log(data);
    toast.success("Enrollment Submitted!", {
      description: "We've received your details and will be in touch shortly to finalize payment.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <img src="/lovable-uploads/0fff5ec7-0958-4740-99f1-9e8a9684983d.png" alt="Next-Gen AI School Logo" className="w-40 h-40 mx-auto lg:mx-0 mb-6 transition-transform duration-300 hover:scale-110" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Unlock Your Child's Future</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Join the next generation of creators, thinkers, and innovators. Our hands-on courses are designed to spark curiosity and build real-world skills in AI, coding, and robotics.</p>
            <div className="mt-8 p-6 bg-blue-100/50 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-blue-800">Have questions?</p>
                <p className="text-blue-700">Feel free to <Link to="/contact" className="underline font-bold hover:text-blue-600">contact us</Link>! We're happy to help you choose the perfect course.</p>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg animate-in fade-in slide-in-from-right-8 duration-1000">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Enrollment Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="studentFirstName" render={({ field }) => (
                        <FormItem><FormLabel>Student's First Name</FormLabel><FormControl><Input placeholder="Alex" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="studentLastName" render={({ field }) => (
                        <FormItem><FormLabel>Student's Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>
                 <div className="grid md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="parentFirstName" render={({ field }) => (
                        <FormItem><FormLabel>Parent's First Name</FormLabel><FormControl><Input placeholder="Jane" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="parentLastName" render={({ field }) => (
                        <FormItem><FormLabel>Parent's Last Name</FormLabel><FormControl><Input placeholder="Doe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                     <FormField control={form.control} name="childAge" render={({ field }) => (
                        <FormItem><FormLabel>Child's Age</FormLabel><FormControl><Input type="number" placeholder="8" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                     <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="(123) 456-7890" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input placeholder="jane.doe@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem><FormLabel>Address</FormLabel><FormControl><Input placeholder="123 Innovation Dr, Techville" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField
                  control={form.control}
                  name="courseId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select a Course</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a course to begin the journey" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courses.map(course => (
                            <SelectItem key={course.id} value={String(course.id)}>{course.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-bold transition-transform duration-200 hover:scale-105">
                  Submit & Proceed to Payment <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enrollment;
