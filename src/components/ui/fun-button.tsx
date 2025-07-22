import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const funButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-fun-blue text-fun-blue-foreground hover:bg-fun-blue/90 shadow-lg hover:shadow-xl",
        secondary: "bg-fun-pink text-fun-pink-foreground hover:bg-fun-pink/90 shadow-lg hover:shadow-xl",
        accent: "bg-fun-green text-fun-green-foreground hover:bg-fun-green/90 shadow-lg hover:shadow-xl",
        warning: "bg-fun-yellow text-fun-yellow-foreground hover:bg-fun-yellow/90 shadow-lg hover:shadow-xl",
        rainbow: "bg-gradient-fun text-white hover:opacity-90 shadow-lg hover:shadow-xl animate-float",
        bounce: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl animate-bounce-gentle",
        wiggle: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:animate-wiggle",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface FunButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof funButtonVariants> {
  asChild?: boolean
}

const FunButton = React.forwardRef<HTMLButtonElement, FunButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(funButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FunButton.displayName = "FunButton"

export { FunButton, funButtonVariants }