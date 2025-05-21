import { Check } from "lucide-react";

interface ClexiaLogoProps {
  color?: "primary" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ClexiaLogo({ color = "primary", size = "md", className = "" }: ClexiaLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };
  
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };
  
  const smallTextSizes = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  };
  
  const textColor = color === "white" ? "text-white" : "text-primary";
  const smallTextColor = color === "white" ? "text-gray-300" : "text-gray-600";
  const fillColor = color === "white" ? "fill-white" : "fill-primary";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${textColor} ${iconSizes[size]} flex-shrink-0`}>
        {/* Medical Cross with Checkmark SVG styled to match the attachment */}
        <svg viewBox="0 0 40 40" className={`${fillColor} w-full h-full`}>
          <path d="M32.5,15h-7.5V7.5C25,3.375,21.625,0,17.5,0h-5C8.375,0,5,3.375,5,7.5v7.5H7.5C11.625,15,15,18.375,15,22.5v5
            c0,4.125,3.375,7.5,7.5,7.5h7.5V25H35c4.125,0,7.5-3.375,7.5-7.5v-5C42.5,8.375,39.125,5,35,5h-2.5V15z" />
          <circle cx="20" cy="20" r="7" fill="white" />
          <path d="M20,11c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S24.971,11,20,11z M24.485,17.515l-5.657,5.657
            c-0.195,0.195-0.451,0.293-0.707,0.293s-0.512-0.098-0.707-0.293l-2.828-2.829c-0.391-0.391-0.391-1.023,0-1.414
            c0.391-0.391,1.023-0.391,1.414,0l2.121,2.121l4.95-4.95c0.391-0.391,1.023-0.391,1.414,0
            C24.876,16.491,24.876,17.124,24.485,17.515z" fill={color === "white" ? "white" : "#0F3254"} />
        </svg>
      </div>
      <div>
        <span className={`${textColor} font-heading font-bold ${textSizes[size]}`}>Clinexa</span>
        <span className={`block ${smallTextSizes[size]} uppercase tracking-wider ${smallTextColor}`}>MEDICAL</span>
        <span className={`hidden lg:block ${smallTextSizes[size]} tracking-wide ${smallTextColor} mt-1`}>Digital Solutions for Modern Healthcare</span>
      </div>
    </div>
  );
}
