import React, { useEffect, useRef } from "react";
import "./Article.css";

const Article = () => {
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const article = articleRef.current;
      const articlePosition = article.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (articlePosition < windowHeight / 2) {
        article.classList.add("article-animate");
      } else {
        article.classList.remove("article-animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="article" ref={articleRef}>
      <h1>Alfredo Ananda</h1>
      <h2>PAGES</h2>
      <p>
        Are you looking for a highly skilled and experienced full-stack web
        developer who can handle both frontend and backend development with
        utmost proficiency? Look no further!
      </p>
      <p>
        Whether you need a custom website, a dynamic web application, or an
        e-commerce platform, I have the skills and experience to turn your ideas
        into reality. I am dedicated to delivering projects on time, within
        budget, and exceeding your expectations.
      </p>
      <div className="kartu">
        <div className="container1">
          <div className="card shadow-sm">
            <img
              className="cardimage1"
              src="https://assets.startbootstrap.com/img/screenshots/templates/sb-admin.png"
              alt="Card Image 1"
              style={{ borderRadius: "8px 8px 0 0" }}
            />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <svg className="bd-placeholder1" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="card shadow-sm">
            <img
              className="cardimage2"
              src="https://assets.startbootstrap.com/img/screenshots/themes/stylish-portfolio.png"
              alt="Card Image 1"
              style={{ borderRadius: "8px 8px 0 0" }}
            />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <svg className="bd-placeholder2" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="card shadow-sm">
            <img
              className="cardimage3"
              src="https://assets.startbootstrap.com/img/screenshots/templates/shop-homepage.png"
              alt="Card Image 1"
              style={{ borderRadius: "8px 8px 0 0" }}
            />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <svg className="bd-placeholder3" />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
