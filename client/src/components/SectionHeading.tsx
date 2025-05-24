interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center",
  className = ""
}: SectionHeadingProps) {
  // Add structured data attributes for better SEO
  const headingId = title.toLowerCase().replace(/\s+/g, '-');
  const alignmentClasses = alignment === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`mb-16 ${alignmentClasses} ${className}`}>
      <h2 
        id={headingId}
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
        data-section-title
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          aria-describedby={headingId}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
