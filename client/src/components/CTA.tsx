import { Button } from "@/components/ui/button";

export default function CTA() {
  // Add targeted region for SEO
  const serviceRegion = "Fort Worth and Benbrook, TX";

  return (
    <section className="py-16 bg-primary relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-white opacity-20"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Medical Practice Online?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Schedule a free consultation to discuss how we can create a custom
            digital solution for your clinic that's secure, compliant, and
            designed for patient trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary"
            >
              <a href="/#contact">Get a Quote for Your Clinic</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white text-primary hover:bg-gray-100"
            >
              <a href="/#portfolio">See a Live Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
