# Endpoint: `GET /usuarios/{id}`

Permite obtener información sobre los usuarios relacionados a un tema mediante su
identificador único.


## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
   {
        "id_usuario": 1,
        "nombre_usuario": "Usuario1",
        "correo_electronico": "usuario1@email.com",
        "contrasena": "contrasena1",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
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
