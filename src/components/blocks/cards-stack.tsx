"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import styles from "./cards-stack.module.css"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", styles.containerScroll, className)}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          zIndex: z,
          ...style,
        }}
        className={cn("sticky", styles.cardSticky, className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }