import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";


const Body = () => {
    // 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("../../public/fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(Products)

    return (
        <div className="body py-20">
            <div className="container text-center p-4 mx-auto">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-primary tracking-wide">Our Recipes</h1>
                <p className="mb-5 mt-7 text-sm text-tertiary px-4">Welcome to BB-Food, where we invite you to explore a world of culinary delights through our collection of exquisite recipes. From comforting classics to innovative creations, each recipe is thoughtfully crafted to inspire and delight your taste buds.</p>
            </div>
            <div className="flex mt-6 flex-col md:flex-row text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/5 \">

                    {products.map((pd) => (
                        <Product key={pd.recipe_id} pd={pd}></Product>
                    ))}


                </div>
                <div className="grid grid-cols-1 gap-8 w-full md:w-1/3 mx-auto mt-20 md:mt-0">
                    <div className="card bg-base-100 shadow-xl border-[.5px]">
                        <figure className="px-4 pt-4">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;