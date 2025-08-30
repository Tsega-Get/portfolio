import "./styles/footer.css"; // You can add some footer specific styles here

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} ME. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
