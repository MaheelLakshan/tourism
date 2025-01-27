import Link from 'next/link';
import Image from 'next/image';
import Images from '@/constants/Images';
// import { signOut } from '@/auth';
// import { Button } from '@/components/ui/button';

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

        <Link href="/tourpath">TourPath</Link>
        <Link href="/thingstodo">ThingsToDo</Link>
        <Link href="/hotels">Hotels</Link>
        <Link href="/aboutus">AboutUs</Link>

        {/* <ul className="flex flex-row items-center gap-8">
        <li>
        <form
            action={async () => {
              'use server';

              await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
            </form>
        </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
