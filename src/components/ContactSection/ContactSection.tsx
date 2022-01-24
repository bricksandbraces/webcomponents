import {
  Body,
  Button,
  Checkbox,
  CheckboxGroup,
  Column,
  Grid,
  Headline,
  Link,
  TextArea,
  TextInput
} from "@openbricksandbraces/designsystem";
import React, { useRef } from "react";
import { prefix } from "../../settings";

export type ContactSectionProps = {
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
  contactInfoLinks: {
    renderIcon: () => JSX.Element;
    href: string;
    label: string;
  }[];

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
  contactInfoHeadline,
  contactInfoDescription,
  contactInfoLinks,
  onSubmit,
  needs,
  submitLabel
}: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>();
  return (
    <section className={`${prefix}--contactsection`}>
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
          <div className={`${prefix}--contactsection-container`}>
            <div className={`${prefix}--contactsection-info`}>
              <Headline
                type="h2"
                className={`${prefix}--contactsection-info__headline`}
              >
                {contactInfoHeadline}
              </Headline>
              <p className={`${prefix}--contactsection-info__text`}>
                {contactInfoDescription}
              </p>
              <div className={`${prefix}--contactsection-info__contact`}>
                {contactInfoLinks.map((link) => {
                  return (
                    <div
                      key={link.label + link.href}
                      className={`${prefix}--contactsection-info__contact-item`}
                    >
                      <Link
                        icon={link.renderIcon()}
                        iconPosition="start"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className={`${prefix}--contactsection-form`}>
              <div className={`${prefix}--contactsection-form__textfields`}>
                <div
                  className={`${prefix}--contactsection-form__textfields-container`}
                >
                  <TextInput
                    fluid
                    name="first-name"
                    placeholder="First Name"
                    className={`${prefix}--contactsection-form__textfields-input`}
                  />
                  <TextInput
                    fluid
                    name="last-name"
                    placeholder="Last Name"
                    className={`${prefix}--contactsection-form__textfields-input`}
                  />
                </div>
                <div
                  className={`${prefix}--contactsection-form__textfields-container`}
                >
                  <TextInput
                    fluid
                    name="mail"
                    placeholder="Mail"
                    type="email"
                    className={`${prefix}--contactsection-form__textfields-input`}
                  />
                  <TextInput
                    fluid
                    name="phone"
                    placeholder="Phone (optional)"
                    {...({ type: "tel" } as any)}
                    className={`${prefix}--contactsection-form__textfields-input`}
                  />
                </div>
              </div>
              <div className={`${prefix}--contactsection-needs`}>
                <Body
                  type="body-02"
                  className={`${prefix}--contactsection-needs__headline`}
                >
                  What type of service do you need?
                </Body>

                <CheckboxGroup name="group" orientation="vertical">
                  {needs.map((need) => {
                    return (
                      <Checkbox
                        id={need.value}
                        key={need.value}
                        value={need.value}
                        label={need.label}
                      />
                    );
                  })}
                </CheckboxGroup>
              </div>
              <TextArea
                name="message"
                placeholder="Write us your message..."
                className={`${prefix}--contactsection-form__textarea`}
              />
              <Button
                className={`${prefix}--contactsection-form__button`}
                size="large"
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
          </div>
        </Column>
      </Grid>
    </section>
  );
});
