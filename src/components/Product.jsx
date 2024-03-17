/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Li from "./Li";
import a from "../assets/a.png";
import b from "../assets/b.png";
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ pd, handleCart }) => {

    // for show li
    const allIngredients = pd.ingredients.map((i, index) => (
        <Li key={index} i={i}></Li>
    ));


    // console.log(pd.ingredients);
    return (
        <div className="card bg-base-100 shadow-md border-[.5px] transition-transform duration-300 transform hover:shadow-2xl">
            <figure className="px-4 pt-4 h-60 md:h-44 w-fit p-1 rounded-[40px] mt-3 md:mt-4 transition-transform duration-300 transform hover:scale-[1.03]">
                <img src={pd.recipe_image} alt="Shoes" className="w-fit rounded-xl" />
            </figure>
            <div className="card-body items-start text-left px-5">
                <h2 className="card-title">{pd.recipe_name}</h2>
                <p className="py-2 text-sm text-tertiary font-firaSans">{pd.short_description}</p>
                <hr className="mb-2 w-full" />
                <h3 className="font-bold">Ingredients: {pd.ingredient}</h3>
                <ul className="mb-2">
                    {allIngredients}
                </ul>
                <hr className="mb-2 w-full" />
                <div className="flex justify-between w-full gap-2">
                    <div>
                        <p className="flex items-center text-tertiary text-sm font-firaSans"><img src={a} alt="" /><span className="ml-1">{pd.preparing_time} minutes</span></p>
                    </div>
                    <div>
                        <p className="flex items-center text-tertiary text-sm font-firaSans"><img src={b} alt="" /><span className="ml-1">{pd.calories} calories</span></p>
                    </div>
                </div>
                <div className="card-actions">
                    <button onClick={() => handleCart(pd, toast)} className="btn mt-4 bg-green hover:bg-transparent border-green text-primary hover:text-green hover:border-green rounded-full hover:-translate-y-1 transition-all duration-200">Want to Cook</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;