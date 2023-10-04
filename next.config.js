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
};

module.exports = nextConfig;
