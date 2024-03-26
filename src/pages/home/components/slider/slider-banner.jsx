import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../serivces/query/useGetBanner";
import Skeleton from "react-loading-skeleton";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "38px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "38px",
        zIndex: "49",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const Banner = () => {
  const { data, isLoading } = useGetBanner();

  return (
    <Slider {...settings}>
      {isLoading ? 
      <div>
        <div className="flex items-center justify-center">
          <Skeleton count={1} width={1440} height={200} />
        </div>
      </div>
      :
      data?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="img" />
        </div>
      ))
      }
      
    </Slider>
  );
};
