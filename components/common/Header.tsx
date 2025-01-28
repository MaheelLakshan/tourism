import Link from 'next/link';
import Image from 'next/image';
import Images from '@/constants/Images';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-primary text-white w-full px-12 h-[80px]">
      <div>
        <Link href="/">
          <Image src={Images.logo} alt="logo" width={80} height={80} />
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href="/">Home</Link>

        <Link href="/tour-paths">TourPath</Link>
        <Link href="/things-todo">ThingsToDo</Link>
        <Link href="/hotels">Hotels</Link>
        <Link href="/about-us">AboutUs</Link>
      </div>
    </header>
  );
};

export default Header;
