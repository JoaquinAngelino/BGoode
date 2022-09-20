import {Link} from 'react-router-dom'
import './NotFound.css'
export default function NotFound(){

  return (
    <div className="notFoundDiv">
      <h1 className="notFoundH1">404, Page not found</h1>
      <Link className="notFoundLink" to="/home">back to <span className="notFoundSpan">/home</span></Link>
    </div>
  )
}