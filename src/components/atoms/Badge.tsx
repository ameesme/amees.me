import classNames from "classnames";
import { FC } from "react";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Badge: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classNames(
        "min-h-[42px] h-[42px] px-4 py-2 flex items-center rounded-full border-grey-245 border-[1px] bg-background",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Badge;
