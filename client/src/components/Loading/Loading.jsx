//React utilities
import React from "react";
// Styles
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

export default function Loading() {
  return (
    <div className="containerSpinner">
      <Spinner animation="grow" />
    </div>
  )
}