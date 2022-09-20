import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions'

import './User.css'



export default function UserDetail() {
    const dispatch = useDispatch();
    const allUsers = useSelector((store) => store.users);
    const { email } = useParams();
    const navigate = useNavigate();
    const thisUser = allUsers.find(e => e.email === email)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [allUsers])

    function handleEdit() {
        navigate(`/profile/admin/usercontrol/userdetail/userEdit/${email}`);
    }

    return (
        <div className='UserEditContainer'>
            <div className="UserEditMargin">
                <h1>User Detail</h1>
            </div>
            <p className="UserEditMargin">Name : {thisUser.username || thisUser.nickname}</p>
            <p className="UserEditMargin">Email : {thisUser.email}</p>
            <p className="UserEditMargin">Blocked : {thisUser.isBLoked ? "true" : "false"}</p>
            <p className="UserEditMargin">Admin : {thisUser.isAdmin ? "true" : "false"}</p>
            <p className="UserEditMargin">Active : {thisUser.isActive ? "true" : "false"}</p>
            <button
                className='submitButton BtnCenter'
                type='button'
                onClick={() => handleEdit()}>
                Edit
            </button>
        </div>)
}
