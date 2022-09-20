import './Pagination.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Pagination({ postPerPage, totalPosts, paginate}) {
  
  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i)
  }
  
  return (
    <div className='Pagination' >
      <ul>
        {pages.map(page => <li key={page} className='pagItem' onClick={()=>paginate(page)}> {page} </li>)}
      </ul>
    </div>
  )
}



