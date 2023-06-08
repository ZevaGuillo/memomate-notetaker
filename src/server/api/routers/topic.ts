import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '../trpc'
import { initialValue } from '~/lib/initial'

export const topicRouter = createTRPCRouter({
    init: protectedProcedure
        .query(async({ ctx }) => {
            const topic = await initialValue(ctx.session.user.id);
            return {topic}
        }),
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
        .input(z.object({ title: z.string(), icon: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.create({
                data: {
                    title: input.title,
                    icon: input.icon,
                    userId: ctx.session.user.id
                }
            })
        }),
    update: protectedProcedure
        .input(z.object({ id: z.string(), title: z.string(), icon: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.topic.update({
                where: {
                    id: input.id
                },
                data: {
                    title: input.title,
                    icon: input.icon,
                    userId: ctx.session.user.id
                }
            })
        }),
    delete: protectedProcedure
        .input(z.object({id: z.string()}))
        .mutation(async ({ctx, input}) => {
            return ctx.prisma.topic.delete({
                where: {
                    id: input.id
                }
            })
        })
})
