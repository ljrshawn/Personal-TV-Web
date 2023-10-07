import Image from "next/image";

export default function HomeImg() {
  return (
    <div>
      <Image
        className="flex items-center justify-between"
        src={
          "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg"
        }
        alt="Endgame"
        width={360}
        height={120}
      />
    </div>
  );
}
