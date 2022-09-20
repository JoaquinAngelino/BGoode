import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions'
import UsersCard from './UsersCard';


export default function UserControl() {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <>
            <div>
                <h1 className='UserControlTitle'>Users List</h1>
            </div>
            <div>
                {users.map(u => {
                    return (<UsersCard key={u._id} username={u && u.nickname} email={u && u.email} />)
                })}
            </div>
        </>
    )

}

