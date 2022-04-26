import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Capability } from "./Capability";

export default { title: "Web/Capability", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div
      style={{ display: "flex", gap: "2rem", flexFlow: "row", padding: "2rem" }}
    >
      <Capability
        title={text("title", "Creating a better tomorrow.")}
        text={text(
          "text",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        )}
      >
        <img
          src="https://i.pinimg.com/originals/c1/1c/40/c11c40d1efe7c25e22b5f61915012de2.jpg"
          alt="123"
        />
      </Capability>
      <Capability
        title={text("title", "Creating a better tomorrow.")}
        text={text(
          "text",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        )}
      />
      <Capability
        title={text("title", "Creating a better tomorrow.")}
        text={text(
          "text",
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        )}
      />
    </div>
  );
};
