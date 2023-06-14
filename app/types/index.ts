import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createdAt" | "updtedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}