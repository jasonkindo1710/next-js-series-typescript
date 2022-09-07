import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';


export function MainLayout ({children}:  LayoutProps) {
    useEffect(() => {
        console.log('MainLayout Mounting');
        return () => console.log('MainLayout Unmounting');
    }, [])
  return (
    <div>
      <h1>Main Layout</h1>
      <div>Sidebar</div>
      <Link href="/">
        <a href="">Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
