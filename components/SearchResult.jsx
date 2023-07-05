import React from "react";
import { Text, Skeleton, Link, Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import AuthorProfileCard from "../components/AuthorProfileCard";
import Description from "../components/Description";

const SearchResult = (searchTime, data, ids, loading2, author, resetFiles) => {
    return (
        <div className="result">
            <Text fontSize="xl" mb="20px" textAlign="center">
                검색시간: {searchTime / 1000}s
            </Text>
            {data === null ? (
                <div className="notFound">
                    <Description />
                </div>
            ) : (
                <div className="found">
                    {ids?.map((item, index) => (
                        <Link
                            key={index}
                            fontSize="xl"
                            mb="20px"
                            textAlign="center"
                            // color="#01bda1"
                            color={highlightColor}
                            className="link"
                            href={
                                "https://cafe.naver.com/steamindiegame/" + item
                            }
                            isExternal
                        >
                            https://cafe.naver.com/steamindiegame/
                            {item}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    ))}

                    <Skeleton isLoaded={!loading2} mt="20px" mb="20px">
                        <Text fontSize="xl" mb="20px" textAlign="center">
                            {author?.board || ""}
                        </Text>
                        <Link
                            fontSize="xl"
                            mb="20px"
                            textAlign="center"
                            // color="#01bda1"
                            color={highlightColor}
                            className="link"
                            href={
                                "https://cafe.naver.com/steamindiegame/" +
                                data?.id[0]
                            }
                            isExternal
                        >
                            {author?.title}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </Skeleton>
                    <Skeleton isLoaded={!loading2}>
                        <AuthorProfileCard
                            writerURL={
                                author?.writerURL || data?.author_profile
                            }
                            profURL={author?.profURL}
                            nickname={author?.nickname || data?.author_nickname}
                            board={author?.uploadText}
                        />
                    </Skeleton>
                </div>
            )}
            <Button onClick={resetFiles} colorScheme="blue" w={140}>
                다른 이미지 검색
            </Button>
        </div>
    );
};

export default SearchResult;
