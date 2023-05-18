import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';

function Cart(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { count, setCount } = props;
    console.log("props ===> ", props);
    return (
        <div className='CartDetails'>
            <Button variant="primary" onClick={handleShow}>
                <Button variant="primary">
                    <i class="fa-solid fa-cart-shopping"></i> <Badge bg="secondary">{count}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div className='cartProduct' >
                            <img src="" />

                            <p>Name</p>

                            <p>
                                <button> <i class="fa-solid fa-plus"></i> </button> {count} <button ><i class="fa-solid fa-minus"></i></button>
                            </p>

                            <p>price</p>

                            <p><i class="fa-solid fa-trash"></i></p>
                        </div>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart