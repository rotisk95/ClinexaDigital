export default function TrustedBy() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="container">
        <p className="text-center text-gray-500 font-medium mb-6">
          Trusted by medical practices across the country
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="text-primary font-heading font-semibold">Family Care Center</div>
          <div className="text-primary font-heading font-semibold">Metro Health Clinic</div>
          <div className="text-primary font-heading font-semibold">Lakeside Family Practice</div>
          <div className="text-primary font-heading font-semibold">Valley Medical Group</div>
        </div>
      </div>
    </section>
  );
}
