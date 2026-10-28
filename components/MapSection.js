import { clinic } from "@/lib/clinic";

export default function MapSection() {
  return (
    <section className="section">
      <h2>Humara Location</h2>
      <iframe
        src={clinic.mapEmbed}
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: "14px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic location"
      />
    </section>
  );
}