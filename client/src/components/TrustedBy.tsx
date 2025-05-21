export default function TrustedBy() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="container">
        <p className="text-center text-gray-500 font-medium mb-6">
          Trusted by medical practices across the country
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <div className="text-gray-400 font-heading font-semibold">Family Care</div>
          <div className="text-gray-400 font-heading font-semibold">Metro Health</div>
          <div className="text-gray-400 font-heading font-semibold">Lakeside Clinic</div>
          <div className="text-gray-400 font-heading font-semibold">Valley Medical</div>
        </div>
      </div>
    </section>
  );
}
