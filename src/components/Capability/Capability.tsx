import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type CapabilityProps = {
  /**
   * Capability BackgroundImage
   */
  children?: React.ReactNode;

  /**
   * Capability Title
   */
  title?: string;

  /**
   * Capability Text
   */
  text?: string;
};

export const Capability = React.forwardRef(function Capability(
  { children, title, text }: CapabilityProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cx(`${prefix}--capability`)} ref={ref}>
      <div className={cx(`${prefix}--capability-icon`)}>{children}</div>
      <p className={cx(`${prefix}--capability-title`)}>{title}</p>
      <p className={cx(`${prefix}--capability-text`)}>{text}</p>
    </div>
  );
});
