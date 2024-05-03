// userService.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser(firstName, lastName, email) {
  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });
    console.log('Utilisateur créé avec succès:', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = { createUser };
