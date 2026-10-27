import { services } from "@/lib/clinic";

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Hamari Services</h2>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}