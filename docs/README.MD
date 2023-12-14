# Documentación del proyecto LORENZZO

Bienvenido a la documentación de Lorenzzo. A continuación, se presenta una descripción general de este mismo, los requisitos, instrucciones de instalación y una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General del proyecto

Lorenzzo es un sitio web dedicado a la venta de ropa, calzado y accesorios y esto es basicamente la conexión con la base de datos y el buen funcionamiento de un servidor web.

### Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| [`GET /usuarios`](./endpoints//get-usuarios.md)            | Recupera la lista de todos los usuarios disponibles. |  
| [`GET /usuarios/{id}/`](./endpoints//get-id-usuarios.md) | Obtiene la lista de un usuario específico. |
| [`GET /productos`](./endpoints//get-productos.md)             | Recupera la lista de todos los productos disponibles. | 
| [`GET /productos/{id}`](./endpoints//get-id-productos.md) | Obtiene información detallada sobre un producto específico. |
| [`GET /pedidos`](./endpoints//get-pedidos.md)             | Recupera la lista de todos los pedidos disponibles. | 
| [`GET /pedidos/{id}`](./endpoints//get-id-pedidos.md)        | Obtiene información detallada sobre un pedido específico. |
| [`GET /detallespedidos`](./endpoints//get-detallespedidos.md)             | Recupera la lista de todos los detalles de un pedido disponibles. | 
| [`GET /detallespedidos/{id}`](./endpoints//get-id-detallespedidos.md)      | Obtiene información detallada sobre los detalles de un pedido específico. |
El POST envía datos de forma que no pueden verse (en un segundo plano u "ocultos" al usuario).
| [`POST /usuarios/{id}/`](./endpoints//post-usuarios.md) | Se usa para modificar el id de un usuario |
| [`POST /productos/{id}`](./endpoints//post-productos.md)          
| [`POST /pedidos/{id}`](./endpoints//post-pedidos.md)        
| [`POST /detallespedidos/{id}`](./endpoints//post-detallespedidos.md)        


