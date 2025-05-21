import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  practice: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  interest: z.string({ required_error: "Please select a service" }),
  message: z.string().optional(),
  privacyAgreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" })
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      practice: "",
      email: "",
      phone: "",
      message: "",
      privacyAgreed: false
    }
  });
  
  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);
      // In a real app, we would send this data to the backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message could not be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Get in Touch"
            subtitle="Have questions about our services or ready to discuss your practice's digital needs? Complete the form below and our healthcare solutions team will contact you promptly."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="bg-gray-50 rounded-lg p-8 shadow-md"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Dr. Jane Smith" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="practice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Practice Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Family Care Medical" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="jane@familycare.com" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(555) 123-4567" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I'm interested in</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="website">Custom Medical Website</SelectItem>
                              <SelectItem value="appointment">Appointment System</SelectItem>
                              <SelectItem value="forms">Digital Patient Forms</SelectItem>
                              <SelectItem value="seo">Local SEO for Medical Practices</SelectItem>
                              <SelectItem value="communication">Patient Communication Tools</SelectItem>
                              <SelectItem value="hosting">HIPAA-Compliant Hosting</SelectItem>
                              <SelectItem value="other">Other/Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your practice and what you're looking for..." 
                              className="resize-none" 
                              rows={4}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <FormField
                      control={form.control}
                      name="privacyAgreed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              I understand that my information will be processed in accordance with Clinexa's{" "}
                              <a href="#" className="text-primary hover:underline">
                                Privacy Policy
                              </a>
                              . We respect your privacy and will never share your information.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-dark text-white w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-8 shadow-md h-full">
                <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email Us</h4>
                      <a href="mailto:contact@clinexa.com" className="text-primary hover:underline">contact@clinexa.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Call Us</h4>
                      <a href="tel:+18005551234" className="text-primary hover:underline">(800) 555-1234</a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9am-5pm ET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Visit Us</h4>
                      <p className="text-gray-600">
                        123 Healthcare Avenue<br />
                        Suite 200<br />
                        Boston, MA 02110
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary-dark" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary-dark" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary-dark" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
