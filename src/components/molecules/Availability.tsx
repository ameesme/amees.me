import classNames from "classnames";
import { FC } from "react";
import Badge from "../atoms/Badge";
import { Paragraph } from "../Typography";

export type Props = {
  availability: "full" | "limited" | "none";
  customText?: string;
  className?: string;
};

export const Dot: FC<{ availability: Props["availability"] }> = ({
  availability,
}) => {
  const baseClass = "min-w-[12px] min-h-[12px] flex-0 rounded-full shadow-ring";

  if (availability === "full") {
    return <div className={classNames(baseClass, "bg-green shadow-green")} />;
  }
  if (availability === "limited") {
    return <div className={classNames(baseClass, "bg-orange shadow-orange")} />;
  }
  if (availability === "none") {
    return <div className={classNames(baseClass, "bg-red shadow-red")} />;
  }

  return null;
};

export const Availability: FC<Props> = ({
  availability,
  customText,
  className,
  ...rest
}) => {
  const availabilityTextMap = {
    full: "Available for new assignments",
    limited: "Some availability for new assignments",
    none: "Fully booked",
  };

  return (
    <Badge
      {...rest}
      className={classNames("flex flex-row space-x-[10px]", className)}
    >
      <Dot availability={availability} />
      <Paragraph variant="button">
        {customText || availabilityTextMap[availability]}
      </Paragraph>
    </Badge>
  );
};

export default Availability;
