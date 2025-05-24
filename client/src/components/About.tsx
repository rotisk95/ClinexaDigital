import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Clinexa Medical
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Clinexa Medical specializes in creating digital solutions exclusively for healthcare providers. Our team combines healthcare industry knowledge with technical expertise to deliver secure, compliant solutions that meet the unique needs of family doctors and small medical practices.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by healthcare and technology professionals, we understand the challenges medical practices face in the digital landscape. Our mission is to help healthcare providers leverage technology to improve patient trust and practice efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We pride ourselves on creating HIPAA-compliant, patient-friendly websites and digital tools that enhance the patient experience while streamlining your clinic operations. From appointment integration to digital forms, we build solutions designed for modern healthcare.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-primary bg-opacity-10 p-2 rounded-full mr-4">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="font-medium">100% focus on healthcare industry</p>
              </div>
              <div className="flex items-center">
                <div className="bg-accent bg-opacity-10 p-2 rounded-full mr-4">
                  <img src="/src/assets/medical-icon3.svg" alt="Medical cross icon" className="h-4 w-4" />
                </div>
                <p className="font-medium">HIPAA compliance expertise</p>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary bg-opacity-10 p-2 rounded-full mr-4">
                  <img src="/src/assets/healthcare-tech.svg" alt="Healthcare technology icon" className="h-4 w-4" />
                </div>
                <p className="font-medium">Practice management system integration</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/src/assets/medical_team.jpg" 
                alt="Healthcare professionals team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
