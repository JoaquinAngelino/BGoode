import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { putUser, getUserByEmail } from '../../redux/actions'
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loading/Loading';
import './UserProf.css'


const UserEditData = () => {
  const paises = [
    'Afganistán',
    'Albania',
    'Alemania',
    'Andorra',
    'Angola',
    'Antigua y Barbuda',
    'Arabia Saudita',
    'Argelia',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaiyán',
    'Bahamas',
    'Bangladés',
    'Barbados',
    'Baréin',
    'Bélgica',
    'Belice',
    'Benín',
    'Bielorrusia',
    'Birmania',
    'Bolivia',
    'Bosnia y Herzegovina',
    'Botsuana',
    'Brasil',
    'Brunéi',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Bután',
    'Cabo Verde',
    'Camboya',
    'Camerún',
    'Canadá',
    'Catar',
    'Chad',
    'Chile',
    'China',
    'Chipre',
    'Ciudad del Vaticano',
    'Colombia',
    'Comoras',
    'Corea del Norte',
    'Corea del Sur',
    'Costa de Marfil',
    'Costa Rica',
    'Croacia',
    'Cuba',
    'Dinamarca',
    'Dominica',
    'Ecuador',
    'Egipto',
    'El Salvador',
    'Emiratos Árabes Unidos',
    'Eritrea',
    'Eslovaquia',
    'Eslovenia',
    'España',
    'Estados Unidos',
    'Estonia',
    'Etiopía',
    'Filipinas',
    'Finlandia',
    'Fiyi',
    'Francia',
    'Gabón',
    'Gambia',
    'Georgia',
    'Ghana',
    'Granada',
    'Grecia',
    'Guatemala',
    'Guyana',
    'Guinea',
    'Guinea ecuatorial',
    'Guinea-Bisáu',
    'Haití',
    'Honduras',
    'Hungría',
    'India',
    'Indonesia',
    'Irak',
    'Irán',
    'Irlanda',
    'Islandia',
    'Islas Marshall',
    'Islas Salomón',
    'Israel',
    'Italia',
    'Jamaica',
    'Japón',
    'Jordania',
    'Kazajistán',
    'Kenia',
    'Kirguistán',
    'Kiribati',
    'Kuwait',
    'Laos',
    'Lesoto',
    'Letonia',
    'Líbano',
    'Liberia',
    'Libia',
    'Liechtenstein',
    'Lituania',
    'Luxemburgo',
    'Madagascar',
    'Malasia',
    'Malaui',
    'Maldivas',
    'Malí',
    'Malta',
    'Marruecos',
    'Mauricio',
    'Mauritania',
    'México',
    'Micronesia',
    'Moldavia',
    'Mónaco',
    'Mongolia',
    'Montenegro',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nepal',
    'Nicaragua',
    'Níger',
    'Nigeria',
    'Noruega',
    'Nueva Zelanda',
    'Omán',
    'Países Bajos',
    'Pakistán',
    'Palaos',
    'Palestina',
    'Panamá',
    'Papúa Nueva Guinea',
    'Paraguay',
    'Perú',
    'Polonia',
    'Portugal',
    'Reino Unido',
    'República Centroafricana',
    'República Checa',
    'República de Macedonia',
    'República del Congo',
    'República Democrática del Congo',
    'República Dominicana',
    'República Sudafricana',
    'Ruanda',
    'Rumanía',
    'Rusia',
    'Samoa',
    'San Cristóbal y Nieves',
    'San Marino',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Santo Tomé y Príncipe',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leona',
    'Singapur',
    'Siria',
    'Somalia',
    'Sri Lanka',
    'Suazilandia',
    'Sudán',
    'Sudán del Sur',
    'Suecia',
    'Suiza',
    'Surinam',
    'Tailandia',
    'Tanzania',
    'Tayikistán',
    'Timor Oriental',
    'Togo',
    'Tonga',
    'Trinidad y Tobago',
    'Túnez',
    'Turkmenistán',
    'Turquía',
    'Tuvalu',
    'Ucrania',
    'Uganda',
    'Uruguay',
    'Uzbekistán',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Yibuti',
    'Zambia',
    'Zimbabue',
  ]
  const { isAuthenticated, isLoading, user } = useAuth0()
  const userDetail = useSelector((state) => state.usersEmail)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [error, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    country: '',
    cuil: '',
    phone: '',
    address: '',
    postal: '',
  })
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserByEmail(user.email))
    }
  }, [isAuthenticated])

  const [notEdited, setNotEdited] = useState(false);
  const [Edited, setEdited] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotEdited(false);
    setEdited(false);
  };

  const handleNotEdited = () => {
    setNotEdited(true)
  }
  const handleEdited = () => {
    setEdited(true)
  }


  // useEffect(() => {
  //   setInput({
  //     ...input,
  //     name: userDetail.username,
  //     lastname: userDetail.userdata.lastname,
  //     country: userDetail.userdata.country,
  //     cuil: userDetail.userdata.cuil,
  //     phone: userDetail.userdata.phone,
  //     address: userDetail.userdata.address,
  //     postal: userDetail.userdata.postal,
  //   })
  // }, [])

  const validate = (input) => {
    const error = {}
    if (input.name && !input.name.match(/^[a-zA-Z ]*$/g)) {
      error.name = 'only letters*'
    }
    if (input.lastname && !input.lastname.match(/^[a-zA-Z ]*$/g)) {
      error.lastname = 'only letters*'
    }
    if (input.cuil && !input.cuil.match(/^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/)) {
      error.cuil = 'Must be a valid ID number*'
    }
    if (
      input.phone && !input.phone.match(/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/)
    ) {
      error.phone = 'Must be a valid phone number*'
    }
    if (!input.address.match(/^[A-Za-z0-9\s]+$/g) && input.address) {
      error.address = 'Symbols are not allowed*'
    }
    if (input.postal && !input.postal.match(/^(\d{4})$/g)) {
      error.postal = 'Must be a valid ZIP Code*'
    }

    return error
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(error).length !== 0) {
      handleNotEdited()
      return
    } else {
      const email = userDetail.email
      dispatch(putUser(email, input))
      handleEdited()
      dispatch(getUserByEmail(email))
    }
  }


  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <form className="FormDiv" onSubmit={(e) => handleSubmit(e)}>
        <legend className="FormTextArea">Personal Data</legend>
        <div>
          <label className="FormLabel">Country:</label>
          <select name='country' onChange={(e) => handleChange(e)}>
            <option value=''>Select</option>
            {paises.map((e) => {
              return (<option key={e} value={e}>{e}</option>)
            })}
          </select>
        </div>
        <div>
          <label className="FormLabel">Identification Number: <span className="error"> {error.cuil ? error.cuil : ""}</span></label>
          <input type='text' name='cuil' onChange={(e) => handleChange(e)} value={input.cuil} />
        </div>
        <div>
          <label className="FormLabel">Birthday: <span className="error"> {error.birthday ? error.birthday : ""}</span> </label>
          <input type='text' name='birthday' onChange={(e) => handleChange(e)} value={input.birthday} />
        </div>
        <div>
          <label className="FormLabel">Phone: <span className="error"> {error.phone ? error.phone : ""}</span> </label>
          <input type='text' name='phone' onChange={(e) => handleChange(e)} value={input.phone} />
        </div>
        <div>
          <label className="FormLabel">City: <span className="error"> {error.city ? error.city : ""}</span> </label>
          <input type='number' name='city' onChange={(e) => handleChange(e)} value={input.city} />
        </div>
        <div>
          <label className="FormLabel">Address: <span className="error"> {error.phone ? error.phone : ""}</span> </label>
          <input type='text' name='address' onChange={(e) => handleChange(e)} value={input.address} />
        </div>
        <div>
          <label className="FormLabel">ZIP Code: <span className="error"> {error.postal ? error.postal : ""}</span> </label>
          <input type='number' name='postal' onChange={(e) => handleChange(e)} value={input.postal} />
        </div>
        <button className="btn btn-outline-success me-2">Update</button>
      </form>
      <Snackbar open={notEdited} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={() => handleClose()} severity="warning" sx={{ width: '100%' }}>
          <AlertTitle>Fail</AlertTitle>
          <strong>Some fields may be wrong</strong>
        </Alert>
      </Snackbar>
      <Snackbar open={Edited} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={() => handleClose()} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Edited</AlertTitle>
          <strong>Edited successfully</strong>
        </Alert>
      </Snackbar>
    </>
  )
}

export default UserEditData
