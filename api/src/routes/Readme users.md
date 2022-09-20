## guia para users

## login: ##

### ```POST``` url/users/login ##

Al logearse se recibe ```un token```


<p align="left">
  <img width="500" src="./loginuser.png" />
</p>


Para tener acceso a las rutas protegidas, ```ese token``` debe usarse en el ***Header***



<p align="left">
  <img width="500" src="./uso del token.png" />
</p>


## agregar/crear usuario: ##

### ```POST``` url/users ##

Para crear un usuario el ***body*** debe incluir lo  siguiente:

```
{
    "username": "user name",    
    "email": "user@email",
    "password": "password",
    "isAdmin": true,  (u omitir este campo)
    "userdata":
        {
            "firstame": "user firstame",
            "lastname": "user lastname",
            "phone": numero 
            "cuil":  numero
            "address": object { calle, numero, piso, departamento}
            "postal": numero
            "country": objeto { pais, provincia, localidad }
        }
}
```