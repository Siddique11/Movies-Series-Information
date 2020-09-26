import React from "react";

function Footer() {
  const color = "#007bff";
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div
            className="page-footer p-3 mt-auto text-center text-light"
            style={{ backgroundColor: color }}
          >
            <span className="text-warning font-weight-normal"></span>
            Using <i className="fab fa-react" /> React JS &amp; integrated with
            external movies data API &nbsp;
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
