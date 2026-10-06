"use client";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const business = formData.get("business");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `New Website Inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Hello The Sip Software Solutions,

I have a new website project inquiry.

Name: ${name}
Email: ${email}
Business Name: ${business}

Project Details:
${message}

--------------------------------
Sent from The Sip Software Solutions website`
    );

    window.location.href =
      `mailto:thesipsoftwaresolutions@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mt-10"
    >
      <input
        type="text"
        name="name"
        required
        className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none"
        placeholder="Name"
      />

      <input
        type="email"
        name="email"
        required
        className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none"
        placeholder="Email"
      />

      <input
        type="text"
        name="business"
        required
        className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none"
        placeholder="Business Name"
      />

      <textarea
        name="message"
        required
        rows="5"
        className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none"
        placeholder="Tell me about your project..."
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold transition"
      >
        Send Message
      </button>
    </form>
  );
}