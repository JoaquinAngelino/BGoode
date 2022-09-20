import { useAuth0 } from '@auth0/auth0-react'

export default function LogOutBtn() {
  const { logout } = useAuth0()

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={() => logout({returnTo: window.location.origin})} type="button">Log out</button>
  )
}