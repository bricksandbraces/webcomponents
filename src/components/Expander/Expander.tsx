import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import cx from "classnames";
import React from "react";

export type ExpanderProps = {
  /**
   * Expander Children
   */
  children: React.ReactNode;
};

const Expander = (
  { children, ...rest }: ExpanderProps,
  ref: React.ForwardedRef<HTMLUListElement>
) => {
  return (
    <ul ref={ref} {...rest} className={cx(`${prefix}--expander`)}>
      {children}
    </ul>
  );
};

export default React.forwardRef(Expander);
