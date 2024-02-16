import classNames from "classnames";
import { FC, ReactNode } from "react";

export type Props = {
  children: ReactNode;
  className?: string;
};

export const CardsContainer: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col justify-between gap-8 mt-8 md:flex-row",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardsContainer;
