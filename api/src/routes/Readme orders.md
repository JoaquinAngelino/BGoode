# Repaso enpoints

## GET ##

### url/orders ###
```todas las ordenes```

cada una con los productos, compradores y vendedores


### url/orders/user/:userid ###
```todas``` las ordenes de ```un usuario```


### url/orders/:id ###
```una sola``` orden en especifico

## POST ##

### url/orders ###
```Crea una ``` orden nueva.

***body:*** 

    {
        "user" : "_id de comprador",
        "products": [{
                        "products": "_id de producto",
                        "quantity": 1
                    }],
        "userseller": "_id de comprador",
        "payment": "mas adelante"
    }


## DELETE ##

### url/orders/users/:id ###
Borra solo la ``` referencia de una ``` orden ``` de un ``` sólo usuario.

### url/orders/:id ###
Borra la orden ``` por completo ```

## UPDATE ##

### url/orders/:id ###
```Actualiza una ``` orden. 

Para actualizar
- producto
- status

