const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllProducts = async () => {
    return await prisma.product.findMany();
}

exports.getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: {id}
    });
}

exports.createProduct = async (name, price, stock) => {
    return await prisma.product.create({
        data: { name, price, stock }
    });
}

exports.updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: {id},
        data,
    });
}

exports.deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: {id}
    });
}