"use client";

import { Button } from "@chakra-ui/react";
import { useState } from "react";
import EditProfileDialog from "@/components/profile/edit-profile-dialog";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
            <EditProfileDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
