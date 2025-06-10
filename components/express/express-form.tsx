"use client";

import {
    Box,
    Button,
    Textarea,
    Text,
    Flex,
    AvatarRoot,
    AvatarImage,
    Separator,
    IconButton,
    FileUploadRoot,
    FileUploadHiddenInput,
    FileUploadTrigger,
} from "@chakra-ui/react";
import { RiGalleryLine } from "react-icons/ri";
import { PostFormSchema, PostFormType } from "@/types/post";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImagePreview from "./image-preview";

export default function ExpressForm() {
    const { setValue, register, handleSubmit, watch, reset } =
        useForm<PostFormType>({
            resolver: zodResolver(PostFormSchema),
            defaultValues: {
                caption: "",
                imgUrls: [],
            },
        });

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (!files) return;

        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setValue("imgUrls", urls);
    }

    function onSubmit(data: PostFormType) {
        console.log(data);
        reset();
    }

    function handleRemoveImage(index: number) {
        const updatedImgs = [...imgUrls];
        updatedImgs.splice(index, 1);
        setValue("imgUrls", updatedImgs);
    }

    const caption = watch("caption");
    const imgUrls = watch("imgUrls");

    return (
        <Flex direction="row" padding={4}>
            <Box height="120px" mr={2}>
                <AvatarRoot size="md">
                    <AvatarImage src="https://bit.ly/sage-adebayo" />
                </AvatarRoot>
            </Box>
            <Box width="sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Textarea
                        {...register("caption")}
                        placeholder="What's happening?"
                        border="none"
                        focusRing="none"
                        autoresize
                        size="md"
                    />
                    <ImagePreview
                        imgUrls={imgUrls}
                        onClick={handleRemoveImage}
                    />
                    <Separator my={3} ml={3} borderColor="gray.600" />
                    <Flex justify="space-between" align="center" mt="10px">
                        <Flex gap={2} ml={3}>
                            <FileUploadRoot>
                                <FileUploadHiddenInput
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                />
                                <FileUploadTrigger asChild>
                                    <IconButton variant="ghost">
                                        <RiGalleryLine />
                                    </IconButton>
                                </FileUploadTrigger>
                            </FileUploadRoot>
                        </Flex>
                        <Button
                            borderRadius={20}
                            size="xs"
                            type="submit"
                            disabled={!caption && imgUrls.length === 0}
                        >
                            <Text>Express</Text>
                        </Button>
                    </Flex>
                </form>
            </Box>
        </Flex>
    );
}
