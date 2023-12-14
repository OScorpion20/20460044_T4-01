# Endpoint: `GET /productos/{id}`

Permite obtener información sobre los productos relacionados a un tema mediante su
identificador único.


## Ejemplo de Solicitud
```http
GET /productos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_producto": 1,
        "nombre_producto": "Camiseta Casual",
        "descripcion": "Camiseta de algodón para uso diario",
        "precio": "19.99",
        "categoria": "Ropa",
        "talla": "M",
        "marca": "MarcaA",
        "imagen_url": "url_imagen1.jpg",
        "disponible": 1
    },
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
  }
  ```

- Código 400 Bad request:
  ```json
  {
    "errno": 400,
    "error": "bad_request",
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información correcta
