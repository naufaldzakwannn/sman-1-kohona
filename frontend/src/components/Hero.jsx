import { useState, useEffect } from "react";

function Hero() {
  const slides = [
    {
      id: 1,
      image: "/src/assets/img.jpg",
      text: "",
    },
    {
      id: 2,
      image: "/src/assets/img2.jpg",
      text: "",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}>
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg max-w-3xl">{slides[current].text}</h1>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg transition">Belanja Sekarang</button>
      </div> */}

      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-cyan-400 w-5" : "bg-gray-400"}`} />
        ))}
      </div>
    </section>
  );
}

export default Hero;
