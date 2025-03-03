import React from "react";
import clsx from "clsx";

type BoundedProps<T extends React.ElementType = "section"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<T>;

const Bounded = <T extends React.ElementType = "section">({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  return (
    <Comp
      className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Comp>
  );
};


Bounded.displayName = "Bounded";

export default Bounded;
