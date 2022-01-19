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
import { withKnobs } from "@storybook/addon-knobs";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons";
import React from "react";
import { prefix } from "../../settings";

export default { title: "Web/ContactSection", decorators: [withKnobs] };

export const Default = () => {
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
          <Headline>Contact us</Headline>
          <Headline type="h5">
            Any questions or remarks? Just write us a message!
          </Headline>
        </Column>
      </Grid>
      <Grid>
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
          <Headline type="h2">Contact Information</Headline>
          <Body>
            Fill up the form and we will get back to you within 2 business days.
          </Body>
          <div className={`${prefix}--contactsection-info--contact-item`}>
            <IconPhone />
            <Link href="tel:+0123 4567 89010">+0123 4567 89010</Link>
          </div>
          <div className={`${prefix}--contactsection-info--contact-item`}>
            <IconMail />
            <Link href="mailto:moin@bricksandbraces.com">
              moin@bricksandbraces.com
            </Link>
          </div>
          <div className={`${prefix}--contactsection-info--contact-item`}>
            <IconMapPin />
            <Link href="https://goo.gl/maps/pvUqd6uUNrE4iqbBA">
              123 Street, 21456 Hamburg, Germany
            </Link>
          </div>
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
              <TextInput label="First Name" />
              <TextInput label="Last Name" />
              <TextInput label="Mail" type="email" />
              <TextInput label="Phone" {...({ type: "tel" } as any)} />
            </div>
            <RadioButtonGroup
              name={"matter"}
              legendLabel="What is your need?"
              orientation="horizontal"
            >
              <RadioButton id="web" value={"web"}>
                Web Design
              </RadioButton>
              <RadioButton id="cx" value={"cx"}>
                Customer Experience
              </RadioButton>
              <RadioButton id="mobile" value={"mobile"}>
                Mobile Apps
              </RadioButton>
            </RadioButtonGroup>
            <TextArea label="Message" placeholder="Write us your message..." />
            <Button>Send Message</Button>
          </form>
        </Column>
      </Grid>
    </section>
  );
};
