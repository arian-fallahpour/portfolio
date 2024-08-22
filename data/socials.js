import { GithubIcon } from "@/components/elements/icons/GithubIcon";
import { LinkedInIcon } from "@/components/elements/icons/LinkedInIcon";
import { MailIcon } from "@/components/elements/icons/MailIcon";
import { PhoneIcon } from "@/components/elements/icons/PhoneIcon";

const socials = [
  {
    name: "LinkedIn",
    key: "linkedIn",
    Icon: LinkedInIcon,
    value: "@arian-fallahpour",
    href: "https://www.linkedin.com/in/arian-fallahpour/",
  },
  {
    name: "Github",
    key: "github",
    value: "@arian-fallahpour",
    Icon: GithubIcon,
    href: "https://github.com/arian-fallahpour",
  },
  {
    name: "Email",
    key: "email",
    value: "arianf2004@gmail.com",
    Icon: MailIcon,
    href: "mailto:arianf2004@gmail.com",
  },
  {
    name: "Phone",
    key: "phone",
    value: "(647) 282 5808",
    Icon: PhoneIcon,
    href: "tel:+16472825808",
  },
];

export default socials;

export const socialsMap = {};
for (let i = 0; i < socials.length; i++) {
  socialsMap[socials[i].key] = socials[i];
}
