"use client";

import { supabase } from "@/supabase/supabase";
import { Button, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function PostImages() {
    const [imageUrl, setImageUrl] = useState("");

    async function checkForStorage() {
        const fileName = "transparent_no_data.png";

        const { data: publicUrlData } = supabase.storage
            .from("image-urls")
            .getPublicUrl(fileName);

        setImageUrl(publicUrlData.publicUrl);
    }

    return (
        <>
            <Button onClick={checkForStorage} mb={4}>
                <Text>test</Text>
            </Button>
            {imageUrl && (
                <Image src={imageUrl} alt="Supabase Image" maxW="300px" />
            )}
        </>
    );
}
