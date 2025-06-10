import { Flex, Box, IconButton, Image } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";

interface ImagePreviewProps {
    imgUrls: string[];
    onClick: (index: number) => void;
}

export default function ImagePreview(props: ImagePreviewProps) {
    const { imgUrls, onClick } = props;

    return (
        <>
            {imgUrls.length > 0 && (
                <Flex wrap="wrap" gap={2} mt={3}>
                    {imgUrls.map((url, index) => (
                        <Box
                            key={index}
                            boxSize="100px"
                            borderRadius="md"
                            overflow="hidden"
                            position="relative"
                        >
                            <Image
                                src={url}
                                alt={`preview-${index}`}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                            />
                            <IconButton
                                size="2xs"
                                variant="ghost"
                                aria-label="remove-image"
                                position="absolute"
                                top="2px"
                                right="2px"
                                bg="whiteAlpha.800"
                                borderRadius="full"
                                _hover={{ bg: "whiteAlpha.900" }}
                                onClick={() => onClick(index)}
                            >
                                <LuX />
                            </IconButton>
                        </Box>
                    ))}
                </Flex>
            )}
        </>
    );
}
