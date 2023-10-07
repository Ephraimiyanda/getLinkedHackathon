import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand,NavbarMenuToggle, NavbarContent, NavbarItem, Button, Link ,NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import hamburger from "../public/hamburger.svg"
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isBlurred={false} maxWidth="xl" className="absolute bg-[#150E28] border-b border-white border-opacity-10 p-0 md:px-[50px]"  style={{
        background:"#150E28",
        position:"fixed",
    }}
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit text-white text-[36px]">
          <span className="text-[#D434FE]">get</span>linked
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" className="text-white" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem>
          <Button as={Link} className="register" radius="none" href="#" >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-[#150E28] text-white">
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Features
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem >
          <Link href="#" className="text-white" aria-current="page">
            Customers
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-white" href="#">
            Integrations
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} className="register" radius="none" href="#" >
            Register
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

    </Navbar>
  );
}
