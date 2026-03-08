const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prakash S. Designed with care.
        </p>
        <p className="font-body text-xs text-muted-foreground/60">
          Portfolio contents are for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
