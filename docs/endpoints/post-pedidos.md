# Endpoint: `POST /pedidos`

Permite añadir un nuevo registro en la tabla de pedidos
## Ejemplo de Solicitud
```http
POST /pedidos
```

## Respuesta Exitosa (Código 200 OK)
```json

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
