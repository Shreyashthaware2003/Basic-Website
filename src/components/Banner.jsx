import { ReactTyped } from "react-typed";

function Banner() {
    return (
        <div className="bg-[#2699fb] w-full py-[100px]">
            <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold ">
                <div className="text-xl md:text-3xl md:p-[24px]">Learn with us</div>
                <div className="text-white text-5xl md:text-[80px] md:p-[24px] mb-2">Grow with us.</div>
                <div className="text-[20px] md:text-[50px] text-white md:p-[24px]  ">Learn  <ReactTyped strings={['Web Development', 'App Development', 'Ethical Hacking']} typeSpeed={100} loop={true} backSpeed={120} /></div>
                <button className="bg-black text-white p-3 rounded">Get Started</button>
            </div>
          
        </div>
    );
}

export default Banner;