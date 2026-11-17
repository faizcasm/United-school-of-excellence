"use client";

import { FormEvent, useState } from "react";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry.");
      setStatus("success");
      setMessage("Your enquiry has been sent. The school team will get back to you.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>Parent / guardian name<input name="name" autoComplete="name" required minLength={2} placeholder="Your full name" /></label>
        <label>Phone number<input name="phone" autoComplete="tel" required pattern="[+0-9 ()-]{7,20}" placeholder="+91 00000 00000" /></label>
      </div>
      <div className="form-row">
        <label>Email address <span className="optional">(optional)</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label>Class of interest<input name="classInterest" placeholder="e.g. Class 1" /></label>
      </div>
      <label>Your message<textarea name="message" rows={5} required minLength={10} placeholder="Tell us what you would like to know..." /></label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send enquiry"} <span>↗</span></button>
      {message && <p className={`form-message ${status}`} role="status">{message}</p>}
    </form>
  );
}