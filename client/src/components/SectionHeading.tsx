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
  const alignmentClasses = alignment === "center" ? "text-center" : "text-left";
  
  return (
    <div className={`mb-16 ${alignmentClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
