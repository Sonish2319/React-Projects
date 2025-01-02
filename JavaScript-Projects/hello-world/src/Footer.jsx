function Footer() {
  return (
    // &copy; is to display copyright symbol
    // new Date().getFullYear() it will get the current time year
    <footer> 
      <p>&copy; {new Date().getFullYear()}Your Website name</p>
    </footer>
  );
}

export default Footer;
