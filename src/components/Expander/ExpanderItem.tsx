import { IconMinus, IconPlus } from "@tabler/icons";
import cx from "classnames";
import React, { useState } from "react";
import { prefix } from "../../settings";

export type ExpanderItemProps = {
  /**
   * ExpanderItem Title
   */
  title: string;

  /**
   * ExpanderItem Children
   */
  children: React.ReactNode;
};

const ExpanderItem = (
  { title, children, ...rest }: ExpanderItemProps,
  ref: React.ForwardedRef<HTMLLIElement>
) => {
  const [open, setOpen] = useState(false);
  return (
    <li
      ref={ref}
      {...rest}
      className={cx(`${prefix}--expander-item`, {
        [`${prefix}--expander-item__open`]: open
      })}
    >
      <button
        className={`${prefix}--expander-item__button`}
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? (
          <IconMinus className={`${prefix}--expander-item__icon`} />
        ) : (
          <IconPlus className={`${prefix}--expander-item__icon`} />
        )}
      </button>
      <div className={`${prefix}--expander-item__content`}>{children}</div>
    </li>
  );
};

export default React.forwardRef(ExpanderItem);
