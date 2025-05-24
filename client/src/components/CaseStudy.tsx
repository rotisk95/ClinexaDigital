import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

export interface CaseStudyProps {
  title: string;
  client: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  additionalImages?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export default function CaseStudy({
  title,
  client,
  image,
  challenge,
  solution,
  results,
  technologies,
  additionalImages = [],
  testimonial
}: CaseStudyProps) {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-8 text-primary hover:text-primary-dark"
        >
          <a href="/#portfolio" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </a>
        </Button>
        
        <SectionHeading 
          title={title}
          subtitle={`Client: ${client}`}
          alignment="left"
        />
        
        <div className="mt-10 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt={`${client} facility`}
              className="w-full object-cover h-[400px]"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Challenge</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{challenge}</p>
            
            <h2 className="text-2xl font-bold mb-4 text-primary">Solution</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{solution}</p>
            
            <h2 className="text-2xl font-bold mb-4 text-primary">Results</h2>
            <ul className="list-disc pl-6 mb-8">
              {results.map((result, index) => (
                <li key={index} className="text-gray-700 mb-2">{result}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Technologies Used</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ul className="space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
            
            {testimonial && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Client Feedback</h2>
                <div className="bg-primary bg-opacity-5 p-6 rounded-lg shadow-sm border-l-4 border-primary">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-primary font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {additionalImages.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-primary">Additional Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {additionalImages.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={img} 
                    alt={`${client} website screenshot ${index + 1}`}
                    className="w-full object-cover h-64"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="text-center mt-8">
          <Button asChild className="bg-primary hover:bg-primary-dark text-white">
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
}