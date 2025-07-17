import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SunshinePediatricsCaseStudy() {
  const caseStudyData = {
    title: "Child-Friendly Website with Parent Resources",
    client: "Sunshine Pediatrics",
    image: "/images/sunshine-pediatrics.png",
    challenge: "Sunshine Pediatrics, a growing pediatric practice with a focus on creating positive healthcare experiences for children, needed a complete digital overhaul. Their previous website was text-heavy, lacked engaging content for both parents and children, and offered no digital forms or resources. The practice wanted to create a digital experience that would reduce anxiety for young patients while providing comprehensive resources for parents, including educational materials and streamlined digital forms.",
    solution: "We designed a vibrant, engaging website with separate sections targeting both children and parents. For children, we created interactive elements including games in the waiting room area and age-appropriate explanations of common procedures. For parents, we developed comprehensive resources including developmental milestone guides, vaccination schedules, and an extensive FAQ section. The site includes a secure parent portal where families can complete and digitally sign forms prior to appointments, significantly reducing wait times and paperwork during visits.",
    results: [
      "92% positive feedback from parents regarding the new website and digital forms",
      "Digital form completion rate of 83% prior to appointments, reducing check-in time by an average of 15 minutes",
      "47% increase in new patient inquiries within first six months",
      "Reduction in appointment cancellations by 23%, attributed to better pre-visit preparation",
      "60% decrease in printed materials needed in office"
    ],
    technologies: [
      "React.js with child-friendly animations and interactive elements",
      "Secure form submission with e-signature capabilities",
      "HIPAA-compliant data storage and transmission",
      "Content management system for easy resource updates",
      "Automated email system for appointment reminders and form completion",
      "Mobile-responsive design optimized for parents on-the-go"
    ],
    additionalImages: [
      "/images/sunshine-pediatrics-kids.svg",
      "/images/sunshine-pediatrics-forms.svg"
    ],
    testimonial: {
      quote: "The website Clinexa Digital created for us perfectly captures our practice philosophy of making pediatric care a positive experience. Parents love being able to complete forms before visits, and children actually enjoy exploring the kids' section while waiting. It's made a tremendous difference in our practice efficiency and patient satisfaction.",
      author: "Dr. Michael Chen",
      role: "Founder, Sunshine Pediatrics"
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