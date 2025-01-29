import Images from '@/constants/Images';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className="footer bg-primary text-base-content p-10 md:flex gap-12">
      <aside className="text-pureWhite">
        <Link href="/">
          <Image src={Images.logo} alt="logo" width={80} height={80} />
        </Link>

        <div className="pb-2">
          <div className="pt-4 font-semibold text-lg">Contact Information </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={Images.footer_email} className="w-3 h-3 " alt="email" />
            Email : maheellakshandev@gmail.com
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={Images.footer_call} className="w-3 h-3 " alt="call" />
            Phone : 0716731827
          </div>
        </div>
      </aside>

      <nav className="text-pureWhite pb-2">
        <div className="text-lg font-semibold">Quick Links</div>
        <li className="link link-hover">About Us</li>
        <li className="link link-hover">Privacy Policy</li>
        <li className="link link-hover">Terms of Service</li>
        <li className="link link-hover">FAQ</li>
        <li className="link link-hover">Contact Us</li>
      </nav>

      <nav className="text-pureWhite pb-2">
        <div className="text-lg font-semibold">Follow Us</div>
        <div className="link link-hover">
          <div className="flex justify-start items-center gap-2">
            <Image src={Images.footer_facebook} className="w-3 h-3" alt="facebook" />
            tours.lk
          </div>
        </div>
        <div className="link link-hover">
          <div className="flex justify-start items-center gap-2">
            <Image src={Images.footer_insta} className="w-3 h-3" alt="insta" />
            tours.lk
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
