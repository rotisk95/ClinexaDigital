import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FamilyCareCaseStudy() {
  const caseStudyData = {
    title: "Complete Website Redesign with Patient Portal",
    client: "Family Care Associates",
    image: "/images/family-care.png",
    challenge: "Family Care Associates, a growing primary care practice with multiple locations, approached Clinexa Medical with several challenges. Their existing website was outdated, difficult to navigate, and didn't reflect their commitment to modern healthcare. Most importantly, they needed a secure patient portal that would integrate with their existing Electronic Medical Record (EMR) system, allowing patients to book appointments, access medical records, and communicate with providers securely.",
    solution: "We designed and developed a comprehensive digital solution that addressed all of Family Care Associates' needs. The new responsive website features a clean, intuitive interface that showcases their services, provider profiles, and locations. The secure patient portal was built with HIPAA compliance as a top priority, featuring end-to-end encryption and strict authentication protocols. We seamlessly integrated the portal with their existing EMR system, allowing for real-time synchronization of patient data and appointment schedules.",
    results: [
      "53% increase in online appointment bookings within the first three months",
      "Patient portal adoption rate of 78% among active patients",
      "Reduced administrative phone calls by 35%, allowing staff to focus on in-office patient care",
      "Improved patient satisfaction scores by 27%, particularly regarding communication and accessibility",
      "HIPAA-compliant infrastructure with zero security incidents since launch"
    ],
    technologies: [
      "React.js for frontend development",
      "Node.js and Express for backend services",
      "HIPAA-compliant cloud hosting",
      "Custom API integration with EMR system",
      "Secure authentication with multi-factor options",
      "Responsive design for all devices"
    ],
    additionalImages: [
      "/images/family-care-portal.jpg",
      "/images/family-care-mobile.jpg"
    ],
    testimonial: {
      quote: "Clinexa transformed our digital presence and streamlined our patient communication. The integration with our EMR system works flawlessly, and both our staff and patients love how easy the system is to use. Most importantly, we have complete confidence in the security and compliance of the solution.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director, Family Care Associates"
    }
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <CaseStudy {...caseStudyData} />
      </main>
      <Footer />
    </>
  );
}