'use client';
import { headerLinks } from '@/constants/navitems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.name}
            className={` ${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
