// +8
const TIMEZONE_SHIFT_MS = new Date('2016/01/01') - new Date('2016-01-01T00:00:00+08:00');
const digi = (value) => (value < 10 ? `0${value}` : `${value}`);
const getBuildTimeInfo = () => {
  const theDate = new Date(Date.now() + TIMEZONE_SHIFT_MS);
  return [
    theDate.getFullYear(),
    theDate.getMonth() + 1,
    theDate.getDate(),
    theDate.getHours(),
    theDate.getMinutes(),
  ]
    .map(digi)
    .join('-')
    .toString();
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_TIME: getBuildTimeInfo(), // layout.tsx, html 加個 data-build-info，方便確認目前的 build 日期
  },
};

module.exports = nextConfig;
