interface View {
  name: string;
  value: string;
  colorScheme: string;
}

export const viewTypes: View[] = [
  { name: '베스트', value: 'best_cnt', colorScheme: 'red' },
  { name: '금손 작가', value: 'goldhand_cnt', colorScheme: 'yellow' },
  { name: '우왁굳', value: 'wak_cnt', colorScheme: 'green' },
  { name: '고멤/교멤', value: 'gomem_cnt', colorScheme: 'teal' },
  { name: '이세돌', value: 'isd_cnt', colorScheme: 'pink' }, // 추천
];

interface Sort {
  name: string;
  value: string;
}

export const sortTypes: Sort[] = [
  { name: '총 조회', value: 'total_views' },
  { name: '총 댓글', value: 'total_comments' },
  { name: '총 좋아요', value: 'total_likes' },
  { name: '총 작품', value: 'total_cnt' },
];

export const menuItems = [
  { id: 'alzaltak', label: '알잘딱순' },
  { id: 'random', label: '랜덤순' },
  { id: 'latest', label: '최신순' },
  { id: 'oldest', label: '업로드순' },
  { id: 'view', label: '조회수순' },
  { id: 'like', label: '좋아요순' },
  { id: 'comment', label: '댓글순' },
];

export const sampleData = {
  꺼녁: {
    total_cnt: 109,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 57,
    gomem_cnt: 11,
    wak_cnt: 20,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA5MDRfMTgg/MDAxNjkzODMyOTM3Njc0.RjtvG3mOLbnQu0nVriBi7-hkjSTpS8NhHsCyhvEm37gg.SH3kw5ZHtGGaLkPr8O2uwoh7oCNK43-q3GXWb2u1M3cg.JPEG/externalFile.jpg',
    total_views: 44410,
    total_likes: 2708,
    total_comments: 1555,
  },
  낼름낼름: {
    total_cnt: 7,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 3,
    wak_cnt: 3,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 2158,
    total_likes: 35,
    total_comments: 55,
  },
  홍킬동: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjAyMjVfNDQg/MDAxNjQ1NzIxMDAzOTUx.nTfGuDYwWPITjRRZOjHhTmSRoLkWzUSPvOxvWkXlezUg.s6WWyWZCBp52A1lRkK3mYy8u6QNfSHhGHZGTxOluGGcg.JPEG/externalFile.jpg',
    total_views: 120,
    total_likes: 1,
    total_comments: 2,
  },
  뚤기박사: {
    total_cnt: 16,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 6,
    gomem_cnt: 9,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjExMDNfOSAg/MDAxNjY3NDc2MDM5OTI1.Ao_NeGz7JPGEuylfbjW16-Q1yuADN0kUwMF8Ukoxct8g.7tFB4ATnAigCapvZyjt73SGsCHtpYkJ8pDeGj6I6bgkg.PNG/98_.png',
    total_views: 6668,
    total_likes: 236,
    total_comments: 115,
  },
  '야가다 팬치': {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 1,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA1MTlfMjY0/MDAxNjg0NDkwNDU0NDY0.yR_VFV7NClOdI3NmEyEWT1jdb_JMwtjRAwn_GzH3Mm0g.4ZO-0iMeqlYphw-ZRISuYoHrW3lm4cSJR_BcDo7qWtMg.JPEG/externalFile.jpg',
    total_views: 1533,
    total_likes: 35,
    total_comments: 85,
  },
  '햄이네 ㄱㅇㅇ': {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MTdfMjMg/MDAxNjUwMTUyNTU2MzIz.9qrsjwhWMVna54fm1Vve5qHl_TXh20_ZRfDo_gRy_GYg.qSNLp8sBy8A_c382OthC73qkR46Bb203DtXvOgx3zgkg.JPEG/externalFile.jpg',
    total_views: 341,
    total_likes: 6,
    total_comments: 18,
  },
  웅앵웅초키포키: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 318,
    total_likes: 12,
    total_comments: 9,
  },
  고들갑: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA0MjlfMTcg/MDAxNjgyNzAyNzI3MTcz.rRWGu6ge1PdqtEMtad7N1b8O09BJFRRHxnHucv-EuxYg.gKVxqGrQ0OzB-Wob2BMrCFKc-L0wiZfi1oY1fkoEy9og.JPEG/externalFile.jpeg',
    total_views: 269,
    total_likes: 4,
    total_comments: 8,
  },
  호달달: {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MTdfMjgx/MDAxNjUwMTYxMzgyODIx.9eWGbVNNX3ymPYMdTrU9GrgIzYUItZGIGXx0EzJHQVkg.wgaXboggj87dGIHUo1NCC4uqmBY-PFxDhUBP1ZaHIX0g.JPEG/20220326_171637.jpg',
    total_views: 217,
    total_likes: 5,
    total_comments: 8,
  },
  뿌딕굳: {
    total_cnt: 14,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 12,
    gomem_cnt: 0,
    wak_cnt: 2,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 8620,
    total_likes: 789,
    total_comments: 297,
  },
  왁만치: {
    total_cnt: 4,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 1,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjEwMTBfMTUz/MDAxNjY1NDA0OTYzNTcy.-_zxWM2gB80ygX8VhIK5LzzYwYLa7fIy8a0R_QJk-0og.-rdc21L9vG5T3qIOyun7wNH4eVCyPLl00cRjCHYaEQEg.PNG/%25ED%258E%2598%25ED%258E%2598%25EB%2594%25B0%25EB%25B4%2589%25EB%259D%25A0.png',
    total_views: 370,
    total_likes: 11,
    total_comments: 15,
  },
  Hyun99: {
    total_cnt: 20,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 11,
    gomem_cnt: 0,
    wak_cnt: 9,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjEwMTRfMjk2/MDAxNjY1NjgwMjI4OTA2.a2KtvLmq7XXCY6PD1VKcPDE_-9pBsldUfChEYa3u_Icg.NMc3lYB_XyHNpZhziz16a_2sEHveE9LZUYQhHQmZncwg.JPEG/dove_bear.jpg',
    total_views: 5750,
    total_likes: 425,
    total_comments: 315,
  },
  슬로우웨건: {
    total_cnt: 4,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 2,
    gomem_cnt: 1,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 476,
    total_likes: 11,
    total_comments: 9,
  },
  parrot: {
    total_cnt: 5,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 2,
    wak_cnt: 2,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 620,
    total_likes: 17,
    total_comments: 25,
  },
  영틱: {
    total_cnt: 3,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 3,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAxODExMTlfMjQ4/MDAxNTQyNjI4NDQ0MDIy.uirZQdPwjYh_utPzWj7S5if4Y219XXCMo4J6XgTC9oAg.xZ88M4lFUMsHM2YccNUjsLEHv_Ri-9vAWo5vuEfCb7Ig.JPEG.eh7489/20180804_222402.jpg',
    total_views: 1109,
    total_likes: 17,
    total_comments: 17,
  },
  이안에이안: {
    total_cnt: 80,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 59,
    gomem_cnt: 9,
    wak_cnt: 4,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzAxMjFfNTEg/MDAxNjc0MjM0MDQ4MDI5.yDlqTq63e_XMxNZHKb-4x4aa0tQvJY1ZppVehJe7rhcg.Uj_O3CCMNE5mtHvs4FOaVRN3DDKXPqE9qDc685vjyNog.JPEG/externalFile.jpg',
    total_views: 15645,
    total_likes: 829,
    total_comments: 653,
  },
  츠암치: {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MThfMjgw/MDAxNjUwMjU2OTcyMjAw.AyzHbuGdacbUKoHfPnWB1B0F3RW4tCKpIwp1LvVvykEg.8hHNBT2IX2HyiiVKQl9uwTKLSXCPqwqqQWZ3XUWFNbcg.JPEG/externalFile.jpg',
    total_views: 207,
    total_likes: 10,
    total_comments: 14,
  },
  김치치즈스마일: {
    total_cnt: 14,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 12,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MTZfNjEg/MDAxNjUwMTAwODcwODYx.q7_nmerHvs9GuyQDlLKWTU7N-n7aUIFWxAJnoWxH26wg.KC_IA9rKaGMo2n3WaB_Y-6wy1-IBw03odQAYdn4I-28g.JPEG/externalFile.jpg',
    total_views: 2481,
    total_likes: 28,
    total_comments: 57,
  },
  '발없는 둘기': {
    total_cnt: 14,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 3,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA0MDFfMTQ0/MDAxNjgwMjc2NTk1ODE3.OyRCItDBO_k_xFwZB2OlfEXBjfATA7j-CfP78GDpwIUg.2-gG9zdNcANw8uCgnScroAUkISEcxQVFmShy7FJ_Xmog.JPEG/externalFile.jpg',
    total_views: 724,
    total_likes: 13,
    total_comments: 61,
  },
  사라져빔: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMDExMDdfMjM5/MDAxNjA0NzI3MjQ0NTc2.h9nqv0dT23Tt_o7jKvXpBP5Y_0bB7DwFXjV61HapvhIg.4FndWUXBwhzbBIgHLMDGlz5bXl-jKo1Kni05dPPetjsg.JPEG/07.jpg',
    total_views: 181,
    total_likes: 11,
    total_comments: 14,
  },
  김전구: {
    total_cnt: 7,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 2,
    gomem_cnt: 3,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjAyMTNfMTcy/MDAxNjQ0NzM4ODQ5MTI0.RTeAMigOpE7WJF266ZKvyRfq7zB7qHoOjUs5QmCdTPMg.1H_rE6hBV5bRU-57lbSWfF4sWNaiz_53s9Mr6ln0VZEg.JPEG/unnamed.jpg',
    total_views: 2812,
    total_likes: 186,
    total_comments: 117,
  },
  왁두괄식: {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMTZfMjk2/MDAxNjcxMTY0OTQyODU3.FCNWKmHLfUNFBJBnzxFpybmLaMHmD48Tp9hTUjDRFrIg.UFBnGA_T-KXk8c0V3aTK4Eddn7OBHvYL6uaFrNQm1QMg.JPEG/externalFile.jpg',
    total_views: 3431,
    total_likes: 45,
    total_comments: 34,
  },
  하이퍼센트: {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 2,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 373,
    total_likes: 13,
    total_comments: 28,
  },
  monijin: {
    total_cnt: 3,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 2,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MTdfMTUw/MDAxNjUwMTg1ODI3Nzc2.NFvZAGxSc5Fc-Jnei9bZ7yYKTRttH2etAcoF2vzzjSAg.KlcZCnHDia_x6HNjR_6_ZLCb-SYosnAPXRnt4EvxW4Eg.PNG/profile5.png',
    total_views: 1028,
    total_likes: 64,
    total_comments: 40,
  },
  뚜니니: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 119,
    total_likes: 3,
    total_comments: 2,
  },
  공갈빵먹고파: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA0MTVfMjYz/MDAxNjgxNTE3Mjc4NzI3.g64P32e_ZTNdP0kb2jrhFazX-Y2zG65-ScWVn0MwBhgg.WhS6RqqCEDdxg7D2MNYaYpsgEO-aKO7OkFjtdQ_Iws8g.JPEG/%25EC%258B%259C%25EA%25B0%2584_%25EB%2596%25BC%25EC%259A%25B0%25EB%258A%2594_%25EC%25B9%25A8%25ED%258C%25AC%25EC%25B9%2598.jpg',
    total_views: 156,
    total_likes: 8,
    total_comments: 8,
  },
  오락반장: {
    total_cnt: 2,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 214,
    total_likes: 8,
    total_comments: 19,
  },
  ㅌㅐ: {
    total_cnt: 51,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 48,
    gomem_cnt: 0,
    wak_cnt: 3,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA2MTNfMjMz/MDAxNjU1MDU3MTA4NDgw.v2gkIQlRFAA8ffdPjZla5nNQ7TcYyIqdfhkPbPBK1vog.s66fX3Oqv-yQxjCFQpcdsn_YXfLAzfUpLEYyHw1sFX8g.PNG/%25EC%25BA%258E%25ED%2594%2584.png',
    total_views: 49451,
    total_likes: 6644,
    total_comments: 2486,
  },
  류적필: {
    total_cnt: 4,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA1MjRfMTQy/MDAxNjUzMzQ2NDI1MDk1.OZNw-GSQIGzIpiMPLi9kEd-FlxKDebmp1w33AV8uBdQg.diq-a8oQLiRqr7AJK_6SvP5NodKuzBlueFCWS4IuxRUg.PNG/externalFile.png',
    total_views: 70,
    total_likes: 1,
    total_comments: 8,
  },
  김민찌: {
    total_cnt: 5,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 401,
    total_likes: 16,
    total_comments: 14,
  },
  '왕코의 팬티': {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA1MTlfMjY0/MDAxNjg0NDkwNDU0NDY0.yR_VFV7NClOdI3NmEyEWT1jdb_JMwtjRAwn_GzH3Mm0g.4ZO-0iMeqlYphw-ZRISuYoHrW3lm4cSJR_BcDo7qWtMg.JPEG/externalFile.jpg',
    total_views: 208,
    total_likes: 6,
    total_comments: 13,
  },
  모크나: {
    total_cnt: 5,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 2,
    gomem_cnt: 1,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMjA0MTBfMjgw/MDAxNjQ5NTg0NDY0MDE0.NhyiPZs8zgeRl2B-7zYr1tWfTejNTND6DIZ-nLGC5C8g.qeJgHaN0-LZmt5wv2rB4fbqmUQEaer2h9jNcI_PmBx4g.PNG/%25ED%2599%2594%25EB%25A9%25B4_%25EC%25BA%25A1%25EC%25B2%2598_2022-04-10_185321.png',
    total_views: 1188,
    total_likes: 43,
    total_comments: 29,
  },
  밤서: {
    total_cnt: 3,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 1,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMzA1MjVfMjEz/MDAxNjg0OTQwNTYwNjA2.7GFxEoHDIEPo1RgPIzeoCxWHONpWaioH4cNYjwmL0RYg.LtbrPy528LdN7tYDnYL-0q6Dsu9wdyhIaCDStz18WmIg.JPEG/externalFile.jpeg',
    total_views: 738,
    total_likes: 52,
    total_comments: 35,
  },
  오리왁구리: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png',
    total_views: 109,
    total_likes: 1,
    total_comments: 6,
  },
  무능한대학생: {
    total_cnt: 28,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 20,
    gomem_cnt: 4,
    wak_cnt: 2,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAyMTEyMjNfNTgg/MDAxNjQwMjA3NTQ2NjY5.8b3lobrrqB-HujkM1B8Nh71Pa0NNKMlxeKuadcUQFp0g.RGusQL1kdYbvaz6CDoPs2UQRKW1e9jW_nMkxIekdMEsg.JPEG/externalFile.jpg',
    total_views: 11857,
    total_likes: 798,
    total_comments: 431,
  },
  지능형팬치: {
    total_cnt: 1,
    best_cnt: 0,
    goldhand_cnt: 0,
    isd_cnt: 0,
    gomem_cnt: 0,
    wak_cnt: 1,
    prof_url:
      'https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTBfMjI3/MDAxNTc1OTcwNzUxNDE5.-xO4oqalEMlyjeIvDZT0frVkfkq6o2lI1-JpGLAicSQg.ULsSy1LONv2A213RN38q3wZpNlKpbkoeB5ms7tEKpNAg.JPEG/download.jpeg-7.jpg',
    total_views: 82,
    total_likes: 2,
    total_comments: 6,
  },
};
