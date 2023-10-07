import Navigation from "@/app/components/navigation";
import HomeImg from "@/app/(site)/homeImg";

export default function Home() {
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
      <HomeImg />
    </div>
  );
}
