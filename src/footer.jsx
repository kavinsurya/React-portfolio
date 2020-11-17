import "./App.css";
import { MdCall, MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <div className="footer">
      <h3 className="center">Contact</h3>
      <h3 className="center">
        <MdCall size={30} /> +91-9790234646
      </h3>
      <h3 className="center">
        <MdEmail size={30} />
        <a href="mailto:kavinsurya002@gmail.com"> kavinsurya002@gmail.com</a>
      </h3>
<hr/>
      <p className="footerName">Kavinsurya &copy; 2020</p>
      <hr/>
    </div>
  );
}

export default Footer;
