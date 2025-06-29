import React from "react";

export function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="./index.html"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <span className="mb-3 mb-md-0 text-body-secondary">
              Pontus Rodmalm - 2025
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
