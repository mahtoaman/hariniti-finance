import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-dark border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-finance-cropped.png"
                alt="HariNiti Finance"
                className="h-10 w-auto"
              />
              <div>
                <span className="font-display text-base font-bold text-gradient-gold">
                  HariNiti Finance Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-sm text-gold-light/40 font-body leading-relaxed max-w-xs">
              Your trusted financial growth partner — advising today, securing
              tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold-light/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gold-light/50 font-body hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold-light/80 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+919771380480"
                className="text-sm text-gold-light/50 font-body hover:text-gold transition-colors"
              >
                +91 97713 80480
              </a>
              <a
                href="https://wa.me/919771380480"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-light/50 font-body hover:text-gold transition-colors"
              >
                WhatsApp: +91 97713 80480
              </a>
              <a
                href="mailto:harinitifinancea@gmail.com"
                className="text-sm text-gold-light/50 font-body hover:text-gold transition-colors"
              >
                harinitifinancea@gmail.com
              </a>
              <span className="text-sm text-gold-light/50 font-body leading-relaxed">
                A-13, Pandav Nagar, Ganesh Nagar Complex,<br />East Delhi – 110092
              </span>
              <span className="text-xs text-gold-light/30 font-body">
                Mon–Sat: 11:00 AM – 8:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gold-light/30 font-body">
            ©{" "}
            <span suppressHydrationWarning>
              {new Date().getFullYear()}
            </span>{" "}
            HariNiti Finance Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
