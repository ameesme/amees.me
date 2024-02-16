import classNames from "classnames";
import { FC } from "react";

export type Props = {
  extended?: boolean;
  className?: string;
};

export const Fade: FC<Props> = ({ className, extended, ...rest }) => {
  return (
    <div
      className={classNames(
        "w-inherit h-[100px] bg-gradient-to-b from-background pointer-events-none",
        extended && "h-[180px] from-40%",
        !extended && "hidden lg:block",

        className
      )}
      {...rest}
    ></div>
  );
};

export default Fade;
