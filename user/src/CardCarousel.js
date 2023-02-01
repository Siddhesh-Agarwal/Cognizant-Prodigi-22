import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div class="lg:ml-36 ml-20">
                <Slider {...settings}>
                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Prithika</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Samyuktha</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Bala Velan</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Siddhesh Agarwal</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Rithik Raj</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Priya A</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Shwetha</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                    <div>
                        <div class="bg-blue-600 max-w-sm rounded overflow-hidden shadow-lg ml-4">
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Sneha</div>
                                <p class="text-white text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div></div>
                    </div>

                </Slider>
            </div>
        );
    }
}
