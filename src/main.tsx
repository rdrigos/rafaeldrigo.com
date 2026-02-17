import '@/globals.css';
import { routeTree } from '@/route-tree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

const router = createRouter({
  routeTree,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
