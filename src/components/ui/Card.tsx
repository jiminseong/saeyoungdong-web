import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "flat";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const baseStyle = "p-6 rounded-3xl transition-all duration-300";

  const variants = {
    default:
      "bg-surface shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
    outlined: "bg-white border border-gray-100",
    flat: "bg-gray-50",
  };

  return <div className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</div>;
}
