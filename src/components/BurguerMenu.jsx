import { useState } from "react";
import Navbar from "../NavBar/NavBar";

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="hamburguesa" className={isOpen ? "isOpen" : "isClosed"}>
      <Navbar column isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default BurguerMenu