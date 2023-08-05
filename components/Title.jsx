import React from "react";
import Link from "next/link";

import { Heading, useColorModeValue } from "@chakra-ui/react";

import { lightMode, darkMode } from "@/styles/theme";
import Image from "next/image";

const Title = ({ onTitleClick }) => {
    const highlightColor = useColorModeValue(
        lightMode.highlight,
        darkMode.highlight
    );

    const handleTitleClick = () => {
        window.location.href = "/";
    };

    return (
        <div className="title" onClick={onTitleClick}>
            <Link href="/" className="content">
                <Heading className="title-main">
                    <span style={{ color: highlightColor }}>RE:</span>
                    FIND
                </Heading>
                {/* <Image
                    src="/refind-title.png"
                    alt="refind-title"
                    class="logo-img"
                    width={400}
                    height={100}
                    unoptimized
                /> */}
            </Link>
        </div>
    );
};

export default Title;
