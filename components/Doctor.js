import { clinic } from "@/lib/clinic";

export default function Doctor() {
  const d = clinic.doctor;
  return (
    <section id="doctor" className="section doctor">
      <div className="avatar">{d.name.charAt(0)}</div>
      <div>
        <h2>{d.name}</h2>
        <p>{d.degree}</p>
        <p>{d.experience} ka experience</p>
      </div>
    </section>
  );
}