"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

   useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <div >
      {/* Banner Carousel */}
      <div id="carouselExample" className="carousel slide m-0">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/assets/banner1.webp"
              alt="Banner 1"
              width={1200}
              height={400}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/assets/banner2.webp"
              alt="Banner 2"
              width={1200}
              height={400}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/assets/banner3.webp"
              alt="Banner 3"
              width={1200}
              height={400}
              className="d-block w-100"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Offer Section */}
      <br />
      <div className="container-fluid mx-2">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <Image
              src="/assets/fitness-offer.webp"
              alt="Fitness Kit"
              width={300}
              height={300}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Fitness Kit</h5>
              <p className="card-text">Special Offer</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image
              src="/assets/jacket-offer.webp"
              alt="Men's Jackets"
              width={300}
              height={300}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Men's Jackets</h5>
              <p className="card-text">Min.50% off</p>
            </div>
          </div>
        </div>

         <div className="col">
          <div className="card h-100">
            <Image
              src="/assets/toy-offer.webp"
              alt="Men's Jackets"
              width={300}
              height={300}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Toys</h5>
              <p className="card-text">Min.50% off</p>
            </div>
          </div>
        </div>
        

        <div className="col">
          <div className="card h-100">
            <Image
              src="/assets/cycle-offer.webp"
              alt="Men's Jackets"
              width={300}
              height={300}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Toys</h5>
              <p className="card-text">Min.50% off</p>
            </div>
          </div>
        </div>
      </div>
</div>
      {/* Top Smartphone Overlay */}
      <br />
      <div className="card text-bg-dark">
        <Image
          src="/assets/top-smartphone-offer.webp"
          alt="Smartphone Offer"
          width={1200}
          height={400}
          className="card-img"
        />
        <div className="card-img-overlay">{/* overlay text here */}</div>
      </div>
      <br />
    </div>
   
  );
}