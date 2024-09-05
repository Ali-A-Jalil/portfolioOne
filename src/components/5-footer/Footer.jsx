import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-list">
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Uses</a></li>
      </ul>

      <p className="copyright"> Copyright © 2020 Dev Ali. All rights reserved.</p>
    </footer>
  )
}

export default Footer