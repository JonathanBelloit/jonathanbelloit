import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const stylesByVariant = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

const stylesBySize = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const classes = [
      "inline-flex items-center justify-center rounded-md transition-colors",
      stylesByVariant[variant],
      stylesBySize[size],
      className,
    ].join(" ");

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
