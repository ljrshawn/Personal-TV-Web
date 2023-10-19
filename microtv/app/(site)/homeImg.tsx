import ImageSlider from "./imageSlider";

const sliders = [
  {
    id: 1,
    url: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
    name: "Endgame",
  },
  {
    id: 2,
    url: "https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_794xN.1506815473_lb94.jpg",
    name: "Endgame1",
  },
  {
    id: 3,
    url: "https://i.etsystatic.com/13367669/r/il/706a6e/2401987516/il_794xN.2401987516_mbro.jpg",
    name: "Endgame2",
  },
];

export default function HomeImg() {
  return (
    <div className="container items-center justify-between w-full h-3/4 m-auto px-4">
      <ImageSlider sliders={sliders} />
    </div>
  );
}
