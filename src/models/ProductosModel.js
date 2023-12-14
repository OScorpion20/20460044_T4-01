const {connectToMysql} = require('../dbconnection');

class ProductosModel
{
    static async consultar()
    {
        let db = await connectToMysql();
        let query = db('Productos');
        return await query;
    }
    static async consultarPorId(id)
    {
        let db = await connectToMysql();
        return await db('Productos').where('id_producto', id);
    }
    static async insertar(datos) {
        let db = await connectToMysql();
        const result = await db('Productos').insert(datos).returning('id_producto');
        return result[0];
    }
}

module.exports = ProductosModel;
