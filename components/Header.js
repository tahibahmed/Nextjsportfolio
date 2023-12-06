import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials"

const Header = () => {
  return (
  <header className="z-30 absolute flex w-full items-center px-16 xl:px-0 xl:h-[90px] ">
    <div className="container mx-auto">
    <div className=" flex lg:flex-row flex-col  items-center justify-between py-8 gap-y-6" >
      <Link href={"/"}>
        <Image src={'/tahibw.png'} width={350} height={148} className="" priority={true}  />
      </Link>
<Socials/>
    </div>
    </div>
  </header>
  )
};

export default Header;
