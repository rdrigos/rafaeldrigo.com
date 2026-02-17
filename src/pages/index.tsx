import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent(): React.JSX.Element {
  return <div>Home page</div>;
}
