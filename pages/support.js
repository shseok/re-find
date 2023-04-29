import { Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const support = () => {
    return (
        <div className="support_body">
            <div className="title">
                <Link href="/" className="content">
                    <Heading className="title-main">
                        <span className="highlight">RE: </span> FIND
                    </Heading>
                </Link>
                <p className="title-sub">이세계 아이돌 팬아트 출처 찾기</p>
            </div>
            <h1 className="title">Support</h1>
            <Divider />
            <div className="description">
                <p>제작자: 레루루, 초코넛밀크티 </p>
                <p>왁물원: 링크1 링크2 </p>
                <p>참고: 키워드나 문장으로 팬아트 찾기(AI검색기)</p>
                <p>카운터: 9936 (since 2023.02.16 20:15) </p>
                <p>게시판: 이세돌 팬아트 게시판</p>
                <p>통합 BEST 팬아트 게시판 금손</p>
                <p>일러레의 방(비정기적 업데이트) </p>
                <p>왁타버스 불법 AI 팬아트(비정기적 업데이트)</p>
            </div>
        </div>
    );
};

export default support;
