import { clinic } from "@/lib/clinic";

export default function Footer() {
  return (
    <footer className="footer">
      <p>{clinic.name} | {clinic.address}</p>
      <p>Timing: {clinic.timings}</p>
      <p>Phone: {clinic.phone}</p>
    </footer>
  );
}