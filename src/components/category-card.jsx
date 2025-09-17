function CategoryCard({pic, title}) {
    return ( 
        <div className="flex flex-col justify-center items-center text-center m-3 ">
            <img src={pic} alt="" className=" rounded-xl min-w-40 h-40 lg:min-w-72 lg:min-h-72 "/>
            <h2 className="mt-2 p3 font-bold">{title}</h2>

        </div>
     );
}

export default CategoryCard;