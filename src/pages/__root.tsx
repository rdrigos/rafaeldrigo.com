import { Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent(): React.JSX.Element {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
