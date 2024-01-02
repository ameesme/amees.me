import classNames from "classnames";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

type HeadingVariants = "massive" | "title" | "subtitle" | "h1" | "h2";
export const Heading: FC<
  Props & { variant?: HeadingVariants; as?: "h1" | "h2" }
> = ({ className, variant, ...rest }) => {
  let size = "text-5xl";
  let marginBottom = "mb-[30px]";
  let weight = "font-bold";
  let as = "h1";

  switch (variant) {
    case "massive":
      size = "text-massive";
      weight = "font-light";
      break;
    case "title":
      size = "text-title";
      weight = "font-bold";
      break;
    case "subtitle":
      size = "text-subtitle";
      weight = "font-regular";
      break;
    case "h1":
      size = "text-h1";
      weight = "font-bold";
      break;
    case "h2":
      size = "text-h2";
      weight = "font-bold";
      as = "h2";
      break;
  }

  if (as === "h2")
    return (
      <h2
        className={classNames(`${size} ${marginBottom} ${weight}`, className)}
        {...rest}
      />
    );

  return (
    <h1
      className={classNames(`${size} ${marginBottom} ${weight}`, className)}
      {...rest}
    />
  );
};

type ParagraphVariants =
  | "body"
  | "button"
  | "list"
  | "small"
  | "tiny"
  | "caption";
export const Paragraph: FC<Props & { variant?: ParagraphVariants }> = ({
  className,
  variant,
  ...rest
}) => {
  let size = "text-body";
  let marginBottom = "mb-1";
  let transform = "text-normalcase";

  switch (variant) {
    case "body":
      size = "text-body";
      break;
    case "button":
      size = "text-button";
      marginBottom = "mb-0";
      break;
    case "list":
      size = "text-list";
      marginBottom = "mb-[10px]";
      break;
    case "small":
      size = "text-small";
      break;
    case "tiny":
      size = "text-tiny";
      break;
    case "caption":
      size = "text-caption";
      transform = "text-uppercase";
      break;
  }

  return (
    <p
      className={classNames(
        `${size} ${marginBottom} ${transform} mt-0 font-regular`,
        className
      )}
      {...rest}
    />
  );
};

export const Blockquote: FC<Props> = ({ className, ...rest }) => {
  return (
    <blockquote
      className={classNames(
        `text-blockquote mt-0 mb-[30px] font-regular border-l-[1px] border-text0 pl-[20px]`,
        className
      )}
      {...rest}
    />
  );
};
