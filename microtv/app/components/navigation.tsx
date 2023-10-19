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
        w-full
        p-2
        lg:w-1/3
        lg:m-auto
        text-base
        border-microtv-600
        border-dashed
        border-2
        rounded-full
        focus-within:border-none
      "
      >
        <input
          className="
            placeholder:text-microtv-50
            placeholder:italic
            bg-background-800
            focus:bg-microtv-50
            focus:text-background-800
            focus:outline-microtv-600
            focus:outline-2
            focus:outline-none
            rounded-l-full
            w-full
            h-10
            pl-10
            "
          placeholder="Search for something..."
          type="text"
          name="search"
        />
        <button
          className="
            flex
            ml-2
            rounded-r-full
            active:text-microtv-300
            bg-microtv-500
          "
          type="submit"
        >
          <span
            className="
            p-2
            xl:text-2xl
            material-icons-outlined
          "
          >
            search
          </span>
        </button>
      </div>
    </div>
  );
}
