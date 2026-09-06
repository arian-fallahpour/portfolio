import * as React from "react";
import { SVGProps } from "react";
const WorkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M2 21V6h6V2h8v4h6v15zm8-15h4V4h-4z" />
  </svg>
);
export default WorkIcon;
