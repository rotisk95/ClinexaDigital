import { Button } from "@/components/ui/button";
import ClexiaLogo from "./ClexiaLogo";

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="mb-6">
              <ClexiaLogo size="lg" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Digital Solutions for Modern Healthcare
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Custom websites designed specifically for medical practices that are secure, compliant, and built to enhance patient trust and practice efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <a href="#contact">Schedule a Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#portfolio">See Our Work</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/doctor_patient1.jpg" 
                alt="Doctor consulting with patient" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
