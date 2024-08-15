import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully!");
        
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
};

//Gracefully disconnect when the application is shutting down
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    console.log("Disconnected from the database.");
    process.exit(0);
});
