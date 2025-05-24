import { User, Lock, Cog, Headphones } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features = [
  {
    icon: <User className="h-5 w-5" />,
    title: "Healthcare Industry Focus",
    description: "We exclusively serve medical practices and understand the unique challenges and regulations in healthcare."
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "HIPAA Compliance Expertise",
    description: "Our solutions are built with privacy and security at the core, ensuring you maintain compliance with healthcare regulations."
  },
  {
    icon: <Cog className="h-5 w-5" />,
    title: "Seamless EMR Integration",
    description: "Our platforms connect with major electronic medical record systems, creating a unified workflow for your practice."
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Dedicated Support Team",
    description: "Our healthcare-specialized support team is available to assist with any questions or technical issues."
  }
];

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
          <div className="text-primary">{icon}</div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/assets/medical_team.jpg" 
                  alt="Diverse team of healthcare professionals" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md mt-6 bg-primary bg-opacity-10 flex items-center justify-center p-6">
                <img 
                  src="/src/assets/medical-icon1.svg" 
                  alt="Medical cross symbol" 
                  className="w-20 h-20"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/src/assets/doctor_patient2.jpg" 
                  alt="Doctor with clipboard helping patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md mt-6 bg-accent bg-opacity-10 flex items-center justify-center p-6">
                <img 
                  src="/src/assets/medical-icon2.svg" 
                  alt="Medical aid kit icon" 
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Medical Practices Choose Clinexa
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Feature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#portfolio" 
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
              >
                View our healthcare portfolio
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
