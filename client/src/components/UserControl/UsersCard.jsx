import { Link } from 'react-router-dom';
import './User.css'

export default function UsersCard({ username, email }) {

    return (
        <div className="card UserProductCard UserProfileCard UserEditContainer"  >
            <Link to={`/profile/admin/usercontrol/userdetail/${email}`}>
                <ul>
                    <li className='UserCardLi'>Name : {username}</li>
                    <li className='UserCardLi'>Email : {email}</li>
                </ul>
            </Link>
        </div>
    )
}