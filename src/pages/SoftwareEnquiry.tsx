import "./SoftwareEnquiry.css";

export default function SoftwareEnquiry() {
  return (
    <div className="enquiry-page">

      {/* HERO */}
      <section className="enquiry-hero">
        <h1>Software Development Enquiry</h1>
        <p>
          Tell us about your project and our team will help you build scalable
          digital solutions using modern technologies.
        </p>
      </section>

      {/* FORM */}
      <section className="enquiry-form-section">

        <form className="enquiry-form">

          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-row">
            <select>
              <option>Select Service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>AI / Machine Learning</option>
              <option>Data Science</option>
              <option>Cloud Solutions</option>
            </select>

            <select>
              <option>Project Budget</option>
              <option>₹10k - ₹50k</option>
              <option>₹50k - ₹100k</option>
              <option>₹100k+</option>
            </select>
          </div>

          <textarea
            placeholder="Describe your project..."
            rows={5}
          ></textarea>

          <button type="submit">Submit Enquiry</button>

        </form>

      </section>

    </div>
  );
}