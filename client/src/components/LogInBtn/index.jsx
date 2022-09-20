import { useAuth0 } from '@auth0/auth0-react'

export default function LogInBtn() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button className="btn btn-outline-success me-2" onClick={() => loginWithRedirect()} type="button">Log in</button>
  )
}