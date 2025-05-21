import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.hash;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for header
            behavior: 'smooth'
          });
          
          // Update URL without scroll
          window.history.pushState(null, '', targetId);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
