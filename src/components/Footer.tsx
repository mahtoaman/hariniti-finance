const Footer = () => {
  return (
    <footer className="py-12 bg-navy-dark border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo-finance-cropped.png" alt="HariNiti Finance" className="h-10 w-auto" />
            <div>
              <span className="font-display text-base font-bold text-gradient-gold">HariNiti Finance Pvt. Ltd.</span>
            </div>
          </div>
          <p className="text-sm text-gold-light/30 font-body">
            © {new Date().getFullYear()} HariNiti Finance Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
