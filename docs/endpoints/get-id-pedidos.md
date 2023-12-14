# Endpoint: `GET /pedidos/{id}`

Permite obtener información sobre los pedidos relacionados a un tema mediante su
identificador único.


## Ejemplo de Solicitud
```http
GET /pedidos/2
```

## Respuesta Exitosa (Código 200 OK)
```json
[
   {
        "id_pedido": 2,
        "id_usuario": 1,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
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
