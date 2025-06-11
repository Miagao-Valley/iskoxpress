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
import { useState } from "react";

export default function EditProfileDialog({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [name, setName] = useState("Freak Bob");
    const [bio, setBio] = useState("Biooo");
    const [location, setLocation] = useState("UPV");
    const [website, setWebsite] = useState("guthib.com");

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
                        {/* modal header */}
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
                                onClick={onClose}
                            >
                                Save
                            </Button>
                        </Flex>

                        <Dialog.Body px={0}>
                            {/* header image */}
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

                            {/* profile pivture */}
                            <Box
                                px={4}
                                mt={-8}
                                position="relative"
                                w="fit-content"
                            >
                                <Avatar.Root size="xl">
                                    <Avatar.Fallback name={name} />
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

                            {/* form fields */}
                            <VStack px={4} mt={4} pb={6}>
                                {[
                                    {
                                        label: "Name",
                                        value: name,
                                        setter: setName,
                                    },
                                    {
                                        label: "Bio",
                                        value: bio,
                                        setter: setBio,
                                        isTextArea: true,
                                    },
                                    {
                                        label: "Location",
                                        value: location,
                                        setter: setLocation,
                                    },
                                    {
                                        label: "Website",
                                        value: website,
                                        setter: setWebsite,
                                    },
                                ].map(
                                    ({ label, value, setter, isTextArea }) => (
                                        <Box w="full" key={label}>
                                            <Text
                                                fontSize="sm"
                                                color="gray.400"
                                                mb={1}
                                            >
                                                {label}
                                            </Text>
                                            {isTextArea ? (
                                                <Textarea
                                                    value={value}
                                                    onChange={(e) =>
                                                        setter(e.target.value)
                                                    }
                                                    bg="gray.800"
                                                    border="none"
                                                    resize="none"
                                                    _focus={{
                                                        border: "1px solid white",
                                                    }}
                                                />
                                            ) : (
                                                <Input
                                                    value={value}
                                                    onChange={(e) =>
                                                        setter(e.target.value)
                                                    }
                                                    bg="gray.800"
                                                    border="none"
                                                    _focus={{
                                                        border: "1px solid white",
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    ),
                                )}
                            </VStack>
                        </Dialog.Body>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
}
