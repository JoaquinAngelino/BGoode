// React utilities
import React from "react";
import ReactStars from 'react-stars'; //source: https://www.npmjs.com/package/react-stars
// Styles
import Skeleton from '@mui/material/Skeleton';
import './ReviewListCard.css';

export default function CardReview ({ userName, rating, comment }) {
    return (
        <div className="cardReview">
            <div className="headReview">
                <Skeleton             
                    variant='circular' 
                    animation="wave"
                />
                <div>
                    <h5>{userName}</h5>
                    <ReactStars
                        className="stars"
                        value={rating}
                        edit={false}
                        size={15}
                        color1={'#888'}
                        color2={'#169E85'}
                    />
                </div>
            </div>
            <div className="bodyReview">
                <p>{comment}</p>
            </div>
        </div>
    )
}