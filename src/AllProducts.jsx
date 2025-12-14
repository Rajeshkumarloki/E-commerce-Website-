import React from "react";
import "./AllProducts.css";

const AllProducts = ({ productState }) => {
    return (
        <main>
            {productState.map((e, i) => (
                <div key={i}>
                    <img src={e.image} alt={e.title} />
                    <h2>{e.title}</h2>
                    <h3>Price: ₹{e.price}</h3>
                    <h4>Rating: {e.rating.rate}</h4>
                    <button>Add To Cart</button>
                </div>
            ))}
        </main>
    );
};

export default AllProducts;
