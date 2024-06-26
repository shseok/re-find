export const useModifiedImageUrl = ({
  url,
  size,
}: {
  url?: string;
  size: number;
}) => {
  // if (url === undefined || url === null) return;
  if (!url || url === '') return '';
  if (size === 100) {
    if (url.match(/\.jpg\?type=w\d+$/) || url.match(/\.png\?type=w\d+$/)) {
      return url.replace(/\?type=w\d+$/, '?type=f100_100');
    }
  } else if (size === 300) {
    if (url.match(/\.jpg\?type=w\d+$/) || url.match(/\.png\?type=w\d+$/)) {
      return url.replace(/\?type=w\d+$/, '?type=w300');
    }
  } else if (size === 800) {
    if (url.match(/\.jpg\?type=w\d+$/) || url.match(/\.png\?type=w\d+$/)) {
      return url.replace(/\?type=w\d+$/, '?type=w800');
    }
  }
  return url; // gif 또는 다른 확장자의 경우 원래 URL을 반환
};
