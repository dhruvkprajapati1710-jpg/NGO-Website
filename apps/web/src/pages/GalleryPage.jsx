import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Classroom Images
import classroom1 from "../gallery/classroom1.jpeg";
import classroom2 from "../gallery/classroom2.jpeg";
import classroom3 from "../gallery/classroom3.jpeg";

// Library Images
import library1 from "../gallery/library1.jpeg";
import library2 from "../gallery/library2.jpeg";
import library3 from "../gallery/library3.jpeg";

//Computer and Creative Lab images
import computerLab1 from "../gallery/computerLab1.jpeg";
import creativeLab1 from "../gallery/creativeLab1.jpeg";
import creativeLab2 from "../gallery/creativeLab2.jpeg";

// Library Images
import diningHall1 from "../gallery/diningHall1.jpeg";

//Rooms
import room1 from "../gallery/room1.jpeg";
import room2 from "../gallery/room2.jpeg";
import room3 from "../gallery/room3.jpeg";
import room4 from "../gallery/room4.jpeg";

//Yoga and All
import ipsVisit from "../gallery/ipsVisit.jpeg";
import Yoga from "../gallery/Yoga.jpeg";
import CommunityEvent from "../gallery/CommunityEvent.jpeg";


const GalleryPage = () => {
  const gallerySections = [
    {
      title: "Classrooms",
      description:
        "Smart and comfortable learning spaces designed to help children grow academically.",
      images: [
        classroom1,
        classroom2,
        classroom3
      ]
    },

    {
      title: "Library",
      description:
        "Books and learning resources that encourage curiosity and knowledge.",
      images: [
       library1,
       library2,
       library3
      ]
    },

    {
      title: "Computer And Creative Lab",
      description:
        "Our Computer and Creative Lab provides students with access to digital learning, innovation, hands-on projects, and modern technologies that encourage creativity and practical skills.",
      images: [
        computerLab1,
        creativeLab1,
        creativeLab2
      ]
    },

    {
      title: "Dining Hall",
      description:
        "Nutritious meals and a warm environment where children eat together as a family.",
      images: [
        diningHall1
      ]
    },

    {
      title: "Residential Rooms",
      description:
        "Our residential rooms provide a safe, clean, and comfortable environment where children live together as a family and experience a caring home atmosphere.",
      images: [
        room1,
        room2,
        room3,
        room4
  ]
},

    {
      title: "Activities & Events",
      description:
        "Yoga, Visits, celebrations and community engagement.",
      images: [
        ipsVisit,
        Yoga,
        CommunityEvent
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gallery - Gokul Ashram Shala</title>
        <meta
          name="description"
          content="View photos of our facilities, programs, and the children at Gokul Ashram Shala."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Photo Gallery
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A glimpse into the daily lives, activities, and facilities
                  that make up the Gokul Ashram Shala community.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="space-y-20">
                {gallerySections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold mb-4">
                      {section.title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                      {section.description}
                    </p>

                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation
                      pagination={{ clickable: true }}
                      spaceBetween={20}
                      slidesPerView={1}
                    >
                      {section.images.map((image, i) => (
                        <SwiperSlide key={i}>
                          <div className="rounded-3xl shadow-lg bg-gray-100 p-4 flex justify-center items-center">
                            <img
                              src={image}
                              alt={section.title}
                              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                              loading="lazy"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;