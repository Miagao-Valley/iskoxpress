import { MAX_COMMENT_LENGTH } from '@/constants/comment'
import {z} from 'zod'

export const CommentSchema = z.object({
    commentId: z.string().min(1),
    commenterId: z.string().min(1),
    comment: z.string().trim().min(1).max(MAX_COMMENT_LENGTH, {
            message: "Comments can only be 150 characters long."
        }),
    dateCreated: z.string().datetime(),
})

export type CommentType = z.infer<typeof CommentSchema>;