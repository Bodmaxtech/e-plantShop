import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; 
import CartItem from './CartItem'; 

function ProductList() {
    const [addedToCart, setAddedToCart] = useState({});
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Indoor Plants",
            plants: [
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2017/08/30/01/30/peace-lily-2691917_1280.jpg",
                    description: "Purifies air and adds a touch of green to your home.",
                    cost: "$25"
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Tolerant of neglect and low light.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Very easy to grow and care for.",
                    cost: "$12"
                },
            ]
        },
        {
            category: "Succulents",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Tolerates low light and requires minimal water.",
                    cost: "$14"
                },
                {
                    name: "Cactus",
                    image: "https://cdn.pixabay.com/photo/2015/06/04/17/18/cactus-794520_1280.jpg",
                    description: "Thrives on neglect and requires little water.",
                    cost: "$10"
                }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        // Dispatch add item action to redux
        dispatch(addItem(product));
        // Set addedToCart for individual item
        setAddedToCart(prevState => ({
            ...prevState,
            [product.name]: true
        }));
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(prevState => !prevState); // Toggle cart visibility
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        // Add functionality to navigate to plants section if needed
    };

    // Navbar styles
    const styleObj = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyleType: 'none',
    };

    const styleA = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    };

    return (
        <div>
            {/* Navbar Section */}
            <div className="navbar" style={styleObj}>
                <div className="navbar-container">
                    {/* Logo Section */}
                    <div className="luxury">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt="Paradise Nursery Logo"
                            className="brand-image"
                            style={{ width: '68px', height: '68px', objectFit: 'cover' }} // Thumbnail size
                        />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div style={styleObjUl}>
                    {/* Plants Link */}
                    <div>
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
                            Plants
                        </a>
                    </div>

                    {/* Cart Link */}
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className="cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    id="IconChangeColor"
                                    height="68"
                                    width="68"
                                >
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path
                                        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                        fill="none"
                                        stroke="#faf9f9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        id="mainIconPathAttribute"
                                    ></path>
                                </svg>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {/* Plants Collection Section */}
            <div className="product-list">
                <h1>Our Plants Collection</h1>
                {plantsArray.map((category, index) => (
                    <div key={index} className="category">
                        <h2>{category.category}</h2>
                        <div className="products">
                            {category.plants.map((plant, idx) => (
                                <div key={idx} className="product">
                                    <img src={plant.image} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                    <p>{plant.cost}</p>
                                    <button
                                        onClick={() => handleAddToCart(plant)}
                                        className={addedToCart[plant.name] ? 'added' : ''}
                                    >
                                        {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Section */}
            {showCart && <CartItem />}
        </div>
    );
}

export default ProductList;
