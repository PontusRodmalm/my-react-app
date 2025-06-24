import React from "react";
import "../css/styles.css";

export default function Home() {
  return (
    <div className="container px-4 py-4 home-background" id="home">
      <div className="p-5 rounded text-white transparent-dark">
        <div className="col-sm-8 py-5 mx-auto bg">
          <h1 className="display-5 fw-normal text-center">
            Welcome to Amped Up!
          </h1>
          <p className="fs-5 text-center">
            Your backstage pass to the world of music groups.
          </p>
          <p className="text-center">
            Developed by <strong>Pontus Rodmalm</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
