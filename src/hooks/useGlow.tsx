import classNames from "classnames";
import { FC, RefObject, useEffect, useRef, useState } from "react";

export type Props = {
  size?: "large" | "small";
  refs?: RefObject<HTMLDivElement>;
  className?: string;
};

import React, { forwardRef } from "react";

export const GlowNode = forwardRef<HTMLDivElement, Props>(
  ({ size, className, ...rest }, ref) => {
    return (
      <div
        className={classNames(
          "absolute top-0 left-0  flex-0 rounded-full transition-opacity pointer-events-none",
          size === "small"
            ? "h-[400px] w-[400px]"
            : "h-[800px] w-[800px] blur-2xl",
          className
        )}
        ref={ref}
        {...rest}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.3) 0%, rgba(0,0,0,0) 80%)",
        }}
      />
    );
  }
);
GlowNode.displayName = "GlowNode";

export function useGlow(fixed?: boolean, size?: "large" | "small") {
  const glowRef = useRef<HTMLDivElement>(null);
  const glowContainerRef = useRef<any>(null);
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState<number>(0);
  const [mouseIn, setMouseIn] = useState<boolean>(false);

  // Set up the interval.
  useEffect(() => {
    if (glowContainerRef.current) {
      // Bind mouse-events to the container
      glowContainerRef.current.addEventListener(
        "mousemove",
        (e: MouseEvent) => {
          // Get relative position in the container
          const x = e.pageX - glowContainerRef.current.offsetLeft;
          const y = fixed
            ? e.offsetY
            : e.pageY +
              (document.querySelector("main")?.scrollTop || 0) -
              glowContainerRef.current.offsetTop;
          // Set the position state
          setXPosition(x - (size === "small" ? 200 : 400));
          setYPosition(y - (size === "small" ? 200 : 400));
        }
      );

      // Disable on mouse out
      glowContainerRef.current.addEventListener("mouseout", () => {
        setMouseIn(false);
      });

      // Enable on mouse in
      glowContainerRef.current.addEventListener("mouseover", () => {
        setMouseIn(true);
      });

      glowContainerRef.current.style.position = "relative";
    }

    // Clean up
    return () => {
      if (glowContainerRef.current) {
        glowContainerRef.current.removeEventListener("mousemove", () => {});
        glowContainerRef.current.removeEventListener("mouseout", () => {});
      }
    };
  }, [glowContainerRef, fixed, size]);

  useEffect(() => {
    if (glowRef.current) {
      // Set the glow position
      glowRef.current.style.transform = `translate(${xPosition}px, ${yPosition}px)`;

      if (mouseIn) {
        glowRef.current.style.opacity = "1";
      } else {
        glowRef.current.style.opacity = "0";
      }
    }
  }, [glowRef, xPosition, yPosition, mouseIn]);

  return [glowContainerRef, glowRef];
}

export default useGlow;
