import React from 'react'
import '../scss/Products.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

const Products = (props) => {

  const {addToCart } = props;

  return (
    <div>
      <Container>
        <Row>
          <Col className="book-cart-nav">
            <span> Book List </span> <Link to="/cart">My Cart</Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            {props.bookList.map((productId) => (
              <div className="book" key={productId.id}>
                <img
                  className="book-picture"
                  src={productId.image}
                  alt={productId.name}
                />
                <div>
                  <h4> {productId.name} </h4> <p> Author: {productId.author} </p>
                  <p> Price: &#8378; {productId.price}</p>
                  <button onClick={() => addToCart(productId)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  }
}

export default connect(mapStateToProps, { addToCart })(Products)
