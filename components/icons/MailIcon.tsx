import * as React from "react";
import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z" />
  </svg>
);
export default MailIcon;
