import { 
  Laptop, 
  CalendarCheck, 
  FileText, 
  Search, 
  MessageSquare, 
  ShieldCheck,
  Check 
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const servicesList: Service[] = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Custom Medical Websites",
    description: "Professionally designed websites specifically for doctors, clinics, and medical practices that build patient trust.",
    features: [
      "HIPAA-compliant contact forms",
      "Optimized for mobile devices",
      "ADA-accessible design"
    ]
  },
  {
    icon: <CalendarCheck className="h-8 w-8" />,
    title: "Appointment Systems",
    description: "Streamline scheduling with integrated booking systems that connect directly to your practice management software.",
    features: [
      "24/7 online scheduling",
      "Automated reminders",
      "Seamless EMR integration"
    ]
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Digital Patient Forms",
    description: "Eliminate paperwork with secure online intake forms that patients can complete before their visit.",
    features: [
      "Secure data collection",
      "Digital signature capture",
      "Automated data transfer to EMR"
    ]
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "Local SEO for Medical Practices",
    description: "Attract more local patients by optimizing your online presence to appear in search results.",
    features: [
      "Google Business Profile management",
      "Local citation building",
      "Medical directories integration"
    ]
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Patient Communication Tools",
    description: "Enhance patient engagement with integrated messaging and notification systems.",
    features: [
      "HIPAA-compliant messaging",
      "Automated appointment reminders",
      "Secure file sharing"
    ]
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "HIPAA-Compliant Hosting",
    description: "Keep your patients' information secure with our specialized hosting solutions for healthcare providers.",
    features: [
      "End-to-end encryption",
      "Regular security audits",
      "BAA agreement included"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading 
          title="Specialized Digital Solutions for Modern Healthcare"
          subtitle="We understand the unique challenges medical practices face online. Our custom websites and digital tools are designed specifically for family doctors and small medical practices, ensuring HIPAA compliance and building patient trust."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-4 flex items-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-700 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-4 w-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary-dark text-white">
            <a href="#contact">Discuss Your Practice Needs</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
