# Endpoint: `POST /detallespedidos`

Permite añadir un nuevo registro en la tabla de detallespedidos
## Ejemplo de Solicitud
```http
POST /detallespedidos
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "id_detalle": 47,
        "id_pedido": null,
        "id_producto": 1,
        "cantidad": 2,
        "precio_unitario": "19.99"
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
