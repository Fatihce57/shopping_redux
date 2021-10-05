import React from 'react'
import '../scss/Cart.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeCart } from '../redux/actions/cartAction'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

const Cart = (props) => {

  const { removeCart } = props;

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
          <h3>Total: &#8378;{totalPrice.toFixed(2)}</h3>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            {props.cart.map((productId) => (
              <div className="book" key={productId.id}>
                <img
                  className="book-picture"
                  src={productId.image}
                  alt={productId.name}
                />
                <div>
                  <h4>{productId.name}</h4>
                  <p>Author: {productId.author}</p>
                  <p>Price: &#8378;{productId.price}</p>
                  <button>-</button>
                  <button onClick={() => removeCart(productId)} >Remove</button>
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

export default connect(mapStateToProps, { removeCart })(Cart)
