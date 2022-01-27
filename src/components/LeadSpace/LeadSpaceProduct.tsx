import {
  IconOnlyButton,
  Grid,
  Column,
  Button
} from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/esm/src/helpers/arrayUtilities";
import { prefix } from "@openbricksandbraces/designsystem/lib/esm/src/settings";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons";
import cx from "classnames";
import React, { useRef, useState } from "react";
import { CtaItem } from "./LeadSpace";

export type LeadSpaceProductProps = {
  /**
   * LeadSpaceProduct BackgroundImage
   */
  backgroundImage?: string;

  /**
   * LeadSpaceProduct VideoUrl
   */
  videoUrl?: string;

  /**
   * LeadSpaceProduct VideoPlayLabel
   */
  videoPlayLabel?: string;

  /**
   * LeadSpaceProduct VideoPauseLabel
   */
  videoPauseLabel?: string;

  /**
   * LeadSpaceProduct Title
   */
  title?: string;

  /**
   * LeadSpaceProduct Text
   */
  text?: string;

  /**
   * LeadSpaceProduct CtaItems
   */
  ctaItems?: CtaItem[];
};

export const LeadSpaceProduct = React.forwardRef(function LeadSpaceProduct(
  {
    backgroundImage,
    videoUrl,
    videoPauseLabel,
    videoPlayLabel,
    title,
    text,
    ctaItems
  }: LeadSpaceProductProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const video = useRef<HTMLVideoElement>(null);
  const [videoPlay, setVideoPlay] = useState(true);
  const indexedCtaItems = idfy(ctaItems);
  return (
    <section
      id="leadspace"
      className={cx(`${prefix}--leadspace ${prefix}--leadspace-product`, {
        [`${prefix}--leadspace-video__player`]: videoUrl
      })}
      style={{
        backgroundImage: backgroundImage?.startsWith("url(")
          ? backgroundImage
          : `url(${backgroundImage})`
      }}
      ref={ref}
    >
      {videoUrl && (
        <>
          <video
            ref={video}
            autoPlay
            muted
            loop
            disablePictureInPicture
            playsInline
            id="leadspace--video"
            poster={backgroundImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <IconOnlyButton
            className={`${prefix}--leadspace-video__controls`}
            aria-label={videoPlay ? videoPauseLabel : videoPlayLabel}
            kind="ghost"
            size="large"
            hideTooltip
            onClick={() => {
              if (videoPlay) {
                video.current?.pause();
              } else {
                video.current?.play();
              }

              setVideoPlay(!videoPlay);
            }}
            icon={videoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
          />
        </>
      )}
      <Grid
        narrow
        className={cx(`${prefix}--leadspace-grid`, {
          [`${prefix}--leadspace-video`]: videoUrl
        })}
      >
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
                <h1 className={`${prefix}--leadspace-headline`}>{title}</h1>
              )}
              {text && (
                <div className={`${prefix}--leadspace-text`}>{text}</div>
              )}
              {ctaItems && (
                <div className={`${prefix}--leadspace-content__buttongroup`}>
                  {indexedCtaItems?.map((cta, i) => {
                    return (
                      <Button
                        key={cta.id}
                        size="large"
                        kind={i === 0 ? "primary" : "tertiary"}
                        href={cta.href}
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
