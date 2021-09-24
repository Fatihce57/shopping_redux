import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = (props) => {
    const totalPrice = props.cart.reduce((total, item) => (total += item.price), 0);

    return (
        <div>
            <h2>
                <Link to="/">Book List</Link> <span>My Cart</span>
            </h2>

            <h3>Total: &#8378;{totalPrice.toFixed(2)}</h3>

            {props.cart.map(book => (
                <div className="book">
                    <img
                        src={book.image}
                        alt={book.name}
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Author: {book.author}</p>
                        <p>Price: &#8378;{book.price}</p>
                        <button>-</button>
                        <button>Remove</button>
                        <button>+</button>
                    </div>
                </div>
            ))}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
