import MenuIcon from '@/assets/icons/menu.svg?react';
import CloseIcon from '@/assets/icons/x.svg?react';
import { Anchor } from '@/components/ui/anchor';
import { useScrolled } from '@/hooks/use-scrolled';
import { cn } from '@/utils/class-name';
import { Link, useLocation } from '@tanstack/react-router';
import React from 'react';

interface Page {
  label: string;
  path: string;
  disabled?: boolean;
}

const PAGES: Page[] = [
  {
    label: 'Início',
    path: '/',
  },
  {
    label: 'Projetos',
    path: '/projects',
    disabled: true,
  },
  {
    label: 'Certificações',
    path: '/certifications',
    disabled: true,
  },
];

export function Navbar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const location = useLocation();
  const scrolled = useScrolled();

  const isActive = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <React.Fragment>
      <nav className={cn('fixed inset-x-0 top-0 z-50 h-16', scrolled ? 'glass border-b shadow-sm' : 'bg-transparent')}>
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <Link to="/" className="text-foreground font-mono text-lg font-semibold tracking-tight">
            Rafael Drigo
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {PAGES.map(({ disabled, label, path }) => (
              <Anchor key={path} active={isActive(path)} disabled={disabled} asChild>
                <Link to={path}>{label}</Link>
              </Anchor>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-foreground md:hidden [&_svg]:size-5"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        data-state={isMenuOpen ? 'open' : 'closed'}
        className={cn(
          'glass fixed inset-x-0 top-18 mx-2 rounded-lg border shadow md:hidden',
          'transition-all duration-300 ease-out',
          'data-[state=open]:translate-y-0 data-[state=open]:opacity-100',
          'data-[state=closed]:-translate-y-2 data-[state=closed]:opacity-0'
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {PAGES.map(({ disabled, label, path }) => (
            <Anchor key={path} active={isActive(path)} disabled={disabled} asChild>
              <Link to={path}>{label}</Link>
            </Anchor>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
