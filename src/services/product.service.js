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