import { MAX_CAPTION_LENGTH } from "@/constants/post";
import { z } from "zod";
import { CommentSchema } from "./comment";

export const PostSchema = z.object({
    postId: z.string().min(1),
    posterId: z.string().min(1),
    caption: z
        .string()
        .trim()
        .max(MAX_CAPTION_LENGTH, {
            message: "Caption can only be 150 characters long.",
        })
        .optional(),
    imgUrls: z.array(z.string().url()),
    dateCreated: z.string().datetime(),
    dateUpdated: z.string().datetime(),
    isDeleted: z.boolean().default(false),
    likes: z.array(z.string()),
    comments: z.array(CommentSchema),
    originalPostId: z.string().optional(),
    reExpressedBy: z.array(z.string()),
});

export type PostType = z.infer<typeof PostSchema>;

export const PostFormSchema = PostSchema.omit({
    postId: true,
    posterId: true,
    likes: true,
    comments: true,
    dateCreated: true,
    dateUpdated: true,
    isDeleted: true,
    reExpressedBy: true,
    originalPostId: true,
});

export type PostFormType = z.infer<typeof PostFormSchema>;
