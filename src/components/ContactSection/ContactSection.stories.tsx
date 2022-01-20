import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons";

import React from "react";
import { ContactSection } from "./ContactSection";

export default { title: "Web/ContactSection", decorators: [withKnobs] };

export const Default = () => {
  return (
    <ContactSection
      sectionTitle="Contact us"
      sectionIntro="Any questions or remarks? Just write us a message!"
      contactInfoHeadline="Contact Information"
      contactInfoDescription="Fill up the form and we will get back to you within 2 business
      days."
      contactInfoLinks={[
        {
          icon: () => IconPhone,
          href: "tel:+0123 4567 89010",
          label: "+0123 4567 89010"
        },
        {
          icon: () => IconMail,
          href: "mailto:moin@bricksandbraces.com",
          label: "moin@bricksandbraces.com"
        },
        {
          icon: () => IconMapPin,
          href: "https://goo.gl/maps/pvUqd6uUNrE4iqbBA",
          label: "123 Street, 21456 Hamburg, Germany"
        }
      ]}
      needs={[
        { label: "Web Design", value: "web" },
        { label: "Customer Experience", value: "cx" },
        { label: "Mobile Apps", value: "mobile" }
      ]}
      onSubmit={action("onSubmit")}
      submitLabel={"Send message"}
    />
  );
};
