import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';


export function AdminLayout ({children}:  LayoutProps) {
  return (
    <Auth >
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <Link href="/">
        <a href="">Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <div>{children}</div>
    </Auth >
  );
}
