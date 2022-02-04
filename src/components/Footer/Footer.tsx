import { Column, Grid, Logo } from "@openbricksandbraces/designsystem";
import type { LinkItem } from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/esm/src/helpers/arrayUtilities";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import cx from "classnames";
import React from "react";

export type FooterProps = {
  /**
   * Footer LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * Footer ClassName
   */
  className?: string;

  /**
   * Footer BaseUrl
   */
  baseUrl?: string;
};

export const Footer = React.forwardRef(function Footer(
  { linkItems, baseUrl, className }: FooterProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedLinkItems = idfy(linkItems);
  return (
    <>
      <footer className={cx(`${prefix}--footer`, className)} ref={ref}>
        <Grid narrow className={cx(`${prefix}--footer-wrapper`)}>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <Grid narrow className={cx(`${prefix}--footer-bg`)}>
              <Column
                sm={4}
                md={8}
                lg={14}
                lgOffset={1}
                xlgOffset={1}
                xlg={14}
                className={cx(`${prefix}--footer-container`)}
              >
                <a href={baseUrl} className={cx(`${prefix}--footer-logo`)}>
                  <Logo type="logotype" color="black" size="xsmall" />
                </a>
                <div className={cx(`${prefix}--footer-links`)}>
                  {indexedLinkItems?.map((link) => {
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        className={cx(`${prefix}--footer-links__item`)}
                      >
                        <p>{link.label}</p>
                      </a>
                    );
                  })}
                </div>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </footer>
    </>
  );
});
