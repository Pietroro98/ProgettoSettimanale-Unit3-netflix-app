import React from "react";

const MyFooter = function () {
  return (
    <footer className="footer">
      <div className="container text-secondary d-flex flex-column flex-md-row">
        <div className="container">
          <div className="pt-3">
            <div>
              <div className="col mb-2">
                <i className="overfooter bi bi-facebook footer-icon me-2"></i>
                <i className="overfooter bi bi-instagram footer-icon me-2"></i>
                <i className="overfooter bi bi-twitter-x footer-icon me-2"></i>
                <i className="overfooter bi bi-youtube footer-icon"></i>
              </div>
            </div>

            <p className="overfooter">Audio and Subtitles</p>
            <p className="overfooter">Media Center</p>
            <p className="overfooter">Privacy</p>
            <p className="overfooter">Contact Us</p>
            <button
              className="mb-3 btn border border-1 border-secondary text-secondary rounded-0 overb"
              type="button"
            >
              Service Code
            </button>
            <p>&copy;1997-2021 Netflix, Inc.</p>
            <p>&copy;2024-Romano Pietro, FSO624</p>
          </div>
        </div>
        <div className="container mt-md-3">
          <p className="overfooter">Audio Description</p>
          <p className="overfooter">Investor Relations</p>
          <p className="overfooter">Legal Notices</p>
        </div>
        <div className="container mt-md-3">
          <p className="overfooter">Help Center</p>
          <p className="overfooter">Jobs</p>
          <p className="overfooter">Cookie Preferences</p>
        </div>
        <div className="container mt-md-3">
          <p className="overfooter">Gift Cards</p>
          <p className="overfooter">Terms of Use</p>
          <p className="overfooter">Corporate Information</p>
        </div>
      </div>
    </footer>
  );
};
export default MyFooter;
