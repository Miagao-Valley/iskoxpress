"use client";

import {
    Box,
    Button,
    Dialog,
    IconButton,
    Input,
    Portal,
    Textarea,
    VStack,
    Image,
    Avatar,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FiCamera } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditUserProfileSchema, EditUserType } from "@/types/user";

interface EditProfileDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EditProfileDialog(props: EditProfileDialogProps) {
    const { isOpen, onClose } = props;

    const { register, handleSubmit } = useForm<EditUserType>({
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            userName: "",
            profileImageUrl: null,
            headerImageUrl: null,
            bio: "",
            location: "",
            website: "",
        },
    });

    const onSubmit = (data: EditUserType) => {
        console.log("Submitted data:", data);
        onClose();
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content
                        bg="black"
                        color="white"
                        borderRadius="lg"
                        maxW="xl"
                        w="full"
                    >
                        <Flex
                            align="center"
                            justify="space-between"
                            px={4}
                            pt={4}
                            pb={2}
                        >
                            <Box w="32px" />
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                textAlign="center"
                            >
                                Edit profile
                            </Text>
                            <Button
                                size="sm"
                                borderRadius="full"
                                colorScheme="blue"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Save
                            </Button>
                        </Flex>

                        <Dialog.Body px={0}>
                            <Box position="relative" h="120px" bg="gray.700">
                                <Image
                                    src="/sample-header.jpg"
                                    alt="Header"
                                    objectFit="cover"
                                    w="full"
                                    h="full"
                                />
                                <IconButton
                                    aria-label="Change Header"
                                    position="absolute"
                                    top="8px"
                                    left="8px"
                                    size="sm"
                                    variant="ghost"
                                    bg="blackAlpha.600"
                                    _hover={{ bg: "blackAlpha.800" }}
                                >
                                    <FiCamera />
                                </IconButton>
                            </Box>

                            <Box
                                px={4}
                                mt={-8}
                                position="relative"
                                w="fit-content"
                            >
                                <Avatar.Root size="xl">
                                    <Avatar.Fallback name="User" />
                                    <Avatar.Image src="/sample-avatar.jpg" />
                                </Avatar.Root>
                                <IconButton
                                    aria-label="Change Avatar"
                                    position="absolute"
                                    bottom="0"
                                    left="0"
                                    size="sm"
                                    variant="ghost"
                                    bg="blackAlpha.600"
                                    _hover={{ bg: "blackAlpha.800" }}
                                >
                                    <FiCamera />
                                </IconButton>
                            </Box>

                            <VStack px={4} mt={4} pb={6}>
                                <Box w="full">
                                    <Text fontSize="sm" color="gray.400" mb={1}>
                                        Name
                                    </Text>
                                    <Input
                                        {...register("userName")}
                                        bg="gray.800"
                                        border="none"
                                        _focus={{ border: "1px solid white" }}
                                    />
                                </Box>

                                <Box w="full">
                                    <Text fontSize="sm" color="gray.400" mb={1}>
                                        Bio
                                    </Text>
                                    <Textarea
                                        {...register("bio")}
                                        bg="gray.800"
                                        border="none"
                                        resize="none"
                                        _focus={{ border: "1px solid white" }}
                                    />
                                </Box>

                                <Box w="full">
                                    <Text fontSize="sm" color="gray.400" mb={1}>
                                        Location
                                    </Text>
                                    <Input
                                        {...register("location")}
                                        bg="gray.800"
                                        border="none"
                                        _focus={{ border: "1px solid white" }}
                                    />
                                </Box>

                                <Box w="full">
                                    <Text fontSize="sm" color="gray.400" mb={1}>
                                        Website
                                    </Text>
                                    <Input
                                        {...register("website")}
                                        bg="gray.800"
                                        border="none"
                                        _focus={{ border: "1px solid white" }}
                                    />
                                </Box>
                            </VStack>
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
