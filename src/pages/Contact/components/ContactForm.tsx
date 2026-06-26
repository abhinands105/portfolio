import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <section className="contact-form-section">
      <div className="section-title">
        <h2>Send a Message</h2>

        <p>
          Interested in collaborating on AI, Machine Learning or Software
          Development projects? Let's connect.
        </p>
      </div>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          required
        />

        <textarea
          rows={7}
          placeholder="Write your message..."
          required
        />

        <button type="submit">
          {submitted ? "Message Sent ✓" : "Send Message"}
        </button>
      </form>
    </section>
  );
}