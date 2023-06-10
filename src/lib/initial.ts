import { prisma } from "~/server/db";
 
export const initialValue = async (userId: string) => {

    let topic
    const existingUser = await prisma.user.findUnique({
        where: { id: userId },
    });

    // Verificar si es el primer inicio de sesión
    if (existingUser && existingUser.firstSignIn) {

        await prisma.user.update({
            where: { id: userId },
            data: { firstSignIn: false },
        });

        topic = await prisma.topic.create({
            data: {
                title: 'Welcome',
                icon: '🎉',
                userId: userId,
            },
        });

        await prisma.note.create({
            data: {
                title: 'README',
                content: "# Welcome to MemoMate",
                topicId: topic.id,
            },
        });
    }
    return Promise.resolve(topic);
}