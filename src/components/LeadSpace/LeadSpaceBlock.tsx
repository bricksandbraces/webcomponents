import { Grid, Column, Button } from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/esm/src/helpers/arrayUtilities";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import { IconChevronRight } from "@tabler/icons";
import cx from "classnames";
import React, { ReactNode } from "react";
import { CtaItem } from "./LeadSpace";

export type LeadSpaceBlockProps = {
  /**
   * LeadSpaceBlock Text
   */
  text?: ReactNode;

  /**
   * LeadSpaceBlock Title
   */
  title?: string;

  /**
   * LeadSpaceBlock CtaItems
   */
  ctaItems?: CtaItem[];
};

export const LeadSpaceBlock = React.forwardRef(function LeadSpaceBlock(
  { text, title, ctaItems }: LeadSpaceBlockProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedCtaItems = idfy(ctaItems);
  return (
    <section
      ref={ref}
      id="leadspace"
      className={cx(`${prefix}--leadspace ${prefix}--leadspace-block`)}
    >
      <Grid narrow className={cx(`${prefix}--leadspace-grid`)}>
        <Column
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={14}
          lgOffset={1}
          xlg={14}
          xlgOffset={1}
          className={`${prefix}--leadspace-column`}
        >
          <div className={`${prefix}--leadspace-container`}>
            <div className={`${prefix}--leadspace-content`}>
              {title && (
                <h1
                  className={`${prefix}--leadspace-headline ${prefix}--leadspace-block__headline`}
                >
                  {title}
                </h1>
              )}
              {text && (
                <div className={`${prefix}--leadspace-block__text`}>{text}</div>
              )}
              {ctaItems && (
                <div className={`${prefix}--leadspace-content__buttongroup`}>
                  {indexedCtaItems?.map((cta, i) => {
                    return (
                      <Button
                        key={cta.id}
                        size="large"
                        kind={i === 0 ? "primary" : "secondary"}
                        href={cta.href}
                        iconPosition="right"
                        icon={
                          cta.showChevron ? <IconChevronRight /> : undefined
                        }
                      >
                        {cta.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
});
