// React utilities
import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Styles
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Slider from '@mui/material/Slider';
import './Filters.css';

export default function Filters() {

    // Hooks
    const location = useLocation();
    const navigate = useNavigate();
    const products = useSelector(state => state.instruments);
    const [searchParams, setSearchParams] = useSearchParams();
    const brand = searchParams.get('brand');
    const price = searchParams.get('price');
    const status = searchParams.get('status');
    const color = searchParams.get('color');
    const category = searchParams.get('category');
    // Intruments' propierties
    const brandArrayAll = [];
    const pricesAll = [];
    const colorsArrayAll = [];
    const categoryArrayAll = [];
    products.map(product => {
        brandArrayAll.push(product.brand);
        pricesAll.push(product.price);
        colorsArrayAll.push(product.color);
        product.category.map(category => categoryArrayAll.push(category));
        return null;
    });
    // Repeated results are eliminated from the arrays
    const brandAll = brandArrayAll.filter((item, index) => {
        return brandArrayAll.indexOf(item) === index;
    });
    const colorAll = colorsArrayAll.filter((item, index) => {
        return colorsArrayAll.indexOf(item) === index;
    });
    const categoryAll = categoryArrayAll.filter((item, index) => {
        return categoryArrayAll.indexOf(item) === index;
    });
    // Alphabetize the arrays in alphabetical order
    colorAll.sort();
    brandAll.sort();
    categoryAll.sort();
    // Local state
    const [priceSlide, setPriceSlide] = useState([Math.floor(Math.min(...pricesAll)), Math.ceil(Math.max(...pricesAll))]);
    // Send selected filters
    function handlerSubmit(e) {
        e.target.value ? e.target.name === 'price' ?
            setSearchParams(searchParams.set(e.target.name, `${e.target.value[0]}/${e.target.value[1]}`)) :
            setSearchParams(searchParams.set(e.target.name, e.target.value)) :
            searchParams.delete(e.target.name);
        location.search = `?${searchParams.toString()}`;
        navigate(location);
    }
    // Save changes in the price slider
    function handlerChangePrice(e) {
        e.preventDefault();
        setPriceSlide(e.target.value);
    }
    // Send price filter data
    function handlerRangeSubmit() {
        const prices = {
            target: {}
        };
        prices.target.name = 'price';
        prices.target.value = priceSlide;
        handlerSubmit(prices)
    }

    return (
        brand && price && status && color ? null :
            <div className='filtersContainer'>
                {
                    !brand ? <>
                        <b>Brand: </b>
                        <FormControl className='brandFilter'>
                            <Select name="brand" variant="filled" fullWidth size='small' onChange={(e) => handlerSubmit(e)}>
                                {
                                    brandAll.map((brand, i) => { return (<MenuItem key={i} value={brand}>{brand}</MenuItem>) })
                                }
                            </Select>
                        </FormControl>
                    </> : null
                }
                {
                    !price ? <>
                        <b>Price: </b>
                        <FormControl className='filterPrice'>
                            <Slider
                                min={Math.floor(Math.min(...pricesAll))}
                                max={Math.ceil(Math.max(...pricesAll))}
                                valueLabelDisplay="auto"
                                value={priceSlide}
                                marks={[{ value: Math.floor(Math.min(...pricesAll)), label: `$${priceSlide[0]}` },
                                { value: Math.ceil(Math.max(...pricesAll)), label: `$${priceSlide[1]}` }]}
                                onChange={(e) => handlerChangePrice(e)}
                            />
                            <IconButton onClick={() => handlerRangeSubmit()} aria-label="send">
                                <SendIcon />
                            </IconButton>
                        </FormControl>
                    </> : null
                }
                {
                    !status ? <>
                        <b>Status: </b>
                        <FormControl className='statusFilter'>
                            <Select name="status" variant="filled" fullWidth size='small' onChange={(e) => handlerSubmit(e)}>
                                <MenuItem value="New">New</MenuItem>
                                <MenuItem value="Used">Used</MenuItem>
                            </Select>
                        </FormControl>
                    </> : null
                }
                {
                    !category ? <>
                        <b>Category: </b>
                        <FormControl className='categoryFilter'>
                            <Select name="category" variant="filled" fullWidth size='small' onChange={(e) => handlerSubmit(e)}>
                                {
                                    categoryAll.map((category, i) => { return (<MenuItem key={i} value={category}>{category}</MenuItem>) })
                                }
                            </Select>
                        </FormControl>
                    </> : null
                }
                {
                    !color ? <>
                        <b>Color: </b>
                        <FormControl className='colorFilter'>
                            <Select name="color" variant="filled" fullWidth size='small' onChange={(e) => handlerSubmit(e)}>
                                {
                                    colorAll.map((color, i) => { return (<MenuItem key={i} value={color}>{color}</MenuItem>) })
                                }
                            </Select>
                        </FormControl>
                    </> : null
                }
            </div>
    )
}