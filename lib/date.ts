import { format, sub } from 'date-fns';

// 오늘부터 1일 전
export const getOnDayAgo = () => {
  const today = new Date();
  const oneDayAgo = sub(today, { days: 1 });
  const since = format(oneDayAgo, 'yyyyMMdd');
  const until = format(today, 'yyyyMMdd');
  return { since, until };
};

// 오늘부터 1주일 전
export const getOnWeekAgo = () => {
  const today = new Date();
  const oneWeekAgo = sub(today, { weeks: 1 });
  const since = format(oneWeekAgo, 'yyyyMMdd');
  const until = format(today, 'yyyyMMdd');
  return { since, until };
};

// 오늘부터 1개월 전
export const getOnMonthAgo = () => {
  const today = new Date();
  const oneMonthAgo = sub(today, { months: 1 });
  const since = format(oneMonthAgo, 'yyyyMMdd');
  const until = format(today, 'yyyyMMdd');
  return { since, until };
};

// 오늘부터 6개월 전
export const getOnSixMonAgo = () => {
  const today = new Date();
  const sixMonthAgo = sub(today, { months: 6 });
  const since = format(sixMonthAgo, 'yyyyMMdd');
  const until = format(today, 'yyyyMMdd');
  return { since, until };
};

// 오늘부터 1년 전
export const getOnYearAgo = () => {
  const today = new Date();
  const oneYearAgo = sub(today, { years: 1 });
  const since = format(oneYearAgo, 'yyyyMMdd');
  const until = format(today, 'yyyyMMdd');
  return { since, until };
};

export const getPriod = (dateType: string) => {
  switch (dateType) {
    case 'day': {
      const { since, until } = getOnDayAgo();
      return `&since=${since}&until=${until}`;
    }
    case 'week': {
      const { since, until } = getOnWeekAgo();
      return `&since=${since}&until=${until}`;
    }
    case 'mon': {
      const { since, until } = getOnMonthAgo();
      return `&since=${since}&until=${until}`;
    }
    case 'sixMon': {
      const { since, until } = getOnSixMonAgo();
      return `&since=${since}&until=${until}`;
    }
    case 'year': {
      const { since, until } = getOnYearAgo();
      return `&since=${since}&until=${until}`;
    }
    default:
      return '';
  }
};
