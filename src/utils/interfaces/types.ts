import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "../../server/routers/_app";

export type localeType = "en" | "es";
export type RouterOutputType = inferRouterOutputs<AppRouter>;

export type SkillsOutputTypes = RouterOutputType["getSkills"]["data"];
export type SkillsInputTypes = inferRouterInputs<AppRouter>["getSkills"];
export type SkillType = SkillsOutputTypes[0];
export type SkillTypeType = SkillType["type"];

export type ProjectsOutputTypes = RouterOutputType["getProjects"]["data"];
export type ProjectsInputTypes = inferRouterInputs<AppRouter>["getProjects"];
export type ProjectType = ProjectsOutputTypes[0];

export type CertificatesOutputTypes =
  RouterOutputType["getCertificates"]["data"];
export type CertificatesInputTypes =
  inferRouterInputs<AppRouter>["getCertificates"];
export type CertificateType = CertificatesOutputTypes[0];
