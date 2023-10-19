import Navigation from "@/app/components/navigation";
import VideoPlayer from "@/app/components/videoPlayer";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/app/components/videoPlayer"), {
  ssr: false,
});

export default function Page({ params }: { params: { id: number } }) {
  const source = [
    "https://m3u.haiwaikan.com/xm3u8/8b7eb51690aae383f010a97f14e322e3708870b262c5858e5b0d97a85b5a6deb9921f11e97d0da21.m3u8",
    "https://m3u.haiwaikan.com/xm3u8/ba3f06fd89593d531c0973a76d78e7647b08c55c58be19ce4ad61e60bb308e859921f11e97d0da21.m3u8",
    "https://m3u.haiwaikan.com/xm3u8/dccade703e5a356690116e1882a4954ad5bd169ba1cf4659c81203dc94996a229921f11e97d0da21.m3u8",
  ];

  const video = {
    id: params.id,
    url: source[params.id - 1],
  };

  return (
    <div
      className="
    flex
    flex-col 
    items-center
    w-full
    xl:w-4/5
    h-full
    xl:m-auto
  "
    >
      <Navigation />
      <NoSSR {...video} />
    </div>
  );
}
