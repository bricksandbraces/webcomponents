import { IconOnlyButton } from "@openbricksandbraces/designsystem";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import { IconArrowBarToUp } from "@tabler/icons";
import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export type BackToTopProps = { anchor?: boolean };

export const BackToTop = React.forwardRef(function BackToTop({
  anchor = false
}: BackToTopProps) {
  const height = 128;
  const topAnchor = useRef<HTMLAnchorElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > height) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= height) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    if (anchor) {
      topAnchor.current?.click();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!document.body.id) {
      document.body.setAttribute("id", "top");
    }
  }, []);

  window.addEventListener("scroll", checkScrollTop);
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      {ReactDOM.createPortal(<a href="#top" ref={topAnchor} />, document.body)}
      <section
        className={cx(`${prefix}--backtotop-container`, {
          [`${prefix}--backtotop-container__visible`]: showScroll
        })}
      >
        <IconOnlyButton
          hideTooltip
          kind="primary"
          onClick={scrollTop}
          className={cx(`${prefix}--backtotop`)}
          icon={<IconArrowBarToUp />}
          size="large"
        />
      </section>
    </>
  );
});
