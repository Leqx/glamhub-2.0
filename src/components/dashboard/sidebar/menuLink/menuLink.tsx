'use client';

import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={cn(
        'py-2 px-5 flex items-center gap-10 my-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-primary/20'
      )}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
