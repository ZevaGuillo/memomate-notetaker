import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'

export const topicRouter = createTRPCRouter({
    getAll: protectedProcedure
        .query(({ ctx }) => {
            return ctx.prisma.topic.findMany({
                orderBy:{
                    updateAt: 'desc'
                },
                where: {
                    userId: ctx.session.user.id,
                }
            })
        }),
    create: protectedProcedure
        .input(z.object({ title: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.create({
                data: {
                    title: input.title,
                    userId: ctx.session.user.id
                }
            })
        }),
    update: protectedProcedure
        .input(z.object({ id: z.string(), title: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.update({
                where: {
                    id: input.id
                },
                data: {
                    title: input.title,
                    userId: ctx.session.user.id
                }
            })
        }),
})
