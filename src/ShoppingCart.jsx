import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function ShoppingCart(props) {
    const { product, setProduct, count, setCount } = props;
    const hendleClickPlus = () => {
        setCount(count + 1)
    };
    const hendleClickMinus = () => {
        setCount(count - 1)
    };
    return (
        <div className='bodycart'>
            {product.map((product) => (
                <div className='cart' >
                    <div className='pictureframe' >
                        <img className='img' src={product.imageUrl} />
                    </div>
                    <div className='contentCart'>
                        <div className='name'>
                            <p>{product.name}</p>
                            <p><i class="fa-solid fa-heart"></i></p>
                        </div>

                        <div className=''>
                            <p>{product.heading}</p>
                            <p>
                                {product.des}
                            </p>
                        </div>
                        <div className='price'>
                            <p> {product.price} </p>
                            <p>
                                <button onClick={() => hendleClickPlus(product.id)}> <i class="fa-solid fa-plus"></i> </button> {count} <button onClick={() => hendleClickMinus(product.id)}><i class="fa-solid fa-minus"></i></button>
                            </p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ShoppingCart