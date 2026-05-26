"use client";

import { Button } from "@heroui/react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

// SWIPER CSS
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight, Play, Star } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://img.magnific.com/free-vector/online-tutorials-concept_52683-37480.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Find expert tutors for every subject.",
    description:
      "Connect with skilled tutors,schedule sessions, and learn from anywhere."
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Book live sessions in minutes.",
    description:
      "Schedule online classes easily with flexible timing.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Learn smarter with MediQueue.",
    description:
      "Interactive learning experience with verified tutors.",
  },
];

export default function Hero() {
  return (
    <section className=" py-2 lg:py-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="rounded-3xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-content1  p-4 lg:p-10">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm animate-bounce-slow">
                    <Star className="w-4 h-4 fill-blue-600" />
                            <span>Trusted by 10,000+ Students Worldwide</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-700 leading-[1.1]">
                            {slide.title}
                        </h1>

                <p className="text-slate-400 leading-relaxed max-w-xl mt-4">
                  {slide.description}
                </p>

                {/* <div className="flex gap-4 mt-8">
                  <Button
                    color="primary"
                    size="lg"
                  >
                    Browse Tutors
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                  >
                    Learn More
                  </Button>
                </div> */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                href="/tutors"
                                color="primary"
                                size="lg"
                                className="h-14 px-10 text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group"
                            >
                                Explore Tutors <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="bordered"
                                size="lg"
                                className="h-14 px-8 text-lg font-bold rounded-full group"
                            >
                                <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform" /> Watch Demo
                            </Button>
                        </div>
              </div>

              {/* RIGHT */}
              <div>
                <img
                  src={slide.image}
                  alt="slider"
                  className="w-full h-[250px] lg:h-[500px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}