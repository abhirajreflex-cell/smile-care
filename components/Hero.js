import { clinic } from "@/lib/clinic";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        
        <p className="tag">{clinic.city}</p>
        <h1>Muskurahat ki shuruaat, ek healthy smile se</h1>
        <p>Painless treatment, experienced doctor aur aasan online booking.</p>
        <a className="btn" href="#booking">Appointment Lein</a>
      </div>
    </section>
  );
}