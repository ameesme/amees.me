"use client";

import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { Massive, Paragraph } from "../Typography";
import { LuPlus } from "react-icons/lu";
import { GlowNode, useGlow } from "@/hooks/useGlow";

export type Props = {
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
};

export const Card: FC<Props> = ({ title, description, className, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glowContainerRef, glowNodeRef] = useGlow();

  return (
    <div
      className={classNames(
        "flex-1 bg-background shadow-light rounded-[22px] p-4 pb-5 flex-col min-w-[250px] lg:max-w-[300px] overflow-hidden cursor-pointer transition-all duration-500 select-none relative",
        isHovered && "bg-text0 text-background shadow-short active:shadow-none",
        className
      )}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      ref={glowContainerRef}
      {...rest}
    >
      <div className="w-full">
        <Massive
          className={classNames(
            "mb-[16px] inline-block min-w-full",
            isHovered && "marquee"
          )}
        >
          {title}
        </Massive>
      </div>
      <div className="flex flex-row justify-between items-end">
        <Paragraph className="flex-1" variant="button">
          {description}
        </Paragraph>
        <LuPlus className="h-4 w-4" />
      </div>
      <GlowNode ref={glowNodeRef} className="duration-200" />
    </div>
  );
};

export default Card;
