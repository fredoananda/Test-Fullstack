import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      headline: "Transforming Ideas into Powerful Digital Solutions",
      description:
        "We turn your ideas into reality by creating robust and innovative digital solutions that drive your business forward. Let us help you unlock the full potential of technology",
    },
    {
      image:
        "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      headline: "Crafting Seamless User Experiences for the Digital",
      description:
        "We specialize in creating intuitive and engaging user experiences that delight your customers. Our team of designers and developers work together to craft seamless digital experiences that leave a lasting impression",
    },
    {
      image:
        "https://images.pexels.com/photos/4939620/pexels-photo-4939620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      headline: "Accelerate Your Development Process with Agile Methodology",
      description:
        "Our Agile development approach ensures faster time-to-market for your products. With iterative development and continuous feedback, we deliver high-quality software solutions that meet your evolving business needs",
    },
    {
      image:
        "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      headline: "Empowering Businesses with Scalable and Secure Solutions",
      description:
        "We empower businesses to thrive in the digital landscape with scalable and secure solutions. From cloud-based architectures to robust cybersecurity measures, we ensure your applications are built to grow and protect your valuable data",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt="Slide" />
          <div className="slide-content">
            <h2>{slide.headline}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
