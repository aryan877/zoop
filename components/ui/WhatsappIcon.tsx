import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = ({ phoneNumber }: { phoneNumber: string }) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 bg-green-500 rounded-full p-3 cursor-pointer shadow-lg hover:bg-green-600 transition-colors"
      onClick={handleWhatsAppClick}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </div>
  );
};

export default WhatsAppIcon;
