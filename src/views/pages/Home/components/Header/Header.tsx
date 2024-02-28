import { headerImage } from "@/assets/images";
import { Button } from "@/components/ui/button";
import "./header.scss";
import { Boxes } from "@/views/components/Boxes/Boxes";
import { Link } from "@tanstack/react-router";
export default function Header() {
  return (
    <section className="relative overflow-hidden home__header my-container">
      <Boxes />

      <article className=" home__header__left">
        <h1 className="z-10 text-6xl text-white lg:text-7xl ">
          <span className="text-secondary">React</span> Bootcamp
        </h1>
        <h4 className="z-10 text-lg md:text-xl">
          Learn React With GDSC UMBB one of the best library for building user
          interfaces
        </h4>
        <p className="z-10 w-3/4 text-xs md:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
        <div className="z-10 flex gap-2">
          <Link to="/initial">
            <Button
              variant={"secondary"}
              className="grid px-8 text-base text-white md:text-lg place-content-center"
            >
              Get started
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="grid px-8 text-lg bg-transparent border-2 border-secondary text-secondary place-content-center hover:bg-secondary hover:text-white"
          >
            Learn more
          </Button>
        </div>
      </article>
      <article className="home__header__right">
        <div className="white"></div>
        <div className="blue"></div>
        <img src={headerImage} alt="header image" className="z-10 w-full" />
      </article>
    </section>
  );
}
