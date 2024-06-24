
function Plans() {
    return (
        <div className=" py-[100px] px-2">
            <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 text-center">
                <div className="shadow-xl my-4 h-[400px] hover:scale-105 duration-500 rounded">
                    <h1 className="font-bold pt-10 mb-5 text-[20px]">Web Development</h1>
                    <h1 className="font-bold text-[30px] mb-5">$149</h1>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit.</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo?</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet.</p>

                    <button className="bg-[#00df9a] font-semibold text-black w-[200px]  py-2 rounded mt-5">Start Trial</button>
                </div>


                <div className="shadow-xl my-4 h-[400px] bg-gray-100 hover:scale-105 duration-500 rounded">
                    <h1 className="font-bold pt-10 mb-5 text-[20px]">Application Development</h1>
                    <h1 className="font-bold text-[30px] mb-5">$149</h1>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit.</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo?</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet.</p>

                    <button className="bg-[#00df9a] font-semibold text-black w-[200px]  py-2 rounded mt-5">Start Trial</button>
                </div>
                <div className="shadow-xl my-4 h-[400px] hover:scale-105 duration-500 rounded">
                <h1 className="font-bold pt-10 mb-5 text-[20px]">Ethical Hacking</h1>
                    <h1 className="font-bold text-[30px] mb-5">$149</h1>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit.</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo?</p>
                    <p className="font-bold px-3 mb-2">Lorem ipsum dolor sit amet.</p>

                    <button className="bg-[#00df9a] font-semibold text-black w-[200px]  py-2 rounded mt-5">Start Trial</button>
                </div>
            </div>
        </div>
    );
}

export default Plans;