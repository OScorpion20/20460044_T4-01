# Endpoint: `POST /productos`

Permite añadir un nuevo registro en la tabla de productos
## Ejemplo de Solicitud
```http
POST /productos
```

## Respuesta Exitosa (Código 200 OK)
```json

{
        "id_producto": 7,
        "nombre_producto": "Camiseta Casual",
        "descripcion": "Camiseta de licra",
        "precio": "19.99",
        "categoria": "Ropa",
        "talla": "M",
        "marca": "MarcaA",
        "imagen_url": "url_imagen1.jpg",
        "disponible": 1
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
