import { router, procedure } from '../trpc';
import { z } from 'zod';

export const appRouter = router({
  getProjects: procedure
    .input(
      z.object({
        limit: z.number(),
        cursor: z.string().nullish(),
        keyword: z.string().optional(),
        type: z.enum(['FRONTEND', 'BACKEND', 'MOBILE', 'DESKTOP']).optional(),
        locale: z.enum(['es', 'en']).optional().default('es'),
      })
    )
    .query(async ({ input, ctx }) => {
      const { limit, keyword, locale, cursor, type } = input;

      // get language selected
      const appLanguage = await ctx.prisma.appLanguage.findUnique({
        where: {
          code: locale,
        },
      });

      // get projects with skills and translations
      const data = await ctx.prisma.project.findMany({
        include: {
          ProjectTranslation: {
            where: {
              appLanguageId: appLanguage?.id,
            },
          },
          ProjectSkill: {
            include: {
              Skill: {
                include: {
                  SkillTranslation: {
                    where: {
                      appLanguageId: appLanguage?.id,
                    },
                  },
                },
              },
            },
          },
        },
        take: limit,
        skip: cursor ? 1 : 0,
        where: type ? { type } : undefined,
        cursor: cursor ? { id: cursor } : undefined,
      });

      // first ProjectTranslation data should be at the same level as Project object
      const dataWithTranslation = data.map((project) => {
        const { ProjectTranslation, ProjectSkill, ...rest } = project;

        const skills = ProjectSkill.map(({ Skill }) => {
          const { SkillTranslation, ...rest } = Skill;
          return {
            ...rest,
            ...SkillTranslation[0],
          };
        });

        return {
          skills,
          ...rest,
          ...ProjectTranslation[0],
        };
      });

      const lastCursor = data[data.length - 1]?.id || null;

      // check if there are more projects to fetch
      const hasMore = await ctx.prisma.project.count({
        take: limit,
        skip: lastCursor ? 1 : 0,
        cursor: lastCursor ? { id: lastCursor } : undefined,
      });

      return {
        hasMore: hasMore >= 1,
        cursor: lastCursor,
        data: dataWithTranslation,
      };
    }),
  getSkills: procedure
    .input(
      z.object({
        limit: z.number(),
        cursor: z.string().nullish(),
        keyword: z.string().optional(),
        locale: z.enum(['es', 'en']).optional().default('es'),
      })
    )
    .query(async ({ input, ctx }) => {
      const { limit, keyword, locale, cursor } = input;

      // get language selected
      const appLanguage = await ctx.prisma.appLanguage.findUnique({
        where: {
          code: locale,
        },
      });

      // get skills with translations
      const data = await ctx.prisma.skill.findMany({
        include: {
          SkillTranslation: {
            where: {
              appLanguageId: appLanguage?.id,
            },
          },
        },
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
      });

      // first SkillTranslation data should be at the same level as Skill object
      const dataWithTranslation = data.map((skill) => {
        const { SkillTranslation, ...rest } = skill;

        return {
          ...rest,
          ...SkillTranslation[0],
        };
      });

      const lastCursor = data[data.length - 1]?.id || null;

      // check if there are more skills to fetch
      const hasMore = await ctx.prisma.project.count({
        take: limit,
        skip: lastCursor ? 1 : 0,
        cursor: lastCursor ? { id: lastCursor } : undefined,
      });

      return {
        hasMore: hasMore >= 1,
        cursor: lastCursor,
        data: dataWithTranslation,
      };
    }),
});

export type AppRouter = typeof appRouter;
