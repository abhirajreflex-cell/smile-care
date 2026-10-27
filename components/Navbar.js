import { clinic } from "@/lib/clinic";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="logo">{clinic.name}</a>
      <nav>
        <a href="#services">Services</a>
        <a href="#doctor">Doctor</a>
        <a href="#booking">Booking</a>
      </nav>
      <a className="btn-small" href={`tel:${clinic.phone.replace(/\s/g, "")}`}>
        Call Now
      </a>
    </header>
  );
}