import type { Gallery, Member } from '@/types';

// 한 페이지당 불러올 아이템 개수
export const ROWS_PER_PAGE = 30;

export const BUTTON_LIST = [
  '전체',
  '이세돌',
  '고멤',
  '우왁굳',
  '금손 작가들의 방',
];

const GALLERY_LIST: Gallery[] = [
  {
    id: 0,
    value: 'halloween',
    type: 'keyword',
    title: '할로윈 팬아트',
    subTitle: '🎃 할로윈 특집 🎃',
    description: 'Trick or Treat! 해피 할로윈',
    author: 'COCOball',
    query:
      'artworks?board=isd&board=gomem&board=wak&board=best&board=goldhand&case_sensitive=false&title&query=할로윈',
  },
  {
    id: 1,
    value: 'christmas',
    type: 'keyword',
    title: '크리스마스 팬아트',
    subTitle: '🎅🏼 크리스마스 특집 🎄',
    description: '이세돌과 함께 메리 크리스마스!',
    author: '여비날',
    query:
      'artworks?board=isd&board=gomem&board=wak&board=best&board=goldhand&case_sensitive=false&title&query=크리스마스',
  },
  {
    id: 2,
    value: 'rewind2year',
    type: 'special',
    title: '이세돌 2주년 팬아트',
    subTitle: ' ❤️‍🔥 이세돌 2주년 ❤️‍🔥',
    description: '이세계아이돌과 함께한 2년간의 추억들',
    author: '코델',
    query:
      'artworks?board=isd&board=gomem&board=wak&board=best&board=goldhand&case_sensitive=false&title&query=리와인드&query=rewind&query=re:wind&query=데뷔%202주년',
  },
  {
    id: 3,
    value: 'viichanBirthday',
    type: 'special',
    title: '비챤님 생일 팬아트',
    subTitle: '🎂 비챤님 생일 팬아트 🎂',
    description: '비챤님의 탄신일을 진심으로 축하드립니다!',
    author: '뉴단',
    query: 'gallery?member=viichan&since=20240116&until=20240116',
  },
  {
    id: 4,
    value: 'lilpaBirthday',
    type: 'special',
    title: '릴파님 생일 팬아트',
    subTitle: '🎂 릴파님 생일 팬아트 🎂',
    description: '릴파님의 탄신일을 진심으로 축하드립니다!',
    author: 'sei9',
    query: 'gallery?member=lilpa&since=20240309&until=20240309',
  },
  {
    id: 5,
    value: 'kissingYou',
    type: 'special',
    title: '이세돌 키싱유 팬아트',
    description: '오랜만에 돌아온 이세계아이돌 단체 커버곡 키싱유!',
    subTitle: '🍭 이세돌 키싱유 팬아트 🍭',
    author: 'WAMELL',
    query:
      'artworks?query=kissing&query=키싱&query=키씽&query=뚜뚜뚜&query=뚜두루&query=고마워 사랑해&query=사랑해 한마디&query=너만을 사랑해&case_sensitive=false&board=isd&board=best&title=',
  },
  {
    id: 6,
    value: 'isdPick',
    type: 'special',
    title: '이세돌픽 팬아트',
    subTitle: '이세돌이 고른 팬아트',
    description: '이세계아이돌이 고른 공지사항 팬아트',
    author: '후히이',
    query: 'artworks?board=isd_notice&author&case_sensitive=false&title',
  },
  {
    id: 7,
    value: 'tiffanyWouldYouMia',
    type: 'special',
    title: 'RE:START',
    description: '오랜 기다림 끝에 돌아온 티파니님을 환영합니다!',
    subTitle: '티파니님의 팬아트',
    author: '참빼미',
    query:
      'artworks?query=티파니&query=우주미아&board=gomem&board=gomem_behind&title=',
  },
  {
    id: 8,
    value: 'newIne',
    type: 'special',
    title: '뉴 아이네',
    description:
      '오리지널 아바타가 공개됨과 동시에 5월 11일 단독 콘서트가 진행되었습니다!',
    subTitle: '뉴 아이네 팬아트',
    author: '핏짜라짜라',
    query:
      'artworks?board=isd&board=best&category=아이네&since=20240427&title=&query=뉴이네&query=아이네&query=콘서트&query=에버퍼플&query=EVER PURPLE&query=아단콘',
  },
  {
    id: 9,
    value: 'jururuBirthday',
    type: 'special',
    title: '주르르님 생일 팬아트',
    subTitle: '🎂 주르르님 생일 팬아트 🎂',
    description: '주르르님의 탄신일을 진심으로 축하드립니다!',
    author: '피엘로',
    query:
      'artworks?board=isd&board=best&category=주르르&title=&content=&since=20240609&until=20240611&query=생일&query=생축&query=탄신&query=해피&query=DAY&query=축하&query=탄죠비&query=오메데&query=데이',
  },
  {
    id: 10,
    value: 'newnewLilpa',
    type: 'special',
    title: '뉴뉴릴파',
    subTitle: 'NEW NEW 릴파 공개',
    description:
      'LILPACON : Going Out - SOOPER CONCERT | 7월 12일(금) 7월 13일(토) 오후 7시 ',
    author: '낑깡맛',
    query:
      'artworks?board=isd&board=best&category=릴파&since=20240629&title=&content=&query=뉴뉴&query=릴파콘&query=릴단콘&query=콘서트&query=going&query=Going',
  },
  {
    id: 11,
    value: 'deadCat',
    type: 'special',
    title: '데드캣',
    subTitle: '고세구님 뉴의상 데드캣',
    description: '고세구님의 신의상 데드캣이 공개되었습니다. #Rollin',
    author: '니렝',
    query:
      'artworks?&board=isd&board=best&category=고세구&since=20240718&title=&content=&query=dead&query=cat&query=데드&query=캣&query=켓&query=강시&query=키랏&query=처음 보냐&query=뉴의상&query=빌런&query=신의상&query=qfr',
  },
  // {
  //   id: 8,
  //   value: 'Shuko',
  //   type: 'special',
  //   title: '기간한정 슛코☆팬아트',
  //   subTitle: '기간한정 슛코☆팬아트', // '😉 응 없어~ 😉',
  //   query: 'wakdu_list?',
  // },
  // {
  //   id: 9,
  //   value: 'AprilFool',
  //   type: 'special',
  //   title: '진짜 만우절 팬아트',
  //   subTitle: '😉 진짜 만우절 팬아트 😉',
  //   query: 'april_fools?',
  //   isHidden: true,
  // },
];

