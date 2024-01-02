import classNames from "classnames";
import { FC } from "react";

export type Props = {
  className?: string;
};

export const Dash: FC<Props> = ({ className, ...rest }) => {
  return (
    <div
      className={classNames("w-[20px] h-[1px] bg-text0", className)}
      {...rest}
    ></div>
  );
};

export default Dash;
