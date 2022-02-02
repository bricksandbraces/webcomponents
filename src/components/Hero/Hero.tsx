import {
  Grid,
  Column,
  AspectRatio
} from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/esm/src/helpers/arrayUtilities";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import cx from "classnames";
import React from "react";

export type CtaItem = {
  /**
   * CtaItem Link to location
   */
  href: string;

  /**
   * CtaItem Label
   */
  label: string;

  /**
   * CtaItem Chevron
   */
  showChevron: boolean;
};

export type HeroProps = {
  /**
   * Hero BackgroundImage
   */
  backgroundImage?: string;

  /**
   * Hero Title
   */
  title?: string;

  /**
   * Hero Text
   */
  text?: string;

  /**
   * Hero CtaItems
   */
  ctaItems?: CtaItem[];
};

export const Hero = React.forwardRef(function Hero(
  { backgroundImage, title, text, ctaItems }: HeroProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedCtaItems = idfy(ctaItems);
  return (
    <section id="hero" className={cx(`${prefix}--hero`)} ref={ref}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AspectRatio ratio="2x1">
            <div
              className={cx(`${prefix}--hero-container`)}
              style={{
                backgroundImage: backgroundImage?.startsWith("url(")
                  ? backgroundImage
                  : `url(${backgroundImage})`
              }}
            >
              <Grid narrow>
                <Column
                  sm={4}
                  md={6}
                  mdOffset={1}
                  lg={14}
                  lgOffset={1}
                  xlg={14}
                  xlgOffset={1}
                >
                  <p className={cx(`${prefix}--hero-title`)}>{title}</p>
                  <p className={cx(`${prefix}--hero-text`)}>{text}</p>
                </Column>
              </Grid>
            </div>
          </AspectRatio>
        </Column>
      </Grid>
    </section>
  );
});
