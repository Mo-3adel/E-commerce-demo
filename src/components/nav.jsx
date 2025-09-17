import '../App.css'
import { useNavigate } from 'react-router-dom';

function Topmenu() {
    const navigate = useNavigate();
    return ( 
        <div className="flex flex-row justify-between items-center bg-amber-100 p-3 text-shadow-cyan-900 width-full height-122px">
            <h1 className="p-1 text-3xl bg-gradient-to-r from-blue-950 to-violet-800 bg-clip-text text-transparent">Smart Homes</h1>
            <div>
                <button onClick={()=>{navigate('/')}} className="bg-amber-100 text-cyan-700 hover:bg-cyan-700 hover:text-amber-100 font-bold py-2 px-4 rounded">Home</button>
                <button onClick={()=>{navigate('/products')}} className="bg-amber-100 text-cyan-700 hover:bg-cyan-700 hover:text-amber-100 font-bold py-2 px-4 rounded">Products</button>
                <button onClick={()=>{navigate('/contact')}} className="bg-amber-100 text-cyan-700 hover:bg-cyan-700 hover:text-amber-100 font-bold py-2 px-4 rounded">Contact</button>
                <button onClick={()=>{navigate('/mycart')}} className="bg-amber-100 text-cyan-700 hover:bg-cyan-700 hover:text-amber-100 font-bold py-2 px-4 rounded">MyCart</button>

            </div>
        </div>
     );
}

export default Topmenu;