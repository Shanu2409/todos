import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-700 text-white py-4 text-center">
      <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
