interface Member {
  id: number;
  value: string;
  name: string;
  author: string;
  query?: string;
  personalColor?: string;
  personalColor2?: string;
}

const members: Member[] = [
  {
    id: 1,
    value: 'woowakgood',
    name: '우왁굳',
    author: '우왁굳',
    query: 'gallery?member=woowakgood',
    personalColor: 'green',
    personalColor2: '#93bf85',
  },
  // {
  //   id: 2,
  //   value: 'isd',
  //   name: '이세돌',
  //   author: '이세돌',
  //   query: 'gallery?member=isd',
  // },
  {
    id: 3,
    value: 'ine',
    name: '아이네',
    author: '아이네',
    query: 'gallery?member=ine',
    personalColor: '#8a2be2',
    personalColor2: '#cc9af2',
  },
  {
    id: 4,
    value: 'jingburger',
    name: '징버거',
    author: '징버거',
    query: 'gallery?member=jingburger',
    personalColor: '#F7B321',
    personalColor2: '#ffd897',
  },
  {
    id: 5,
    value: 'lilpa',
    name: '릴파',
    author: '릴파 LILPA',
    query: 'gallery?member=lilpa',
    personalColor: '#5E4BD1',
    personalColor2: '#b6a2ea',
  },
  {
    id: 6,
    value: 'jururu',
    name: '주르르',
    author: '주르르',
    query: 'gallery?member=jururu',
    personalColor: '#F44099',
    personalColor2: '#ffa9cb',
  },
  {
    id: 7,
    value: 'gosegu',
    name: '고세구',
    author: '고세구',
    query: 'gallery?member=gosegu',
    personalColor: '#418DF4',
    personalColor2: '#b0c4fb',
  },
  {
    id: 8,
    value: 'viichan',
    name: '비챤',
    author: '비챤',
    query: 'gallery?member=viichan',
    personalColor: '#59BE43',
    personalColor2: '#b2dfa1',
  },
  {
    id: 9,
    value: 'gomem',
    name: '고멤/교멤',
    author: '고멤',
    query: 'gallery?member=gomem',
    personalColor: 'green',
  },
  // { id: 10, name: '뢴트게늄', value: 'rt' },
];

export default members;
