import { Link } from "@tanstack/react-router";
import useViewModel from "./SocialsVM";

const Socials = () => {
  const { reactWebsites } = useViewModel();

  return (
    <div className="h-[100px] w-[100vw] flex flex-col md:flex-row justify-between bg-white items-center px-12">
      <p className="order-1 text-base md:text-lg text-primary">
        websites and apps that use react
      </p>
      <div className="flex items-center justify-around gap-12 md:order-2">
        {reactWebsites.map((website, index) => {
          return (
            <Link key={index} to={website.link} target="_blank">
              <img
                src={website.img}
                alt={website.name}
                className=" h-[60px]  object-contain"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
