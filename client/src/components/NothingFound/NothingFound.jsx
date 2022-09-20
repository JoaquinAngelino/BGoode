import React from "react";
import { Link } from "react-router-dom";
// Styles
import Card from 'react-bootstrap/Card';
import { MdOutlineSearchOff } from "react-icons/md";
import './NothingFound.css';

export default function NothingFound () {
    return (
        <div className="containerNothingFound">
            <Card className="cardNothingFound">
                <MdOutlineSearchOff className="imgNothinFound"/>
                <Card.Body className="bodyNothingFound">
                    <Card.Title className="titleNothingFound">There are no publications that match your search</Card.Title>
                    <ul className="tryThis">
                        <li>Check the spelling of the words.</li>
                        <li>Use more generic words or fewer words.</li>
                        <li>Go <Link className="linkToHome" to="/home">Home.</Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    )
}