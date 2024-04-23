import Image from 'next/image';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useUpload } from '@/app/(home)/hooks/useUpload';
import { useImageUploadStore } from '@/app/(home)/store/imageUploadStore';
import { UploadHoverImage, UploadImage } from '@/lib/images';

export default function UploadImages() {
  const { setHashs, setUploadedFiles } = useImageUploadStore(
    useShallow((state) => ({
      setHashs: state.setHashs,
      setUploadedFiles: state.setUploadedFiles,
    }))
  );
  const { getRootProps, getInputProps, isDragActive } = useUpload({
    getDataFromChild: setUploadedFiles,
    getHashFromChild: setHashs,
  });
  const [hover, setHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setIsClick(true);
    // 마우스 클릭 풀면 다시 false로 바꾸기
    setTimeout(() => {
      setIsClick(false);
    }, 1000);
  };

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-white py-4 shadow-cardBox dark:bg-dark-card">
      {/* image draggable area */}
      <div
        className={`w-[90%] max-w-[300px] cursor-pointer rounded-2xl border-4 border-dashed border-[#6d6d6d] p-4 hover:border-black dark:hover:border-gray-150 xs:w-4/5 xs:max-w-[360px] md:w-3/5 md:max-w-[500px] 
        lg:w-full
        ${isDragActive ? 'border-hightlight' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          {...getRootProps()}
          className="flex w-full flex-col items-center justify-center gap-2"
        >
          <input {...getInputProps()} />
          {isClick ? (
            <Image
              src={UploadHoverImage}
              alt="리파인드 로고2"
              width={160}
              height={160}
            />
          ) : (
            <Image
              src={hover ? UploadHoverImage : UploadImage}
              alt="리파인드 로고1"
              width={160}
              height={160}
            />
          )}
          {isDragActive ? (
            <p>이미지를 여기에 드롭하세요!</p>
          ) : (
            <p className="max-w-[300px] text-center">
              이미지를 여기로 드래그하거나 화면을 클릭하여 파일을&nbsp;
              <span className="text-green-highlight underline dark:text-pink-highlight">
                업로드
              </span>
              하세요.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
