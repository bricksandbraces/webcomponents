import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Hero } from "./Hero";

export default { title: "Web/Hero", decorators: [withKnobs] };

export const Default = () => {
  return (
    <Hero
      backgroundImage={text(
        "backgroundImage",
        "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      )}
      title={text("title", "Creating a better tomorrow.")}
      text={text("title", "Creating a better tomorrow.")}
    />
  );
};
