'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Images from '@/constants/Images';
import { navLinks } from '@/constants/NavLink';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center bg-primary text-white w-full px-12 h-[80px]">
      <div className="hidden md:block">
        <Link href="/">
          <Image src={Images.logo} alt="logo" width={80} height={80} />
        </Link>
      </div>
      <nav className="flex gap-2 md:text-lg font-semibold md:gap-8">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className={`${pathname === href ? 'text-orange-500' : 'text-white'} hover:text-orange-300 transition-colors duration-300`}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
