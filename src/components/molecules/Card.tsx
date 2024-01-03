"use client";

import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { Heading, Massive, Paragraph } from "../Typography";

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
        "flex-1 bg-background shadow-light rounded-[22px] p-4 pb-5 flex-col min-w-[250px] overflow-hidden cursor-pointer hover:bg-text0 hover:text-background transition-colors duration-200",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      <Massive className={classNames("mb-[16px]", isHovered && "marquee")}>
        {title}
      </Massive>
      <div className="flex flex-row justify-between align-bottom">
        <Paragraph variant="button">{description}</Paragraph>
      </div>
    </div>
  );
};

export default Card;
