import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components-ui/ui/carousel";

const UserCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="">
          <CarouselItem>
            <img src="/public/img/Untitled2.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/public/img/Untitled1.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="/public/img/Untitled4.png" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default UserCarousel;
