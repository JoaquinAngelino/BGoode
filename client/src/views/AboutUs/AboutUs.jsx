import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './AboutUs.css'

export default function AboutUs() {

  return (
    <div className='containerAboutUs'>
      <h1 className='PageTitle'>OUR STAFF</h1>
      <hr className='dividerAboutUs' />
      <span className='textAboutUs'>We are a team of web developers that wants to make your dreams come true.</span>
      <div className="TeamDiv">
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/100927307?v=4" alt="Mariana Stocco" />
          <p>Mariana Stocco</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MarianaStocco">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mariana-stocco-36525726/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/96893105?v=4" alt="Joaquín Angelino Corona" />
          <p>Joaquín Angelino Corona</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/JoaquinAngelino">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joaquin-angelino-corona/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/98348984?v=4" alt="Martín Araujo" />
          <p>Martín Araujo</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MNAHEAVY">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/martin-araujo-3ab8a7189/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://media-exp1.licdn.com/dms/image/C4D03AQHtmr5mxp93uw/profile-displayphoto-shrink_800_800/0/1662472016195?e=1668038400&v=beta&t=7R4-gQiQ2dG-mD7g-segPgBE8GLb_vPsbC2mlMtQuNU" alt="Roger miño" />
          <p>Roger Miño</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/roger077">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/roger-mi%C3%B1o-a36813219/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/101676235?v=4" alt="" />
          <p>Kevin David Gutiérrez</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/David-G18">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-david-%C3%A1lvarez-guti%C3%A9rrez-b4ba13241/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://media-exp1.licdn.com/dms/image/C4E03AQFB5rm-P6lXyA/profile-displayphoto-shrink_200_200/0/1611165093546?e=1666828800&v=beta&t=kpk6wJc-x5XsAVBOu-CNOHX1BKEXSXFaWxo5kzMG_NU" alt="Veronica Valdivia" />
          <p>Veronica Valdivia</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/valdiviavv">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/veronica-vazquez-valdivia-249238128">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/40707996?v=4" alt="Pablo Spector" />
          <p>Pablo Spector</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/PabloElectricista">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pablo-spector-69b814229/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}