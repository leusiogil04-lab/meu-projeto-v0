"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface VideoItem {
  id: string;
  title: string;
}

// Usando 'export const' para resolver o erro do Target Module
export const VideoCarousel: React.FC = () => {
  const videos: VideoItem[] = [
    { id: 'sF4NcnIn9LM', title: 'Kaluma Nkhantondoli' },
    { id: 'UjkX8AQl-8M', title: 'Hi Tlhanguela Xinwanana' },
    { id: 'DDOykemRQ9M', title: 'Makolo Anagwila Nchito' },
  ];

  return (
    <section className="bg-[#003d33] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-center mb-12 font-serif text-4xl md:text-5xl font-medium">
         Videos
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          style={{
            //@ts-ignore
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties}
          className="pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-white/80 text-center mt-4 font-light italic">
                {video.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};