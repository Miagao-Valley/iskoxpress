import { MAX_BIO_LENGTH } from "@/constants/user";
import { z } from "zod";

export const UserDataSchema = z.object({
    id: z.string().min(1),
    email: z.string().email(),
    name: z
        .string()
        .trim()
        .min(1, { message: "Name is required" })
        .max(100, { message: "Name can only be 100 letters long." }),
    profileImageUrl: z.string().url().nullable().optional(),
    headerImageUrl: z.string().url().nullable().optional(),
    userName: z.string().min(3).max(15),
    bio: z.string().max(MAX_BIO_LENGTH).optional(),
    dateCreated: z.string().datetime(),
    dateUpdated: z.string().datetime(),
    isSetup: z.boolean(),
});

export type UserDataType = z.infer<typeof UserDataSchema>;

export const PreUserSchema = UserDataSchema.omit({
    userName: true,
    headerImageUrl: true,
    bio: true,
});

export type PreUserType = z.infer<typeof PreUserSchema>;

export const SetUpUserRequestSchema = UserDataSchema.omit({
    name: true,
    email: true,
    id: true,
    dateCreated: true,
    dateUpdated: true,
    isSetup: true,
});
export type SetUpUserRequestType = z.infer<typeof SetUpUserRequestSchema>;

export const EditUserProfileSchema = UserDataSchema.omit({
    name: true,
    email: true,
    id: true,
    dateCreated: true,
    dateUpdated: true,
    isSetup: true,
});

export type EditUserType = z.infer<typeof EditUserProfileSchema>;
