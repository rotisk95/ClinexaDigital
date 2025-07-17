import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  initials: string;
  bgColor: string;
}

const testimonialsList: Testimonial[] = [
  {
    content: "Clinexa Digital transformed our outdated website into a professional platform that our patients love. The online scheduling feature has reduced our front desk calls by 30% and improved our patient satisfaction ratings.",
    author: "Dr. Rebecca Johnson",
    role: "Family Physician, Metro Family Care",
    initials: "RJ",
    bgColor: "bg-primary"
  },
  {
    content: "The patient intake forms have streamlined our workflow immensely. Our staff spends less time on paperwork and more time on patient care. The HIPAA compliance features give us peace of mind knowing patient data is secure.",
    author: "Dr. Thomas Chen",
    role: "Pediatrician, Sunshine Children's Clinic",
    initials: "TC",
    bgColor: "bg-secondary"
  },
  {
    content: "Working with Clinexa Digital was effortless. They understood our small practice needs and delivered a website that has significantly improved our new patient acquisition. Their knowledge of healthcare regulations and ongoing support is exceptional.",
    author: "Dr. Maria Martinez",
    role: "Dentist, Lakeside Dental Care",
    initials: "MM",
    bgColor: "bg-accent"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-primary opacity-5"></div>
      <div className="container relative">
        <SectionHeading 
          title="What Healthcare Providers Say"
          subtitle="Read what doctors and medical professionals say about how Clinexa has transformed their online presence and practice efficiency."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md">
              <div className="text-primary mb-4">
                <Quote className="h-8 w-8 opacity-20" />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <div className={`w-full h-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold`}>
                    <span>{testimonial.initials}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
