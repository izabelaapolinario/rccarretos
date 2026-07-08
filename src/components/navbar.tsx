"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const WHATSAPP =
  "https://wa.me/5531985041041?text=Olá! Gostaria de solicitar um orçamento.";

//const INSTAGRAM = "https://instagram.com/rccarretos";

const MAPS = "https://maps.app.goo.gl/5VvkQfrfiiQ5MmHAA";

function NavItem({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="font-medium hover:text-blue-600 transition-colors"
      >
        {title}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY > 30);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    function resize() {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={scroll}
      blurred={false}
      className={`fixed top-0 z-50 border-0 transition-all duration-300 ${
        scroll ? "bg-white py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">

        <a href="#inicio">
       <div className="flex items-center gap-2">
       <Image
           src="/logos/logo.png"
          alt="RC Carretos"
           width={45}
           height={45}
        />
          <Typography
            variant="h5"
            color={scroll ? "blue-gray" : "white"}
          >
            RC Carretos
          </Typography>
</div>
        </a>

        <ul
          className={`hidden lg:flex items-center gap-8 ${
            scroll ? "text-gray-800" : "text-white"
          }`}
        >
          <NavItem title="Início" href="#inicio" />
          <NavItem title="Serviços" href="#servicos" />
          <NavItem title="Vantagens" href="#sobre" />
          <NavItem title="Avaliações" href="#avaliacoes" />
          <NavItem title="Contato" href="#contato" />
        </ul>

        <div className="hidden lg:flex items-center gap-2">

          <a
            href={WHATSAPP}
            target="_blank"
          >
            <IconButton
              variant="text"
              color={scroll ? "gray" : "white"}
            >
              <i className="fa-brands fa-whatsapp text-xl" />
            </IconButton>
          </a>

          {/* <a
            href={INSTAGRAM}
            target="_blank"
          >
            <IconButton
              variant="text"
              color={scroll ? "gray" : "white"}
            >
              <i className="fa-brands fa-instagram text-xl" />
            </IconButton>
          </a> */}

          <a
            href={MAPS}
            target="_blank"
          >
            <IconButton
              variant="text"
              color={scroll ? "gray" : "white"}
            >
              <i className="fa-solid fa-location-dot text-lg" />
            </IconButton>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
          >
            <Button
              color="green"
              size="sm"
            >
              Solicitar orçamento
            </Button>
          </a>

        </div>

        <IconButton
          variant="text"
          color={scroll ? "gray" : "white"}
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>

      </div>

      <Collapse open={open}>

        <div className="container mx-auto mt-4 rounded-xl bg-white p-6">

          <ul className="flex flex-col gap-5">

            <NavItem title="Início" href="#inicio" />
            <NavItem title="Serviços" href="#servicos" />
            <NavItem title="Vantagens" href="#sobre" />
            <NavItem title="Avaliações" href="#avaliacoes" />
            <NavItem title="Contato" href="#contato" />

          </ul>

          <a
            href={WHATSAPP}
            target="_blank"
          >
            <Button
              color="green"
              fullWidth
              className="mt-6"
            >
              Solicitar orçamento
            </Button>
          </a>

        </div>

      </Collapse>

    </MTNavbar>
  );
}