import React from "react";

const AboutUs = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4 display-5 fw-bold text-primary">🌟 About Us</h2>

    <div className="mb-4">
      <p className="fs-5 fst-italic">
        Welcome to <strong>Indi Secure</strong> where passion meets purpose in education. Programming is all about curiosity and practice.
      </p>
      <p className="fs-6 text-body-emphasis ">
        We blend modern technologies with real-world applications to empower learners of all backgrounds to thrive.
        Our expert instructors and project-driven learning approach ensure that students gain not just knowledge, 
        but confidence to innovate and lead.
      </p>
    </div>

    <div className="row text-center mb-5">
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm bg-light">
          <h4 className="text-success">🚀 Our Mission</h4>
          <p>To ignite curiosity and cultivate practical skills through immersive, hands-on learning.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm bg-light">
          <h4 className="text-warning">🎯 Our Vision</h4>
          <p>To be a leading tech education hub that bridges the gap between learners and industry opportunities.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 border rounded shadow-sm bg-light">
          <h4 className="text-info">💡 What We Offer</h4>
          <p>
            Courses in Full Stack, Data Science, Design, DevOps & more — tailored for beginners & professionals.
          </p>
        </div>
      </div>
    </div>

    {/* Relocated image right before the contact block */}
    <div className="mb-4 text-center">
      <img
        src="./code.jpg"
        alt="Learning Environment"
        className="img-fluid rounded shadow-sm"
      />
    </div>

    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="text-center bg-white p-4 border rounded shadow-sm">
          <h5 className="mb-3">📞 Get in Touch</h5>
          <p><strong>Email:</strong> indi.bhopal@gmail.com</p>
          <p><strong>Address:</strong> Plot # 9, MP Nagar Zone-1, Bhopal-462011, MP.</p>
          <p><strong>Mobile Number:</strong> +91 8839331601, +91 9223504014</p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
