import {
  Grid,
  Column,
  AspectRatio
} from "@openbricksandbraces/designsystem";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import cx from "classnames";
import React from "react";

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
};

export const Hero = React.forwardRef(function Hero(
  { backgroundImage, title, text }: HeroProps,
  ref: React.ForwardedRef<HTMLElement>
) {
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
