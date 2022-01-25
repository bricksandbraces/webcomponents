import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons";

import React from "react";
import { ContactSection } from "./ContactSection";

export default { title: "Web/ContactSection", decorators: [withKnobs] };

export const Default = () => {
  return (
    <ContactSection
      contactInfoHeadline="How can we help you &amp; your business?"
      contactInfoDescription="Fill up the form and we will get back to you within 24 hours."
      contactInfoLinks={[
        {
          renderIcon: () => <IconPhone />,
          href: "tel:+0123 4567 89010",
          label: "+0123 4567 89010"
        },
        {
          renderIcon: () => <IconMail />,
          href: "mailto:moin@bricksandbraces.com",
          label: "moin@bricksandbraces.com"
        },
        {
          renderIcon: () => <IconMapPin />,
          href: "https://goo.gl/maps/pvUqd6uUNrE4iqbBA",
          label: "123 Street, 21456 Hamburg, Germany"
        }
      ]}
      needs={[
        { label: "Web Experience", value: "web" },
        { label: "Customer Experience", value: "cx" },
        { label: "Mobile Apps", value: "mobile" },
        { label: "Strategy", value: "mobile" }
      ]}
      onSubmit={action("onSubmit")}
      submitLabel={"Send message"}
    />
  );
};
