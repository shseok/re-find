import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

import useModal from '@/hooks/useModal';
import { Logo } from '@/lib/images';

import NaverButton from './Button/NaverButton';

const redirect_uri = `${
  process.env.NEXT_PUBLIC_IS_LOCAL
    ? process.env.NEXT_PUBLIC_LOCAL_CLIENT_URL
    : process.env.NEXT_PUBLIC_CLIENT_URL
}/register`;
const client_id = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;

export default function LoginModal() {
  const { hide } = useModal();
  const goToNaverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&state=abcd`;
  };

  return (
    <section className="relative m-auto size-full bg-white shadow-xl dark:bg-dark-card md:h-[291px] md:w-[430px] md:rounded-md">
      <button
        className="absolute right-[10px] top-[10px] flex size-9 items-center justify-center rounded-full transition hover:bg-gray-200 active:bg-gray-300 dark:hover:bg-whiteAlpha-200 dark:active:bg-whiteAlpha-300"
        onClick={hide}
      >
        <IoClose className="size-8" />
      </button>
      <div className="flex size-full flex-col items-center justify-end px-6 py-8 text-center text-sm 2xs:text-base md:py-6 lg:px-8">
        <div className="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center md:top-[40%]">
          <Image
            alt="리파인드 로고"
            width={48}
            height={48}
            src={Logo}
            className="h-[80px] w-[141px]"
            unoptimized
            priority
          />
          <h1 className="mt-2 text-xl font-semibold">리파인드 로그인</h1>
        </div>
        <NaverButton onClick={goToNaverLogin}>
          네이버 아이디로 로그인
        </NaverButton>
      </div>
    </section>
  );
}
