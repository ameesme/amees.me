import classNames from "classnames";
import { FC, ReactNode } from "react";
import Fade from "../atoms/Fade";
import { LuChevronRight } from "react-icons/lu";
import Button from "../atoms/Button";
import Availability from "../molecules/Availability";

export type Props = {
  children: ReactNode;
  isInactive?: boolean;
  showFooter?: boolean;
  className?: string;
};

export const Container: FC<Props> = ({
  children,
  isInactive,
  showFooter = true,
  className,
  ...rest
}) => {
  return (
    <div className="relative w-full">
      <div
        className={classNames(
          "relative h-min-screen w-[840px] max-w-full top-0 left-0 space-y-[220px] bg-background shadow-deep overflow-y-auto py-20 px-10 lg:py-40 lg:pl-32 lg:pr-20 transition-all duration-500",
          isInactive && "transform translate-x-[-100%] left-[50px]",
          className
        )}
        {...rest}
      >
        {children}
      </div>
      {showFooter && (
        <div
          className={classNames(
            "w-[840px] max-w-full h-screen fixed top-0 left-0 pointer-events-none transition-all duration-500",
            isInactive && "transform translate-x-[-100%] left-[50px]"
          )}
        >
          <Fade className="w-[840px] max-w-full absolute top-0 left-0" />
          <Fade
            extended
            className="w-[840px] max-w-full absolute bottom-0 left-0 rotate-180"
          />
          <div
            className={classNames(
              "w-[840px] max-w-full h-screen absolute top-0 left-0 z-20 opacity-0 bg-background-darkTranslucent transition-all duration-500",
              isInactive && "opacity-100 pointer-events-auto cursor-pointer"
            )}
            onClick={() => {
              history.back();
            }}
          />
          <div className="flex flex-col lg:flex-row items-end w-[840px] max-w-full min-h-[42px] absolute pointer-events-auto z-10 justify-end space-y-[10px] lg:space-y-0 lg:space-x-[10px] bottom-[32px] left-0 px-10 lg:pl-32 lg:pr-20">
            <Availability availability="limited" className="hidden md:flex" />
            <Button variant="primary" icon={<LuChevronRight />}>
              Schedule a call
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
