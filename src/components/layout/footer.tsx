import { Anchor } from '@/components/ui/anchor';
import { SOCIALS } from '@/data/socials';
import React from 'react';

export function Footer(): React.JSX.Element {
  const today = new Date();

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm">© {today.getFullYear()} Rafael Drigo. Todos os direitos reservados</p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ href, icon: Icon }) => (
            <Anchor key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="stroke-1" />
            </Anchor>
          ))}
        </div>
      </div>
    </footer>
  );
}
