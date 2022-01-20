import {
  Body,
  Button,
  Column,
  Grid,
  Headline,
  Link,
  RadioButton,
  RadioButtonGroup,
  TextArea,
  TextInput
} from "@openbricksandbraces/designsystem";
import React, { useRef } from "react";
import { prefix } from "../../settings";

export type ContactSectionProps = {
  /**
   * ContactSection Section Title
   */
  sectionTitle: string;

  /**
   * ContactSection Section Intro
   */
  sectionIntro: string;

  /**
   * ContactSection Contact Info Headline
   */
  contactInfoHeadline: string;

  /**
   * ContactSection Contact Info Description
   */
  contactInfoDescription: string;

  /**
   * ContactSection Contact Info Links
   */
  contactInfoLinks: { icon: React.ReactNode; href: string; label: string }[];

  /**
   * ContactSection On Submit
   */
  onSubmit: (
    formData: FormData,
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;

  /**
   * ContactSection Needs Array
   */
  needs: { label: string; value: string }[];

  /**
   * ContactSection Submit Label
   */
  submitLabel: string;
};

export const ContactSection = React.forwardRef(function ContactSection({
  sectionTitle,
  sectionIntro,
  contactInfoHeadline,
  contactInfoDescription,
  contactInfoLinks,
  onSubmit,
  needs,
  submitLabel
}: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>();
  return (
    <section className={`${prefix}--contactsection-container`}>
      <Grid>
        <Column
          className={`${prefix}--contactsection-header`}
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={14}
          lgOffset={1}
          xlg={14}
          xlgOffset={1}
        >
          <Headline>{sectionTitle}</Headline>
          <Headline type="h5">{sectionIntro}</Headline>
        </Column>
      </Grid>
      <Grid narrow>
        <Column
          className={`${prefix}--contactsection-info`}
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={6}
          lgOffset={1}
          xlg={6}
          xlgOffset={1}
        >
          <Headline type="h2">{contactInfoHeadline}</Headline>
          <Body>{contactInfoDescription}</Body>
          {contactInfoLinks.map((link) => {
            return (
              <div
                key={link.label + link.href}
                className={`${prefix}--contactsection-info--contact-item`}
              >
                {link.icon}
                <Link href={link.href}>{link.label}</Link>
              </div>
            );
          })}
        </Column>
        <Column
          className={`${prefix}--contactsection-form`}
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={6}
          xlg={6}
        >
          <form>
            <div className={`${prefix}--contactsection-form--textfields`}>
              <TextInput name="first-name" label="First Name" />
              <TextInput name="last-name" label="Last Name" />
              <TextInput name="mail" label="Mail" type="email" />
              <TextInput
                name="phone"
                label="Phone"
                {...({ type: "tel" } as any)}
              />
            </div>
            <RadioButtonGroup
              name={"matter"}
              legendLabel="What is your need?"
              orientation="horizontal"
            >
              {needs.map((need) => {
                return (
                  <RadioButton
                    id={need.value}
                    key={need.value}
                    value={need.value}
                  >
                    {need.label}
                  </RadioButton>
                );
              })}
            </RadioButtonGroup>
            <TextArea
              name="message"
              label="Message"
              placeholder="Write us your message..."
            />
            <Button
              onClick={(event) =>
                onSubmit(
                  new FormData(formRef.current),
                  event as React.MouseEvent<HTMLButtonElement>
                )
              }
            >
              {submitLabel}
            </Button>
          </form>
        </Column>
      </Grid>
    </section>
  );
});
