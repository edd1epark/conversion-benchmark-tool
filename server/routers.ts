import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { saveUserResponse } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  responses: router({
    save: publicProcedure
      .input(
        z.object({
          monthlyTraffic: z.number().int().positive(),
          monthlyConversions: z.number().int().positive(),
          conversionType: z.enum(["demos", "signups"]),
          conversionValue: z.number().int().min(0).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await saveUserResponse({
          monthlyTraffic: input.monthlyTraffic,
          monthlyConversions: input.monthlyConversions,
          conversionType: input.conversionType,
          conversionValue: input.conversionValue ?? 0,
        });
        return { success: true, id: result };
      }),
  }),
});

export type AppRouter = typeof appRouter;
