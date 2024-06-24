import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] py-2  mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold ">
                    Ws CubeTech
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />

                }

                <ul className=" hidden md:flex text-white gap-10 cursor-pointer">
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resource</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[85px] ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
                    <li className="p-5">Home</li>
                    <li className="p-5">Company</li>
                    <li className="p-5">Resource</li>
                    <li className="p-5">About</li>
                    <li className="p-5">Contact</li>
                </ul>
            </div>
        </div>
    );

}

export default Header;