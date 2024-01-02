import classNames from "classnames";
import { FC, ReactNode } from "react";

export type Props = {
  children: ReactNode;
  className?: string;
};

export const Section: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className={classNames("flex-col ", className)} {...rest}>
      {children}
    </div>
  );
};

export default Section;
