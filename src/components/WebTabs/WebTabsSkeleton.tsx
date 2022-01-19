import { SkeletonText } from "@openbricksandbraces/designsystem";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type WebTabsSkeletonProps = {
  /**
   * WebTabsSkeleton ClassName
   */
  className?: string;
};

export const WebTabsSkeleton = function WebTabsSkeleton({
  className
}: WebTabsSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--webtabs ${prefix}--skeleton`,

        className
      )}
    >
      <div
        className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}
      >
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div
        className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}
      >
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div
        className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}
      >
        <SkeletonText style={{ width: "100%" }} />
      </div>
    </div>
  );
};
