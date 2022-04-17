import Link from "next/link";

const Navbar = (props: navbarProp) => {
  const link = (props.buttonText == "Add User") ? "/adduser" : "/";
  return (
    <div className=" bg-blue-800 h-24 flex justify-around items-center ">
      <div className=" items-center   justify-start flex">
        <p className="font-bold flex-auto text-slate-200">
          User Management System
        </p>
      </div>
      <Link href={link} passHref>
        <div className="items-center h-12 flex font-bold text-white bg-yellow-800 py-1 px-8 hover:bg-yellow-900 rounded-lg">
          {props.buttonText}
        </div>
      </Link>
    </div>
  );
};

interface navbarProp {
  buttonText: string;
}

export default Navbar;
