"use client";

import { useState } from "react";
import { clinic } from "@/lib/clinic";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Namaste, mera naam ${name} hai. Mujhe ${date} ko appointment chahiye. Mera number: ${phone}`;
    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return (
    <section id="booking" className="section">
      <h2>Appointment Booking</h2>
      <form className="booking" onSubmit={handleSubmit}>
        <input
          placeholder="Aapka naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit" className="btn">WhatsApp par Book Karein</button>
      </form>
    </section>
  );
}