"use client";
import { useState } from "react";
export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Website inquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Hello The Sip Web Studio,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\n\nProject details:\n${data.get("message")}`,
    );
    window.location.href = `mailto:thesipsoftwaresolutions@gmail.com?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="First and last name"
            maxLength={120}
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@yourbusiness.com"
            maxLength={254}
          />
        </label>
      </div>
      <label>
        Business name
        <input
          name="business"
          autoComplete="organization"
          required
          placeholder="What’s your business called?"
          maxLength={180}
        />
      </label>
      <label>
        What do you have in mind?
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A new website, a fresh look, a little ongoing support…"
          maxLength={3000}
        />
      </label>
      <button className="button" type="submit">
        Start the conversation ↗
      </button>
      <p className="small">
        This opens a draft in your email app. Send it there to complete your
        inquiry. You can also email me directly.
      </p>
      {opened && (
        <p role="status">
          Your email draft is ready in your email app. If it didn’t open, use
          the email link beside this form.
        </p>
      )}
    </form>
  );
}
