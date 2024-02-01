import classNames from "classnames";
import { FC, ReactNode } from "react";
import Fade from "../atoms/Fade";

export type Props = {
  isInactive?: boolean;
  children: ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({
  isInactive,
  children,
  className,
  ...rest
}) => {
  return (
    <>
      <div
        className={classNames(
          "relative h-min-screen w-[840px] max-w-full top-0 left-0 space-y-[220px] bg-background shadow-deep overflow-y-auto py-20 px-10 lg:py-40 lg:pl-32 lg:pr-20 transition-all duration-200",
          className
        )}
        {...rest}
      >
        {children}
      </div>
      <div className="w-[840px] max-w-full h-screen fixed top-0 left-0 pointer-events-none">
        <Fade className="w-[840px] max-w-full fixed top-0 left-0" />
        <Fade
          extended
          className="w-[840px] max-w-full fixed bottom-0 left-0 rotate-180"
        />
        <div
          className={classNames(
            "w-[840px] max-w-full h-screen fixed top-0 left-0 z-20 opacity-0 bg-background-darkTranslucent pointer-events-none transition-all duration-200",
            isInactive && "opacity-100 pointer-events-auto cursor-pointer"
          )}
          onClick={() => {
            history.back();
          }}
        />
      </div>
    </>
  );
};

export default Container;
