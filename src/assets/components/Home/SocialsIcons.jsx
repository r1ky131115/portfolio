import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react';

const iconsList = [
  {
    id: 1,
    icon: (
      <BrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
    ),
    href: "https://github.com/r1ky131115",
    ariaLabel: "github-icon",
    target: "_blank",
  },
  {
    id: 2,
    icon: (
      <BrandLinkedin className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
    ),
    href: "https://www.linkedin.com/in/ricardo-luis-aguirre-402b08179/",
    ariaLabel: "linkedin-icon",
    target: "_blank",
  },
  {
    id: 3,
    icon: (
      <Mail className="h-10 w-10  hover:scale-125 hover:text-[var(--bg-buttons)]" />
    ),
    href: "#contactame",
    ariaLabel: "mail-icon",
  },
];

export const SocialsIcons = () => {
  return (
    <>
      {iconsList.map((icon) => {
        return (
          <li className="flex gap-2" key={icon.id}>
            <a
              href={icon.href}
              className="text-[var(--socials-buttons)]"
              aria-label={icon.ariaLabel}
              target={icon.target}
              rel="noreferrer"
            >
              {icon.icon}
            </a>
          </li>
        );
      })}
    </>
  );
};
