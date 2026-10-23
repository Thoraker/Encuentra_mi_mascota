"use client";

import { cn } from "@/utils/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styleClasses = {
  outline: "btn-outline",
  dash: "btn-dash",
  soft: "btn-soft",
  ghost: "btn-ghost",
  link: "btn-link",
  disabled: "btn-disabled",
} as const;

const colorClasses = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
} as const;

const sizeClasses = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
  xl: "btn-xl",
} as const;

const modifierClasses = {
  wide: "btn-wide",
  block: "btn-block",
  square: "btn-square",
  circle: "btn-circle",
} as const;

type ButtonProps = {
  children: ReactNode;
  style?: keyof typeof styleClasses;
  color?: keyof typeof colorClasses;
  size?: keyof typeof sizeClasses;
  modifier?: keyof typeof modifierClasses;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "color">;

export default function Button({
  children,
  style,
  color = "primary",
  size,
  modifier,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "btn",
        colorClasses[color],
        style && styleClasses[style],
        size && sizeClasses[size],
        modifier && modifierClasses[modifier],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
