import { MAX_CAPTION_LENGTH } from '@/constants/post';
import {z} from 'zod';
import { CommentSchema } from './comment';

export const PostSchema = z.object({
    postId: z.string().min(1),
    posterId: z.string().min(1),
    caption: z.string().trim().min(1).max(MAX_CAPTION_LENGTH, {
        message: "Caption can only be 150 characters long.",
    }),
    imgUrls: z.array(z.string().url()).default([]),
    dateCreated: z.string().datetime(),
    dateUpdated: z.string().datetime(),
    isDeleted: z.boolean().default(false),
    likes: z.array(z.string()).default([]),
    comments: z.array(CommentSchema).default([]),
    originalPostId: z.string().optional(),
    reExpressedBy: z.array(z.string()).default([]),
});

export type PostType = z.infer<typeof PostSchema>;