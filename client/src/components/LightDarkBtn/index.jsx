import './LightDarkBtn.css'
import { BsMoonFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

export default function LightDarktn() {

  const handleClick = () => {
    const btnSwitch = document.getElementById('switch');
    document.body.classList.toggle('Dark');
    btnSwitch.classList.toggle('pressed');
  }

  return (
    <button className="switch" id="switch" onClick={handleClick}>
      <FaSun className='switchIcon' />
      <BsMoonFill className='switchIcon' />
    </button>
  )
}