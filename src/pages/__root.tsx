import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mt-16 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
