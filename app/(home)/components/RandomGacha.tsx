import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsQuestionLg } from 'react-icons/bs';
import { FaDice } from 'react-icons/fa';

import { RANDOM_TEXTS } from '@/app/(home)/lib/const';
import { useRandomFanart } from '@/app/events/service/client/useEventService';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import { useModifiedImageUrl } from '@/hooks/useModifiedImageUrl';
import { useResponsiveLink } from '@/hooks/useResponsiveLink';

export default function RandomGacha() {
  const { data, isLoading, isFetching, refetch, status } = useRandomFanart({
    isd: true,
    wak: true,
    gomem: true,
  });

  const showRandomFanart = async () => {
    // disabled에서 막혀야하지만 이렇게도 막을 수 있음
    if (isFetching) return;
    await refetch();
  };
  return (
    <div className="mt-4 flex w-[90%] flex-col items-center justify-start gap-4 rounded-2xl bg-white px-6 pb-4 pt-6 shadow-cardBox dark:bg-dark-card">
      <div className="flex w-full items-center justify-start">
        <h2 className="text-xl font-bold">팬아트 가챠</h2>
      </div>
      <Fanart
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={status === 'error'}
      />
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <Button
          additionalClass="rounded-xl w-full text-base font-bold gap-1.5"
          intent="solid-purple"
          size="lg"
          onClick={showRandomFanart}
          disabled={isFetching} // 여러 번 클릭시 중복 요청 방지
        >
          <FaDice className="size-5" />
          랜덤가챠 굴리기
        </Button>
        <Link href="/events/randomGacha" className="w-full">
          <div className="inline-flex h-12 min-h-12 w-full select-none items-center justify-center whitespace-nowrap rounded-xl bg-gray-100 pe-4 ps-4 align-middle text-base font-bold leading-tight text-gray-800 outline-none outline-offset-2 transition hover:bg-gray-200 dark:bg-whiteAlpha-200 dark:text-white dark:hover:bg-whiteAlpha-300">
            랜덤가챠 더보기(4개)
          </div>
        </Link>
      </div>
    </div>
  );
}

const Fanart = ({
  data,
  isLoading,
  isFetching,
  isError,
}: {
  data?: EventFanart;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
}) => {
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  useEffect(() => {
    // @ts-ignore
    let intervalId;
    if (isFetching) {
      intervalId = setInterval(() => {
        setDisplayTextIndex(
          (prevIndex) => (prevIndex + 1) % RANDOM_TEXTS.length
        );
      }, 500);
    } else {
      clearInterval(intervalId);
    }
    // @ts-ignore
    return () => clearInterval(intervalId);
  }, [isFetching]);

  const displayText = RANDOM_TEXTS[displayTextIndex];

  const article_link = useResponsiveLink(
    data?.url.split('/').pop() ?? '',
    'article'
  );

  const modifiedUrl300 = useModifiedImageUrl({
    url: data?.img_url ?? '',
    size: 300,
  });

  if (isError) {
    return <Alert />;
  }

  if (isLoading || isFetching || !data) {
    return (
      <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-2xl bg-gray-100 dark:bg-whiteAlpha-200">
        {isFetching ? (
          <p>{displayText}</p>
        ) : (
          <BsQuestionLg className="size-14" />
        )}
      </div>
    );
  }

  const { title, nickname } = data;

  return (
    <div className="mb-2 flex w-full flex-col items-center justify-center rounded-2xl">
      <Link className="w-full" href={article_link} target="_blank">
        <Image
          className="shadow-card max-h-[312px] rounded-2xl object-cover"
          src={modifiedUrl300}
          alt={`랜덤 팬아트 게시글 title: ${title}`}
          width={475}
          height={475}
          unoptimized
        />
      </Link>
      <div className="mt-2 px-4">
        <p className="line-clamp-1">제목: {title}</p>
        <p className="line-clamp-1">작가: {nickname}</p>
      </div>
    </div>
  );
};
