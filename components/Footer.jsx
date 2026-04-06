import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses & Pricing", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Book a Lesson", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-black font-black text-sm">D</span>
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                Drive<span className="text-amber-400">Right</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional driving instruction in [Town] and surrounding areas.
              Fully qualified ADI instructor with a proven track record.
            </p>
            <p className="text-xs text-amber-400 font-medium">
              DVSA Approved Driving Instructor
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="tel:+447700000000"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  07700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@driveright.co.uk"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  info@driveright.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="text-gray-500">[Town], [County], UK</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>DriveRight School of Motoring. All rights reserved.</p>
          <p>Built with care for safer roads</p>
        </div>
      </div>
    </footer>
  );
}
