import classNames from "classnames";
import { FC } from "react";

export type Props = {
  className?: string;
};

export const Fade: FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={classNames(
        "w-inherit lg:h-[165px] bg-gradient-to-b from-background-translucent pointer-events-none",
        className
      )}
      {...rest}
    ></div>
  );
};

export default Fade;
