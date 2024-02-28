import { Link } from "@tanstack/react-router";
import useViewModel from "./FooterVM";
import { Boxes } from "../Boxes/Boxes";

const Footer = () => {
  const { links } = useViewModel();

  return (
    <footer className="flex flex-col gap-2 md:flex-row w-full p-6 pb-10 min-h-[240px] text-white px-12 justify-between relative overflow-hidden">
      <Boxes />
      <div className="flex flex-col w-full gap-6 md:w-2/4 ">
        <h4 className="z-10 text-2xl text-center md:text-3xl">Follow US</h4>
        <div className="grid grid-cols-2 gap-6 ">
          {links.map((item, index) => {
            const { img, link, title } = item;
            return (
              <Link
                to={link}
                key={index}
                className="z-10 flex items-center gap-3"
              >
                <img src={img} alt={title} />
                <span className="text-base md:text-lg">{title}</span>
              </Link>
            );
          })}
        </div>
        <h3 className="absolute bottom-0 z-10">
          {" "}
          @CopyRights to TAKOUR MOHAMED TAHAR
        </h3>
      </div>
      <div className="z-10 md:w-1/3 w-full h-[220px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4145.775102882439!2d3.4696312707293613!3d36.75066049386996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e688d16851b83%3A0xd9b6c88acb9517ba!2sFaculty%20of%20Sciences%20-%20University%20of%20M&#39;hamed%20Bougara%20Boumerdes%20(FS%20UMBB)(INIM)!5e0!3m2!1sen!2sdz!4v1708471874238!5m2!1sen!2sdz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
