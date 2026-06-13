import React, { createElement } from "react";
import { useInView } from "@/hooks/useInView";

type RevealVariant = "up" | "left" | "right" | "scale" | "fade" | "flip";

function revealClass(variant: RevealVariant) {
  return `anim-${variant}`;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: `${revealClass(variant)} ${inView ? "anim-visible" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = React.Children.count(children);

  return (
    <div
      ref={ref}
      className={`stagger-children ${inView ? "stagger-visible" : ""} ${className}`}
      style={{ "--stagger-count": count } as React.CSSProperties}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { inView, index, count } as never)
          : child,
      )}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
  inView,
  index = 0,
  count = 1,
  variant = "up",
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  index?: number;
  count?: number;
  variant?: RevealVariant;
}) {
  return (
    <div
      className={`${revealClass(variant)} ${inView ? "anim-visible" : ""} ${className}`}
      style={
        {
          "--i": index,
          "--stagger-count": count,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
