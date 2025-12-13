// import React from 'react'

// const SearchProducts = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default SearchProducts;

import React from "react";

const SearchProducts = ({ onSearch }) => {
    return (
        <section style={{ textAlign: "center", margin: "1rem 0" }}>
            <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => onSearch(e.target.value)}
                style={{
                    width: "60%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "1px solid gray",
                }}
            />
        </section>
    );
};

export default SearchProducts;
