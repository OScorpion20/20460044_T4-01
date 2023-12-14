# Endpoint: `GET /detallespedidos/{id}`

Permite obtener información sobre los detalles del pedido relacionados a un tema mediante su
identificador único.

## Ejemplo de Solicitud
```http
GET /detallespedidos/43
```

## Respuesta Exitosa (Código 200 OK)
```json
[
     {
        "id_detalle": 43,
        "id_pedido": null,
        "id_producto": 1,
        "cantidad": 2,
        "precio_unitario": "19.99"
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