export const MEMBERS: Member[] = [
  {
    id: 1,
    value: 'woowakgood',
    name: '우왁굳',
    author: '우왁굳',
    query: 'gallery?member=woowakgood',
    personalColor: 'green',
    personalColor2: '#93bf85',
    greetings: '스시,샐러드,미소국',
  },
  {
    id: 2,
    value: 'ine',
    name: '아이네',
    author: '아이네',
    query: 'gallery?member=ine',
    personalColor: '#8a2be2',
    personalColor2: '#cc9af2',
    greetings: '음~하이네',
  },
  {
    id: 3,
    value: 'jingburger',
    name: '징버거',
    author: '징버거',
    query: 'gallery?member=jingburger',
    personalColor: '#F7B321',
    personalColor2: '#ffd897',
    greetings: '하이부가',
  },
  {
    id: 4,
    value: 'lilpa',
    name: '릴파',
    author: '릴파 LILPA',
    query: 'gallery?member=lilpa',
    personalColor: '#5E4BD1',
    personalColor2: '#b6a2ea',
    greetings: '리라리라',
  },
  {
    id: 5,
    value: 'jururu',
    name: '주르르',
    author: '주르르',
    query: 'gallery?member=jururu',
    personalColor: '#F44099',
    personalColor2: '#ffa9cb',
    greetings: '콘르르',
  },
  {
    id: 6,
    value: 'gosegu',
    name: '고세구',
    author: '고세구',
    query: 'gallery?member=gosegu',
    personalColor: '#418DF4',
    personalColor2: '#b0c4fb',
    greetings: '하이빵까루',
  },
  {
    id: 7,
    value: 'viichan',
    name: '비챤',
    author: '비챤',
    query: 'gallery?member=viichan',
    personalColor: '#59BE43',
    personalColor2: '#b2dfa1',
    greetings: '하이하이',
  },
  {
    id: 8,
    value: 'gomem',
    name: '고멤/교멤',
    author: '고멤',
    query: 'gallery?member=gomem',
    personalColor: 'green',
    greetings: '왁굳님!!',
  },
  // { id: 10, name: '뢴트게늄', value: 'rt' },
];

export const LATEST_GALLERY_LIST = GALLERY_LIST.reverse();

export default GALLERY_LIST;
