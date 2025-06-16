import { Link } from "react-router-dom";

function EventCard({ item }) {
  return (
    <div
      className="dark:bg-[#0f6ba935] card relative w-[90%] h-[48rem] border-2 dark:border-none rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      key={item.id}
    >
      <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%] bg-black">
        <img
          src={item.img}
          className="w-full transition-all hover:scale-110 duration-300 aspect-video object-contain"
          alt=""
        />
      </div>

      <div className="w-[96%] min-h-fit px-4 flex flex-col gap-4 pt-4">
        <p className="relative font-Inclusive  dark:text-white text-4xl text-center">
          {item.name}
        </p>
        <hr className="relative border-slate-700 dark:border-slate-200 border-2" />
        <p className="relative font-Josefin  dark:text-white text-lg">
          {item.description}
        </p>
        <Link
          to={item.link}
          target="_blank"
          className="absolute bottom-12 text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto my-4 px-6 py-3 font-Josefin font-semibold text-lg"
        >
          Website
        </Link>
      </div>

      <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
        Date: {item.date}
      </div>
    </div>
  );
}

export default EventCard;