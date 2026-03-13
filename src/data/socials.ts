import GithubIcon from '@/assets/icons/github.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedInIcon from '@/assets/icons/linkedin.svg?react';
import MailIcon from '@/assets/icons/mail.svg?react';
import React from 'react';

interface Social {
  label: string;
  href: string;
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
}

export const SOCIALS: Social[] = [
  {
    label: 'Email',
    href: 'mailto:rafaeldrigo.rds@gmail.com',
    icon: MailIcon,
  },
  {
    label: 'Github',
    href: 'https://github.com/rdrigos',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rafaeldrigo',
    icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/r.drigos',
    icon: InstagramIcon,
  },
];
