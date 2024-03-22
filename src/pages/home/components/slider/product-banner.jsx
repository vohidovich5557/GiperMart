import React from "react";
import Slider from "react-slick";
import { ArrowLeft } from "../../../../assets/header-icon/arrow-left";
import { ArrowRight } from "../../../../assets/header-icon/arrow-right";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                position: "absolute",
                top: "-20px",
                right: "14px"
            }}
        >
            <span className="absolute -translate-x-1/2 -translate-y-1/2 - top-1/2 left-1/2">
                <ArrowRight />
            </span>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{
                position: "absolute",

                top: "-20px",
                left: "95%",
                zIndex: 4,
            }}
            onClick={onClick}
        >
            <span className="absolute -translate-x-1/2 -translate-y-1/2 bg- - top-1/2 left-1/2">
                <ArrowLeft />
            </span>
        </div>
    );
}

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    // autoplay: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
            },
        },
        {
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
            },
        },

        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,

            },
        }
    ],
};



export const ProductBanner = ({ children }) => {
    return (
        <>
            <div className="relative container ml-auto mr-auto ">
                <Slider {...settings}>{children}</Slider>
            </div>
        </>
    )
}