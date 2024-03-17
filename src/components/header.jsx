
const Header = () => {
    return (
        <div>
            {/* navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={"0"} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={"0"} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipies</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Taste Haven Café</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipies</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="md:block hidden">
                    <div className="flex gap-3">
                        <label className="input bg-gray-100 rounded-full flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="grow" placeholder="Search" />
                        </label>
                        <div>
                            <img src="https://i.ibb.co/KskwWGW/Frame-5.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="mt-7">
                <div className="hero rounded-2xl" style={{backgroundImage: "url(https://i.ibb.co/rQzqTD3/Rectangle-1.png)"}}>
                    <div className="hero-overlay bg-opacity-10 rounded-2xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:w-2/3 md:my-28 my-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold lg:pb-5">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5 md:pb-5">Unleash your culinary potential with personalized cooking classes designed to match your skills and interests. Elevate your cooking experience today!</p>
                            <div className="space-x-5">
                            <button className="btn border-none bg-green-500 text-black rounded-full">Explore Now</button>
                            <button className="btn rounded-full bg-transparent text-white">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;