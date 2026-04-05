import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// tell HTML that our component is a button
interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // variant for styling
  asChild?: boolean;
}

const buttonVariants = cva(
  `inline-flex items-center justify-center font-medium text-sm rounded-md`,

  {
    variants: {
      variant: {
        primary: "bg-[#2D5494] hover:bg-[#254579] text-white",
        secondary: "",
        destructive: "",
        ok: "",
        link: "",
        outline : 'bg-transparent hover:bg-gray-100 text-black border border-black'
      },
      size: {
        default: "px-8 py-2",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
      },
      defaultVariants: {
        variant: "primary",
        size: "default",
      },
    },
  },
);

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

CustomButton.displayName = "Button";

export { CustomButton, buttonVariants };
