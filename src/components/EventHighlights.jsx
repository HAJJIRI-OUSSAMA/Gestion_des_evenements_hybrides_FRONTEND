import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function EventHighlights() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Events
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold text-blue-600">
                Event Name
              </h3>
              <p className="text-gray-600 mt-2">Date: January 15, 2025</p>
              <p className="text-gray-600 mt-1">Mode: Online</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides for additional events */}
        </Swiper>
      </div>
    </section>
  );
}
