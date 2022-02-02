import { Column, Grid, Link, Logo } from "@openbricksandbraces/designsystem";
import type { LinkItem } from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/esm/src/helpers/arrayUtilities";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import { IconMenu } from "@tabler/icons";
import cx from "classnames";
import React from "react";

export type FooterProps = {
  /**
   * Footer LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * Footer CompanyLabel
   */
  companyLabel?: React.ReactNode;

  /**
   * Footer ClassName
   */
  className?: string;

  /**
   * Footer CtaHeadline
   */
  ctaHeadline?: string;

  /**
   * Footer CtaText
   */
  ctaText?: string;

  /**
   * Footer BaseUrl
   */
  baseUrl?: string;

  /**
   * Footer Description
   */
  description?: string;

  /**
   * Footer DescriptionLink
   */
  descriptionLink?: LinkItem;
};

export const Footer = React.forwardRef(function Footer(
  { linkItems, className }: FooterProps,
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
                <a href="#" className={cx(`${prefix}--footer-logo`)}>
                  <Logo type="logotype" color="black" size="xsmall" />
                </a>
                <div className={cx(`${prefix}--footer-links`)}>
                  <a href="#" className={cx(`${prefix}--footer-links__item`)}>
                    <p>Item 1</p>
                  </a>
                  <a href="#" className={cx(`${prefix}--footer-links__item`)}>
                    <p>Item 2</p>
                  </a>
                  <a href="#" className={cx(`${prefix}--footer-links__item`)}>
                    <p>Item 3</p>
                  </a>
                </div>
              </Column>
            </Grid>
          </Column>
        </Grid>

        {/* <Grid narrow className={`${prefix}--footer-grid`}>
          <Column
            sm={3}
            md={4}
            lg={4}
            lgOffset={1}
            xlg={4}
            xlgOffset={1}
            className={`${prefix}--footer-column`}
          >
            <Logo
              size="xsmall"
              type="logotype"
              color="white"
              className={`${prefix}--footer-logo`}
            />
          </Column>
          <Column
            sm={4}
            md={4}
            lg={11}
            xlg={11}
            className={`${prefix}--footer-column`}
          >
            <div className={`${prefix}--footer-linksection`}>
              {indexedLinkItems?.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`${prefix}--footer-linksection__item`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Column>
        </Grid> */}
      </footer>
    </>
  );
});
