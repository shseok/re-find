import Artwork from '@/components/gallery/Artwork';

import { Modal } from './modal';

type Params = { params: { id: string } };

// // Image url 고민
// export function generateMetadata({ params: { id } }: Params): Metadata {
//   const { title, description, url } = siteConfig.gallery.detailed(name);
//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url,
//       type: siteConfig.type,
//       images: siteConfig.image,
//       siteName: siteConfig.siteName,
//     },
//     twitter: {
//       title,
//       description,
//       card: 'summary_large_image',
//       site: siteConfig.siteName,
//       creator: siteConfig.creator,
//       images: siteConfig.image,
//     },
//     icons: siteConfig.icons,
//   };
// }

export default function ArtworkModal({ params: { id } }: Params) {
  // 기존 모달 시스템과 달리 page용 모달을 return해줘야하므로 따로 작성
  return (
    <Modal>
      <Artwork />
    </Modal>
  );
}
