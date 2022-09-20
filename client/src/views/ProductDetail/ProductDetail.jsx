/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
// React utilities
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Components
import {addToFav, addToCart} from '../../components/Card/favAndCart';
import Loading from "../../components/Loading/Loading";
import ReviewList from "../../components/ReviewList/ReviewList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
// Auth0
import { useAuth0 } from '@auth0/auth0-react';
// Styles
import Carousel from "react-bootstrap/Carousel";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ProductDetail.css';

export default function ProductDetail({handleAdded, handleNotAdded}) {

    // Auth0
    const { isAuthenticated } = useAuth0()

    // Hooks
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const instrumentItem = useSelector((state) => state.retrievedInstrument);
    const { name, price, rating, image, brand, color } = instrumentItem ? instrumentItem : {};

    const [quantity, setQuantity] = useState();

    useEffect(() => {
        if (!instrumentItem || (id !== instrumentItem._id && !instrumentItem.error)) {
            dispatch(getProductById(id));
        }
    }, [dispatch, instrumentItem, id])

    // Go to edit the product
    function handleEdit() {
        navigate(`/edit/${id}`);
    }

    // Alert Logic 
    const [open, setOpen] = React.useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    // const updateQuantity = (id, quantity) => {
    //     let updatedList = localStoreList.map(item =>
    //         item.id !== id ? item : {...item, quantity}
    //     );
    //     localStorage.setItem('cartList', JSON.stringify(updatedList));
    // }

    function handlerQuantity (e) {
        addToCart(id, name, price, rating, image, brand, color, handleAdded, handleNotAdded)
        const localStoreList = JSON.parse(localStorage.getItem('cartList'));
        const localStoreItem = localStoreList.find(item => item.id === id);
        localStoreItem.quantity = e.target.value
        localStorage.setItem("cartList",JSON.stringify(localStoreList))
        setQuantity(e.target.value)
        // updateQuantity(id, e.target.value)
    }

    return (
        (!instrumentItem || (id !== instrumentItem._id && !instrumentItem.error)) ? <Loading /> :
        <div className="containerDetails">
            <div className="principalData">
                <Carousel variant="dark" >
                    {
                        instrumentItem.image.map((imageItem, index) => {
                            return(
                                <Carousel.Item interval={3000} key={index}>
                                    <img className="imageDetail"
                                        src={imageItem}
                                        alt=""
                                    />
                                </Carousel.Item>
                            ) 
                        })
                    }
                </Carousel>

                <div className="productData">
                    <h3>{instrumentItem.name}</h3>
                    <p>{instrumentItem.description}</p>
                    <ul>
                        <div className="listProductDetail">
                            <li><b>Brand:</b> {instrumentItem.brand}</li>
                            <li><b>Stock:</b> {instrumentItem.stock}</li>
                            <li><b>Condition:</b> {instrumentItem.status}</li>
                        </div>
                        <div className="listProductDetail">
                            <li><b>Color:</b> {instrumentItem.color[0].toUpperCase() + instrumentItem.color.substring(1)}</li>
                            <li><b>Category:</b> {instrumentItem.category.join(', ')}</li>
                            <li><b>Location:</b> {instrumentItem.location}</li>
                        </div>
                    </ul>
                </div>

                <div className="productsOptions">
                    <div className="share-favorite">
                        <CopyToClipboard text={window.location.href}>
                            <p><ShareOutlinedIcon onClick={handleClick}/> Share</p>
                        </CopyToClipboard>
                        <p><FavoriteBorderOutlinedIcon onClick={() => addToFav(id, name, price, rating, image, brand, handleAdded, handleNotAdded)}/> Favorite</p>
                        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Link copied to clipboard 
                                </Alert>
                        </Snackbar>
                    </div>
                    
                    <div className="detailPayment">
                        <h5>${instrumentItem.price}</h5>
                        <Form className="formDetailProduct">
                            <Form.Group className="selectInput">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Select size="sm" value={quantity} onChange={(e) => handlerQuantity(e)}>
                                    {
                                        [...Array(instrumentItem.stock)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                                    }
                                </Form.Select>
                            </Form.Group>
                            <div className="total">
                                Total: <span>${instrumentItem.price * quantity}</span>
                            </div>
                            <Link to='/cart'>
                                <Button variant="contained">Buy Now</Button>
                            </Link>
                            <Button onClick={() => addToCart(id, name, price, rating, image, brand, color, handleAdded, handleNotAdded)} variant="outlined" startIcon={<ShoppingCartOutlinedIcon />}>
                                Add to cart
                            </Button>
                        </Form>
                    </div>

                    {
                        isAuthenticated ? 
                        <button className='editButton'
                            type='button'
                            onClick={() => handleEdit()}
                        >Edit
                        </button>
                        : null 
                    }
                </div>
            </div>
            <Divider />
            <ReviewList productId={id}/>
            <ReviewForm productId={id}/>
        </div>
    );
}