/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Body = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cart1, setCart1] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);


    // Fetch data from API
    useEffect(() => {
        fetch("../../fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // handleCart function for add to cart
    const handleCart = (p, toast) => {
        const isExist = cart.find(pd => pd.recipe_id === p.recipe_id);
        if (!isExist) {
            setCart([...cart, p]);
        } else {
            const notify = toast('This product already exists in your cart', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            // alert("This item already on Want to cook. You can only have one of this item in Want to cook cart at a time!");
        }
    }

    // handleCart1
    const handleCart1 = (q) => {
        setCart1([...cart1, q]);
    }

    // for total time
    const handleTotalTime = (time) => {
        const newTime = parseInt(totalTime) + parseInt(time);
        setTotalTime(newTime);
    }

    // for total calories
    const handleTotalCalories = (cal) => {
        const ncal = parseFloat(cal);
        const newCal = parseFloat(totalCalories) + ncal;
        setTotalCalories(parseFloat(newCal));
    }

    // for delete from cart
    const handleDelete = (id) => {
        const newCart = cart.filter(pd => pd.recipe_id !== id);
        setCart(newCart);
    }



    return (
        <div className="body py-20 mx-auto">
            <div className="container text-center p-4 mx-auto" id="recipes">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-primary tracking-wide">Our Recipes</h1>
                <p className="mb-5 mt-7 text-sm text-tertiary px-4">Welcome to BB-Food, where we invite you to explore a world of culinary delights through our collection of exquisite recipes. From comforting classics to innovative creations, each recipe is thoughtfully crafted to inspire and delight your taste buds.</p>
            </div>
            <div className="flex mt-6 flex-col md:flex-row text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-3/5 \">

                    {products.map((pd) => (
                        <Product key={pd.recipe_id} handleCart={handleCart} pd={pd}></Product>
                    ))}


                </div>
                <div className="grid grid-cols-1 gap-8 w-full md:w-1/3 mx-auto mt-20 md:mt-0">
                    <div className="card bg-base-100 shadow-xl border-[.5px]">
                        <div className="card-body px-0">
                            <div>
                                <div className="card items-center text-center mb-3">
                                    <h2 className="card-title">Want to cook: <span>{cart.length}</span></h2>
                                </div>
                                <hr className=" w-4/5 mx-auto" />
                                <div className="mb-4">
                                    <div className="flex mx-auto text-center w-[90%] -ml-[2px] px-4 mb-2">
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Name</p>
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Time</p>
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Calories</p>
                                    </div>
                                    <div>
                                        {cart.map((item, i) => (

                                            <div className="bg-[#28282805] p-1" key={i}>
                                                <div className="flex items-center text-sm text-left w-full justify-around p-1">
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">
                                                        {i + 1}</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.recipe_name}</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.preparing_time} minutes</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.calories} calories</p>
                                                    <button onClick={() => {
                                                        handleCart1(item); // First function
                                                        handleTotalTime(item.preparing_time); // Second function
                                                        handleTotalCalories(item.calories); // Third function
                                                        handleDelete(item.recipe_id); // Fourth function
                                                    }} className="btn mt-0 bg-green hover:bg-transparent border-green text-primary hover:text-green hover:border-green rounded-full  transition-all duration-200 text-xs font-firaSans px-3 py-1">Preparing</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>
                            <div className="mt-12">
                                <div className="card items-center text-center mb-3">
                                    <h2 className="card-title">Currently cooking: <span>{cart1.length}</span></h2>
                                </div>
                                <hr className=" w-4/5 mx-auto" />
                                <div className="mb-4">
                                    <div className="flex mx-auto text-center  px-4 mb-2">
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Name</p>
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Time</p>
                                        <p className="mb-2 mt-4 text-xs text-tertiary">Calories</p>
                                    </div>
                                    <div>
                                        {cart1.map((item, i) => (
                                            <div className="bg-[#28282805] p-1" key={i}>
                                                <div className="flex items-center text-sm text-left w-full justify-around p-1">
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">
                                                        {i + 1}</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.recipe_name}</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.preparing_time} minutes</p>
                                                    <p className="font-firaSans mb-2 text-xs text-tertiary p-2">{item.calories} calories</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-2/4"></div>
                                <div className="flex w-3/4 justify-end mr-2 gap-2">
                                    <p className="text-xs text-tertiary font-bold p-1">Total Time= <br /><span>{totalTime}</span> minutes</p>
                                    <p className="text-xs text-tertiary font-bold p-1">Total Calories= <br />
                                        <span>{totalCalories}</span> calories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Body;