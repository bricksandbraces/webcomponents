import {
  Column,
  Grid,
  Headline,
  Marketing
} from "@openbricksandbraces/designsystem";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { BackToTop } from "./BackToTop";

export default { title: "Web/BackToTop", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Header
        baseUrl="#"
        linkItems={[
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" }
        ]}
      />
      <Hero
        ctaItems={[
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        title="Creating a better tomorrow."
        text="Creating a better tomorrow."
      />
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
          <div>
            <Marketing type="marketing-01">Hello &amp; Hi!</Marketing>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Headline>
          </div>
        </Column>
      </Grid>
      <BackToTop />
      <Footer
        baseUrl="#"
        linkItems={[
          { href: "#", label: "Imprint" },
          { href: "#", label: "Legal" },
          { href: "#", label: "Cookies" },
          { href: "#", label: "Privacy" },
          { href: "#", label: "Contact" }
        ]}
        description="Wir nutzen Cookies, um deine Experience zu verbessern. Deine Einstellungen kannst du jederzeit in den Einstellungen ändern."
        descriptionLink={{
          href: "#",
          label: "Zu den Cookieeinstellungen"
        }}
      />
    </div>
  );
};
