import React from 'react'
import '../scss/Cart.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  )

  return (
    <div>
      <Container>
        <Row>
          <Col className="book-cart-nav">
            <Link to="/">Book List</Link> <span>My Cart</span>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            {props.cart.map((book) => (
              <div className="book">
                <img
                  className="book-picture"
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
            <h3>Total: &#8378;{totalPrice.toFixed(2)}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
