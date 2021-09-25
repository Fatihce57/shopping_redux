import React from 'react'
import '../scss/Products.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cartAction'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'

const Products = (props) => {
  // console.log("Cart:", props.cart)
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
            {props.bookList.map((book) => (
              <div className="book" key={book.id}>
                <img
                  className="book-picture"
                  src={book.image}
                  alt={book.name}
                />
                <div>
                  <h4> {book.name} </h4> <p> Author: {book.author} </p>
                  <p> Price: &#8378; {book.price}</p>
                  <button onClick={() => props.addToCart(book)}>
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
