import { betterAuth, string } from "better-auth"
import { nextCookies } from "better-auth/next-js"
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma from "@/lib/prisma"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: ""
            },
            contractsId: {
                type: "string",
                required: false,
            },
            teams: {
                type: "string[]",
                required: false,
                defaultValue: []
            }
        }
    },
    plugins: [nextCookies()]
})
