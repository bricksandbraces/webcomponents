import { Grid, Column, Logo, Button } from "@openbricksandbraces/designsystem";
import { idfy } from "@openbricksandbraces/designsystem/lib/cjs/src/helpers/arrayUtilities";
import { IconMenu, IconX } from "@tabler/icons";
import cx from "classnames";
import React, { useState } from "react";
import { prefix } from "../../settings";

export type HeaderLinkItem = {
  /**
   * HeaderLinkItem HeaderLink to location
   */
  href: string;

  /**
   * HeaderLinkItem Label
   */
  label: string;
};

export type HeaderProps = {
  /**
   * Header HeaderLinkItems
   */
  linkItems?: HeaderLinkItem[];

  /**
   * Header Logo
   */
  logo?: React.ReactNode;

  /**
   * Header BaseUrl
   */
  baseUrl?: string;

  /**
   * Header Open
   */
  open?: boolean;

  /**
   * Header DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * Header OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;
};

export const Header = React.forwardRef(function Header(
  { linkItems, baseUrl }: HeaderProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedHeaderLinkItems = idfy(linkItems);
  const [open, setOpen] = useState(false);
  return (
    <header
      className={cx(`${prefix}--header ${prefix}--header-product`)}
      ref={ref}
    >
      <div
        className={cx(`${prefix}--header-menu`, {
          [`${prefix}--header-menu__open`]: open
        })}
      >
        <div className={cx(`${prefix}--header-menu__button-container`)}>
          <p className={cx(`${prefix}--header-menu__label`)}>Moin!</p>
          <button
            className={cx(`${prefix}--header-menu__button`)}
            onClick={() => setOpen(false)}
          >
            <IconX size={20} />
          </button>
        </div>
        <div className={cx(`${prefix}--header-menu__item-list`)}>
          <div>
            {indexedHeaderLinkItems?.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={cx(`${prefix}--header-menu__item`)}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <Button
            fluid
            size="large"
            className={cx(`${prefix}--header-menu__item-button`)}
          >
            Kontakt
          </Button>
        </div>
      </div>
      <div className={cx(`${prefix}--header-overlay`)} />
      <Grid narrow>
        <Column
          sm={4}
          md={8}
          lg={14}
          lgOffset={1}
          xlgOffset={1}
          xlg={14}
          className={cx(`${prefix}--header-container`)}
        >
          <a href={baseUrl} className={cx(`${prefix}--header-logo`)}>
            <Logo type="logotype" color="black" size="xsmall" />
          </a>
          <div className={cx(`${prefix}--header-links`)}>
            {indexedHeaderLinkItems?.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={cx(`${prefix}--header-links__item`)}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <button
            className={cx(`${prefix}--header-button`)}
            onClick={() => setOpen(true)}
          >
            <IconMenu size={20} />
          </button>
        </Column>
      </Grid>
    </header>
  );
});
