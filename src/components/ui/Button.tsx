"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  rounded?: "full" | "xl" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "font-medium flex items-center justify-center transition-all duration-200 active:scale-95";

  const variants = {
    primary: "bg-orange-primary text-white hover:bg-orange-active shadow-md hover:shadow-lg",
    secondary: "bg-white text-orange-primary border border-orange-primary hover:bg-orange-50",
    outline: "bg-transparent text-soft-brown border border-soft-brown hover:bg-gray-100",
    ghost: "bg-transparent text-soft-brown hover:bg-gray-100 hover:text-orange-primary",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const rounds = {
    full: "rounded-full",
    xl: "rounded-xl",
    lg: "rounded-lg",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${rounds[rounded]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
