"use client";
import { useState } from "react";
import { services } from "./services/data";
export default function ContactForm({ initialService = "Not sure — free growth review" }) {
  const [opened, setOpened] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Business growth inquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Hello The Sip Web Studio,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nBusiness: ${data.get("business")}\nService: ${data.get("service")}\nWebsite: ${data.get("website")}\n\nProject details:\n${data.get("message")}`,
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
      <label>Service of interest<select name="service" defaultValue={initialService}><option>Not sure — free growth review</option>{services.map(service => <option key={service.slug}>{service.title}</option>)}</select></label>
      <label>Current website (optional)<input name="website" maxLength={500} placeholder="Your website or business profile link" /></label>
      <label>
        What would you like to improve?
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell me about your services, where you work, and what you want to make easier."
          maxLength={3000}
        />
      </label>
      <button className="button" type="submit">
        Draft my free review request ↗
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
