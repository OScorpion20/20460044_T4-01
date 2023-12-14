# Endpoint: `POST /usuarios`

Permite añadir un nuevo registro en la tabla de usuarios
## Ejemplo de Solicitud
```http
POST /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
     {
        "id_usuario": 7,
        "nombre_usuario": "Usuario1",
        "correo_electronico": "usuario1@email.com",
        "contrasena": "contrasena1",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    }
    {
    "status": 201,
    "message": "Created"
}
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

- Asegurate de escribir correctamente la ruta
