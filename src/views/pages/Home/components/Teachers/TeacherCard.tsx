import { BlackFacebook, BlackInstagram, BlackLinkedIn } from "@/assets/icons";
import { meImage } from "@/assets/images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";

type teacherCardType = {
  index: number;
};

const TeacherCard = ({}: teacherCardType) => {
  return (
    <CarouselItem className="flex justify-center w-full ">
      <div className="md:w-3/4 w-full p-1 h-[50vh] ">
        <Card className="w-full h-full ">
          <CardContent className="flex flex-col items-center h-full gap-4 md:justify-end md:p-3 ">
            <div className="flex justify-between mt-auto text-primary-foreground">
              <CardHeader className="w-1/3 md:w-1/4">
                <img
                  src={meImage}
                  alt="Takour mohamed"
                  className="md:w-[200px] md:h-[200px] w-[130px] h-[130px] rounded-[50%] object-cover object-right "
                />
              </CardHeader>
              <Separator
                orientation="vertical"
                className="w-0.5 h-[60%] mt-12 bg-primary-foreground"
              />
              <div className="flex flex-col items-start w-1/2 gap-6 md:w-2/3">
                <CardTitle className="text-2xl font-semibold sm:text-3xl md:text-4xl ">
                  Takour Mohamed
                </CardTitle>
                <CardDescription className="w-[85%] md:text-lg sm:text-sm text-xs text-primary-foreground">
                  Second Year ILTI master student at UMBB and a passionate
                  developer in web technologies. and a Full stack web developer
                  , currently working as Frontend developer
                </CardDescription>
              </div>
            </div>
            <CardFooter className="flex items-center justify-center w-full h-16 gap-4 p-0 ">
              <Link
                to="https://www.facebook.com/moh.tako.9?mibextid=ZbWKwL"
                target="_blank"
              >
                <img src={BlackFacebook} alt="black facebook" />
              </Link>
              <Link
                to="https://www.instagram.com/ta_ko01?igsh=eXdmYzB1MXRwbDh2"
                target="_blank"
              >
                <img src={BlackInstagram} alt="black instagram" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mouhamed-takour-95797a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img src={BlackLinkedIn} alt="black linkedIn" />
              </Link>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default TeacherCard;
