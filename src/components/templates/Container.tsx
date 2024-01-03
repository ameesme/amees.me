import classNames from "classnames";
import { FC, ReactNode } from "react";
import Fade from "../atoms/Fade";

export type Props = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <>
      <div
        className={classNames(
          "relative min-h-screen w-[840px] max-w-full space-y-[220px] bg-background shadow-deep py-20 px-10 lg:py-40 lg:pl-32 lg:pr-20",
          className
        )}
        {...rest}
      >
        {children}
      </div>
      <Fade className="w-[840px] max-w-full fixed top-0 left-0" />
      <Fade className="w-[840px] max-w-full fixed bottom-0 left-0 rotate-180" />
    </>
  );
};

export default Container;
