import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LakesideDentalCaseStudy() {
  const caseStudyData = {
    title: "Complete Digital Presence with Virtual Consultations",
    client: "Lakeside Dental",
    image: "/images/lakeside-dental.png",
    challenge: "Lakeside Dental, a modern dental practice specializing in cosmetic and restorative dentistry, needed a complete digital transformation. Their previous online presence was limited to a basic contact page, lacking the sophistication that matched their premium services. They wanted to showcase their advanced techniques, educate patients about procedures, and implement virtual consultation capabilities to pre-screen patients and reduce unnecessary in-office visits. Additionally, they needed a solution that would integrate with their practice management software.",
    solution: "We developed a comprehensive digital strategy centered around a new website that effectively communicates Lakeside Dental's expertise and premium service offerings. The site features detailed procedure pages with 3D animations explaining common dental treatments, high-quality before/after galleries of actual patient results, and a secure virtual consultation platform. Patients can upload photos, describe their concerns, and receive preliminary recommendations before committing to in-office visits. We integrated the site with their practice management software to ensure seamless appointment scheduling and patient record management.",
    results: [
      "Virtual consultations now account for 30% of all new patient inquiries",
      "Conversion rate from virtual consultation to booked procedure increased by 65%",
      "Patient education time in-office reduced by 25% due to pre-visit materials",
      "Online booking of appointments increased by 78% year-over-year",
      "Website traffic increased by 120% with an average session duration of 4.2 minutes",
      "Featured in regional dental association publication as an example of digital innovation"
    ],
    technologies: [
      "React.js frontend with WebGL for 3D procedure animations",
      "HIPAA-compliant secure messaging and file upload system",
      "Custom integration with dental practice management software",
      "Video consultation capabilities with screen sharing",
      "Responsive design optimized for all devices",
      "Advanced analytics to track patient education engagement"
    ],
    additionalImages: [
      "/src/assets/lakeside-dental-consultation.svg",
      "/src/assets/lakeside-dental-education.svg"
    ],
    testimonial: {
      quote: "Our partnership with Clinexa has transformed how we interact with patients. The virtual consultation feature has been a game-changer, allowing us to provide preliminary guidance to patients and better prepare for their visits. The education resources have also significantly improved treatment acceptance rates as patients better understand their options before coming in.",
      author: "Dr. Amanda Rivera",
      role: "Owner, Lakeside Dental"
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