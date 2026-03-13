// components/Footer/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light mt-auto py-4 border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <h5>About Us</h5>
            <p>Aim</p>
            <p>Vision</p>
            <p>Testimonials</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Services</h5>
            <p>Writing</p>
            <p>Internship</p>
            <p>Teaching</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Locations</h5>
            <p>Bangalore</p>
            <p>UAE</p>
            <p>Tamilnadu</p>
            <p>Kerala</p>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>

        <div className="text-center mt-3">
          &copy; {new Date().getFullYear()} Your Company Name
        </div>
      </div>
    </footer>
  );
}