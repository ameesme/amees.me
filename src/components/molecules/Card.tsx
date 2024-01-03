"use client";

import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { Massive, Paragraph } from "../Typography";
import { LuPlus } from "react-icons/lu";

export type Props = {
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
};

export const Card: FC<Props> = ({
  title,
  description,
  onClick,
  className,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(
        "flex-1 bg-background shadow-light rounded-[22px] p-4 pb-5 flex-col min-w-[250px] lg:max-w-[300px] overflow-hidden cursor-pointer hover:bg-text0 hover:text-background hover:shadow-short transition-all duration-200",
        className
      )}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
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
    </div>
  );
};

export default Card;
