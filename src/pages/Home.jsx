import CategoryCard from "../components/category-card";
import Hero from "../components/hero";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
        <Hero/> 

        <div className="flex flex-col justify-center items-center text-center bg-amber-100 min-w-screen">
            <h2 className="mt-10 p3 font-bold">Inspiration Collection</h2>
            <p className="p-3">Define your home with an inspiring selection of top quality smart home appliances.</p>

            <div className="flex flex-row justify-center m-2">
                <img src="images-16.jpeg" alt="" className="rounded-tl-4xl mt-4 mr-5 min-w-40 lg:min-w-72"/>
                <img src="images-17.jpeg" alt="" className="mb-4 mr-5 min-w-40 lg:min-w-72"/>
                <img src="images-18.jpeg" alt="" className="rounded-br-4xl mt-4 min-w-40 lg:min-w-72"/>
            </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center bg-sky-900 text-white p-5">
            <div className="flex flex-col justify-center items-center text-center max-w-1/2 m-2">
                <h2 className="text-4xl text-amber-100">The best for your home.</h2>
                <p className="p-2">Discover our wide range of smart home appliances designed to make your life easier and more comfortable.</p>
                <button onClick={()=>{navigate('/products')}} className="bg-amber-100 text-sky-900 p-2 rounded-lg m-2 hover:bg-amber-300">Shop Now</button>
            </div>
            <img src="Smart-Home-Dash.jpeg" alt="" className="rounded-tl-3xl rounded-br-3xl rounded-bl-xl rounded-tr-xl w-2/5 h-80 max-w-80 m-2"/>
        </div>
        <div className="w-full flex flex-row justify-center items-center bg-amber-100 text-sky-900 p-5 h-100">
            <CategoryCard pic="led-system.jpeg" title="Lighting"/>
            <CategoryCard pic="cleaner.jpeg" title="Appliances"/>
            <CategoryCard pic="security.jpeg" title="Security"/>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-blue-200 min-w-screen text-black p-5">
            <h2 className="text-3xl">Our Services</h2>
            <div className="w-full flex flex-row justify-center items-center bg-blue-200 text-black p-5 h-100">
                <CategoryCard pic="s1.jpeg" title="Delivered to your doorstep"/>
                <CategoryCard pic="s2.jpeg" title="Installed by our professional engineers"/>
                <CategoryCard pic="s3.jpeg" title="1 year warranty on all products"/>
            </div>
        </div>
        <div >
            <footer className="bg-sky-900 text-amber-100 py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 items-center text-center">
                        <h3 className="text-xl font-bold mb-2">Smart Homes</h3>
                        <p className="text-sm">Smart Home Appliances & Solutions</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <Link to="/about" className="hover:underline">About Us</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                    </div>
                    <div className="mt-4 md:mt-0 text-sm">
                        &copy; {new Date().getFullYear()} E-Comm. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Home;