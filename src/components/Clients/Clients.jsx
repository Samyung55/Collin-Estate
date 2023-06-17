import React from "react";
import img1 from "../../assets/clients/Client1.png"
import img2 from "../../assets/clients/Client2.png"
import img3 from "../../assets/clients/Client3.png"
import img4 from "../../assets/clients/Client4.png"
import img5 from "../../assets/clients/Client5.png"
import "./Clients.css"

const Clients = () => {
  return (
    <div className="clients-container">
      <img src={img1} alt="client1" className="client-image"></img>
      <img src={img2} alt="client2" className="client-image"></img>
      <img src={img3} alt="client3" className="client-image"></img>
      <img src={img4} alt="client4" className="client-image"></img>
      <img src={img5} alt="client5" className="client-image"></img>
    </div>
  );
}

export default Clients;
