"use client";

import { useState } from "react";
import Image from "next/image";

interface SliderItem {
  id: number;
  url: string;
  name: string;
}

interface ImageSliderProps {
  sliders: SliderItem[];
}

export default function ImageSlider({ sliders }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlides = currentIndex === 0;
    const newIndex = isFirstSlides ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlides = currentIndex === sliders.length - 1;
    const newIndex = isLastSlides ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="
        relative
        lg:w-1/3
        h-4/5
        items-center justify-between m-auto
      "
    >
      <div
        className="
          absolute
          top-1/2
          left-0
          text-5xl
          translate-x-1/2
          text-white
          z-10
          cursor-pointer
        "
        onClick={goToPrevious}
      >
        &lt;
      </div>
      <Image
        className="
        object-fill
        h-full
        m-auto
        "
        src={sliders[currentIndex].url}
        alt={sliders[currentIndex].name}
        fill={true}
      />
      <div
        className="
          absolute
          top-1/2
          right-0
          text-5xl
          -translate-x-1/2
          text-white
          z-10
          cursor-pointer
        "
        onClick={goToNext}
      >
        &gt;
      </div>
      <div
        className="
      absolute
      bottom-0
      right-0
      text-2xl
      text-mono
      opacity-80
      bg-background-200
      text-microtv-400
      hover:opacity-100
      rounded-lg
      p-2
      m-2
      "
      >
        <a href={`/movies/${sliders[currentIndex].id}`}>Watch</a>
      </div>
    </div>
  );
}
