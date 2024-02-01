import classNames from "classnames";
import { FC } from "react";
import { Paragraph } from "../Typography";
import { GlowNode, useGlow } from "@/hooks/useGlow";

export type Props = {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export const Button: FC<Props> = ({ className, children, ...rest }) => {
  const [glowContainerRef, glowNodeRef] = useGlow(true, "small");

  const buttonVariantMap = {
    primary:
      "bg-primary border-primary hover:border-primary-dark shadow-primary-translucent text-white",
    secondary: "bg-background border-grey-245 hover:border-grey-125",
  };
  return (
    <button
      className={classNames(
        "h-[42px] px-4 flex flex-row items-center rounded-full border-[1px] shadow-light transition-all duration-200  active:shadow-none",
        buttonVariantMap[rest.variant || "secondary"],
        rest.icon && "pr-2",
        className
      )}
      ref={glowContainerRef}
      {...rest}
    >
      <Paragraph variant="button">{children}</Paragraph>
      {rest.icon && (
        <div className="flex w-[24px] h-[24px] items-center justify-center flex-0 ml-2">
          {rest.icon}
        </div>
      )}
      <GlowNode ref={glowNodeRef} size="small" className="duration-500" />
    </button>
  );
};

export default Button;
