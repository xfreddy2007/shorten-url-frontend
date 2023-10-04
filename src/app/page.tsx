import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Website Shorten Url</h1>
      <input className="border-[1px] border-solid border-[#000000] p-2 rounded" placeholder="url link" />
    </main>
  );
}
