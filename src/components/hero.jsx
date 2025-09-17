import { useNavigate } from 'react-router-dom';

function Hero() {
    const heroImage = '/Heroimage.jpg';
    const navigate = useNavigate();
    return ( 
        <div>

        
            <div
                className="flex w-full h-[750px] bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="flex flex-col relative justify-center items-center top-20 left-6 bg-amber-50 w-[300px] h-[300px] rounded-3xl "  >
                    <h1 className="text-2xl font-bold text-blue-950">Your home, your way. </h1>
                    <p className="mt-6 text-sm text-center text-blue-950">Not only smart but, stylish to match your home vibes</p>
                    <button onClick={()=>navigate("/products")} className="mt-8 p-5 bg-gradient-to-r from-blue-950 to-black bg-clip-text text-transparent font-bold text-lg hover:scale-105 hover:bg-clip-padding transition-transform rounded-2xl hover:text-amber-100 duration-300">
                        Explore Now
                    </button>
                </div>
            
            </div>
            <div className="flex flex-row justify-between items-center bg-blue-200 p-4 text-black width-full h-[122px]">
                <div className="flex flex-row justify-between items-center m-2">
                    <img src="delivery_709790-3.png" alt="Delivery"  />
                    <div className="ml-4 flex flex-col  text-center items-center">
                        <p1 className="text-shadow-blue-950 font-bold">Free Delivery</p1>
                        <p2 className="text-sm">to your door step</p2>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center m-2">
                    <img src="customer-support_6757057-2.png" alt="Delivery Icon"  />  
                    <div className="ml-4 flex flex-col   items-center text-center">
                        <p1 className="text-shadow-blue-950 font-bold">7/24 Suppert</p1>
                        <p2 className="text-sm">Custemer Suppert avaliable anytime</p2>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center m-2">
                    <img src="trust_18611315-2.png" alt="Delivery Icon"  />  
                    <div className="ml-4 flex flex-col text-center  items-center">
                        <p1 className="text-shadow-blue-950 font-bold">100% Authentic</p1>
                        <p2 className="text-sm">Save and trusted by millons</p2>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Hero;