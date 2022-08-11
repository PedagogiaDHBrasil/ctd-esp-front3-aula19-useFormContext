import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Image src="/logo.png" alt="logo-netflix" width={150} height={55} />
      <a>Iniciar sessão</a>
    </nav>
  );
};

export default Navbar;
