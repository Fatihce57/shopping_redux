import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'

const Products = (props) => {
    // console.log("Cart:", props.cart)
    return (
        <div>
            <h2>
                <span> Book List </span>
                <Link to="/cart">
                    My Cart
                </Link>
            </h2>
            {props.bookList.map((book) => (
                <div className="book" key={book.id}>
                    <img src={book.image} alt={book.name} />
                    <div>
                        <h4> {book.name} </h4> <p> Author: {book.author} </p>
                        <p> Price: &#8378; {book.price}</p>
                        <button onClick={() => props.addToCart(book)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bookList: state.bookList,
        cart: state.cart
    };
};

export default connect(mapStateToProps, { addToCart })(Products);
