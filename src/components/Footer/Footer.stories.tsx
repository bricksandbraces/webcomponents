import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Footer } from "./Footer";

export default { title: "Web/Footer", decorators: [withKnobs] };

export const Default = () => {
  return (
    <Footer
      baseUrl={text("baseUrl", "#")}
      linkItems={object("linkItems", [
        { href: "#", label: "Imprint" },
        { href: "#", label: "Legal" },
        { href: "#", label: "Cookies" },
        { href: "#", label: "Privacy" },
        { href: "#", label: "Contact" }
      ])}
    />
  );
};
