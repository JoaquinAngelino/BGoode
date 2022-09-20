import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from 'react'
import './CreateProduct.css'
import { Alert, AlertTitle, Snackbar } from "@mui/material"
import axios from "axios"

export default function CreateProduct() {
    
    const { user, isAuthenticated } = useAuth0();
    const [error, setError] = useState({})
    const [inputForm, setInputForm] = useState({
        name: '',
        description: '',
        image: [],
        category: [],
        color: 'Yellow',
        price: 0,
        stock: 0,
        brand: '',
        status: 'New',
    })
    //-------------------------
    //-------------------------
    const [warning, setWarning] = useState(true);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setWarning(false);
        setSuccess(false);
        setFail(false);
    };
    useEffect(() => {
        setWarning(!isAuthenticated)
    }, [isAuthenticated])
    //-------------------------
    //-------------------------
    function getUser() {
        return {
            email: user.email,
        }
    }
    
    
    function validate(input) {
        
        let error = {}
        if (input.name.length >= 0 && !input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
            error.name = 'Only letters and no spaces are allowed at the end!'
        } else error.name = null
        
        if (input.category && input.category.length === 0) {
            error.category = 'You have to choose at least one category'
        } else error.category = null
        
        if (!input.color) {
            error.color = 'Must declare a color'
        } else error.color = null
        
        if (input.price > 10000 || input.price < 0) {
            error.price = 'It has to be between 0 and 10000 dollars'
        } else error.price = null
        
        if (input.stock > 30 || input.stock < 0) {
            error.stock = 'It has to be between 0 and 30'
        } else error.stock = null
        
        if (input.brand.length >= 0 && !input.brand.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
            error.brand = 'Only letters and no spaces are allowed at the end!'
        } else error.brand = null
        return error
    }
    
    
    function handleChange(e) {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...inputForm,
            [e.target.name]: e.target.value
        }))
    }
    
    function handleSelect(e) {
        setInputForm({
            ...inputForm,
            category: [...inputForm.category, e.target.value]
        })
        setError(validate({
            ...inputForm,
            category: [...inputForm.category, e.target.value]
        }))
    }
    
    function handleSelectC(e) {
        setInputForm({
            ...inputForm,
            color: e.target.value
        })
        setError(validate({
            ...inputForm,
            color: e.target.value
        }))
    }
    
    function handleSelectS(e) {
        setInputForm({
            ...inputForm,
            status: e.target.value
        })
        setError(validate({
            ...inputForm,
            status: e.target.value
        }))
    }
    
    console.log(inputForm)
    
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "vmbr1os6");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/deqxuoyrc/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        const aux = file.secure_url;
        setInputForm({
            ...inputForm,
            image: aux,
        });
        console.log("cloudinary")
    }

    const postProduct = async () => {
        return await axios.post('/products', { ...getUser(), ...inputForm })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error.name === null && error.category === null && error.color === null &&
            error.price === null && error.stock === null && error.brand === null) {
            if (isAuthenticated) {
                const response = await postProduct()
                 response.status === 201 ? setSuccess(true) :  setFail(true)
                setInputForm({
                    name: '',
                    description: '',
                    image: [],
                    category: [],
                    color: '',
                    price: 0,
                    stock: 0,
                    brand: '',
                    status: '',
                })
                return
            }
            setWarning(true)
        } else {
            setFail(true)
        }
    }


    return (
        <div className="bgImg">
            <Snackbar elevation={6} open={warning} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="error" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Warning</strong></AlertTitle>
                    <strong>must be loged to submit a product</strong>
                </Alert>
            </Snackbar>
            <Snackbar elevation={6} autoHideDuration={1500} open={success} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="success" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Success</strong></AlertTitle>
                    <strong>You've post a product</strong>
                </Alert>
            </Snackbar>
            <Snackbar elevation={6} autoHideDuration={1500} open={fail} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Fail</strong></AlertTitle>
                    <strong>Some fields may be wrong</strong>
                </Alert>
            </Snackbar>
            <div id='container-create'>
                <div id='cont-title-form'>
                    <h1>Post your sale!</h1>
                </div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div id='form-cont-left'>
                        <div id='input-name' className='form-inputs'>
                            <label>* Name:</label>
                            <input
                                type='text'
                                value={inputForm.name}
                                name='name'
                                onChange={(e) => { handleChange(e) }} />
                            {error.name && (
                                <p>{error.name}</p>)}
                        </div>
                        <div id='input-dsc' className='form-inputs'>
                            <label>Description:</label>
                            <input
                                type='text'
                                value={inputForm.description}
                                name='description'
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div id='input-name' className='form-inputs'>
                            <label>*Category:</label>
                            <select onChange={(e) => { handleSelect(e) }} placeholder="-Select at least one-" >
                                <option value="default"> -Select one</option>
                                <option value="Wind"> Wind </option>
                                <option value="Electric"> Electric </option>
                                <option value="Percussion"> Percussion </option>
                                <option value="String"> String </option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <label>*Image:</label>
                                <input
                                    type='file'
                                    id='file'
                                    name='img'
                                    onChange={uploadImage}
                                />
                            </div>
                            <br />
                        </div>
                        <div id='input-name' className='form-inputs'>
                            <label>Color:</label>
                            <select value="Yellow" onChange={(e) => { handleSelectC(e) }}>
                                <option value="Yellow "> Yellow </option>
                                <option value="Green"> Green </option>
                                <option value="Purple"> Purple </option>
                                <option value="Brown"> Brown </option>
                                <option value="Orange"> Orange </option>
                                <option value="Lightblue"> Lightblue </option>
                                <option value="Pink"> Pink </option>
                                <option value="Gray"> Gray </option>
                                <option value="White"> White </option>
                                <option value="Black"> Black </option>
                                <option value="Other"> Other </option>
                                <option value="Art Graph"> Art Graph </option>
                            </select>
                        </div>
                        <div id='input-name' className='form-inputs'>
                            <label>Price:</label>
                            <input
                                type='text'
                                value={inputForm.price}
                                name='price'
                                onChange={(e) => { handleChange(e) }} />
                            {error.price && (
                                <p>{error.price}</p>
                            )}
                        </div>
                        <div id='input-stk' className='form-inputs'>
                            <label>*Stock:</label>
                            <input
                                type='number'
                                value={inputForm.stock}
                                name='stock'
                                onChange={(e) => { handleChange(e) }} />
                            {error.stock && (
                                <p>{error.stock}</p>
                            )}
                        </div>
                        <div id='input-brn' className='form-inputs'>
                            <label >Brand:</label>
                            <input
                                type='text'
                                value={inputForm.brand}
                                name='brand'
                                onChange={(e) => { handleChange(e) }} />
                            {error.brand && (
                                <p>{error.brand}</p>
                            )}
                        </div>
                        <div id='input-name' className='form-inputs'>
                            <label>Status:</label>
                            <select onChange={(e) => { handleSelectS(e) }} placeholder="-Select at least one-" >
                                <option value="New"> New </option>
                                <option value="Used"> Used </option>
                            </select>
                        </div>
                        <div id='cont-btn-submit'>
                            <button className="btn btn-secondary">Sell Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
