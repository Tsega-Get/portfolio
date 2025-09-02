declare module "react-router-hash-link" {
  import * as React from "react";
  import { HashLinkProps } from "react-router-hash-link";

  export const HashLink: React.FC<HashLinkProps>;
  export const NavHashLink: React.FC<HashLinkProps>;

  export interface HashLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    smooth?: boolean;
    to: string;
    elementId?: string;
    isActive?: (match: unknown, location: unknown) => boolean;
    scroll?: (el: HTMLElement) => void;
  }
}
