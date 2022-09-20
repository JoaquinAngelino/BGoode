// React Utilities
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from 'react-stars'; //source: https://www.npmjs.com/package/react-stars
// Components 
import CardReview from "../ReviewListCard/ReviewListCard";
// Actions
import { getReviewsByProduct } from "../../redux/actions";
// Style
import './ReviewList.css';

export default function ReviewList ({ productId }) {

    // Hooks
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.productReviewList);
    const [rating, setRating] = useState(0); 

    useEffect(() => {
        dispatch(getReviewsByProduct(productId));
    }, [dispatch, productId])

    useEffect(() => {
        if( reviews.length ) {
            const allRating = reviews.map(review => review.rating);
            const sumRating = (allRating.reduce((prev, curr) => curr += prev));
            const avrRating = sumRating / allRating.length;
            setRating(avrRating);
        }
    }, [reviews]);

    return (
        <div className="reviewListContainer">
            {
                reviews.length ? 
                <>
                    <div className="titleRating">
                        <h2>Rating</h2>
                        <ReactStars
                            className="stars"
                            value={rating}
                            edit={false}
                            size={20}
                            color1={'#888'}
                            color2={'#169E85'}
                        />
                        <p><span>{rating}</span> ({reviews.length} reviews)</p>
                    </div>

                    <div className="contentReviews">
                        {
                            reviews.map(review => {
                                return (
                                    <CardReview 
                                        userName = {review.userName}
                                        rating = {review.rating}
                                        comment = {review.comment}
                                    />
                                )
                            })
                        }
                    </div>
                </> 
                : <h4>There are no comments yet, be the first to comment!</h4>
            }
        </div>
    )
}