"use client";

const categories = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Movies",
    url: "/movies",
  },
  {
    name: "Dramas",
    url: "/dramas",
  },
  {
    name: "Animes",
    url: "/animes",
  },
];

export default function Navigation() {
  return (
    <div
      className="
        z-10
        w-full
        py-6
        m-6
        items-center
        justify-between
        text-lg
        flex
        flex-col
      "
    >
      <div
        className="
        w-full
        items-center
        justify-between
        text-lg
        flex
        flex-row
      "
      >
        <a
          className="
          fixed
          flex-auto
          px-6
          justify-center
          w-auto
          font-title
          italic
          font-bold
          lg:text-3xl
          text-microtv-400
          hover:text-microtv-400/60
          active:text-microtv-500
          antialiased hover:subpixel-antialiased
          "
          href="/"
        >
          Micro TV
        </a>
        <div
          className="
          flex-auto
          flex
          justify-end
          px-10
        "
        >
          {categories.map((element) => (
            <a
              className="
            flex
            font-medium
            px-2
            py-1
            m-2
            rounded-lg
            justify-end
            hover:bg-background-700
            hover:text-microtv-500
            active:text-microtv-700
            "
              href={element.url}
              key={element.name}
            >
              {element.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="
        flex
        flex-row
        items-center
        w-1/3
        m-auto
        text-base
      "
      >
        <input
          className="
            placeholder:text-microtv-50
            placeholder:italic
            bg-background-700
            focus:bg-microtv-50
            focus:text-background-800
            focus:outline-microtv-300
            focus:outline
            focus:outline-2
            rounded-lg
            w-full
            h-12
            pl-10
            "
          placeholder="Search for something..."
          type="text"
          name="search"
        />
        <button
          className="
            absolute
            pl-1
          "
          type="submit"
        >
          Sub
        </button>
      </div>
    </div>
  );
}
