import React, { useEffect, useState } from "react";
import SearchProducts from "./SearchProducts";
import AllProducts from "./AllProducts";

const Product = () => {
    const [products, setProducts] = useState([]); //all fetched products
    const [filteredProducts, setFilteredProducts] = useState([]); //products after search
    const [loading, setLoading] = useState(true);

    //fetch data once when component loads
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    //search handler
    const handleSearch = (query) => {
        if (!query) {
            setFilteredProducts(products); // if input is empty, show all
            return;
        }
        const result = products.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(result);
    };

    return (
        <div>
            <SearchProducts onSearch={handleSearch} />
            {loading ? (
                <p>Loading...</p>
            ) : filteredProducts.length > 0 ? (
                <AllProducts productState={filteredProducts} />
            ) : (
                <p style={{ textAlign: "center" }}>No products found ❌</p>
            )}
        </div>
    );
};

export default Product;
