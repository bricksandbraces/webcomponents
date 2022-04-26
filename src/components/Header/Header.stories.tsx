import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Header } from "./Header";

export default { title: "Web/Header", decorators: [withKnobs] };

export const Web = () => {
  return (
    <Header
      baseUrl={text("baseUrl", "#")}
      linkItems={object("linkItems", [
        { href: "#", label: "About us" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Blog" }
      ])}
      onOpenChange={action("onOpenChange")}
    />
  );
};
