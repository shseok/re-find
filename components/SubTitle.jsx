import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Heading, useColorModeValue } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import { lightMode, darkMode } from "@/styles/theme";
const SubTitle = () => {
    const highlightColor = useColorModeValue(
        lightMode.highlight,
        darkMode.highlight
    );

    return (
        <div className="sub-title">
            <p className="title-text" style={{ color: highlightColor }}>
                왁타버스 팬아트
            </p>
            <div className="bg-crop">
                <Image
                    src="/real-wakgood.jpg"
                    alt="실사왁굳"
                    class="bg-wakdoo"
                    width={100}
                    height={100}
                    placeholder="blur"
                />
            </div>
            <p className="title-text">출처 찾기</p>
        </div>
    );
};

export default SubTitle;
