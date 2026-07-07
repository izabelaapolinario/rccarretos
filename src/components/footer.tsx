"use client";

import { Typography, Button } from "@material-tailwind/react";

const WHATSAPP =
  "https://wa.me/5531985041041?text=Olá! Gostaria de solicitar um orçamento.";

//const INSTAGRAM = "https://instagram.com/rccarretos";

const MAPS = "https://maps.app.goo.gl/5VvkQfrfiiQ5MmHAA";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-gray-900 text-white pt-20 pb-8 px-6"
    >
      <div className="container mx-auto">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Empresa */}

          <div>
         <div className="flex items-center gap-3">
        <img
          src="../logos/logo.png"
          alt="RC Carretos"
          className="h-8 w-8 object-contain sm:h-10 sm:w-10"
          />
            <Typography
              variant="h4"
              color="white"
              className="mb-4"
            >
              RC Carretos
            </Typography>
            </div>

            <Typography className="text-gray-300 leading-7">
              Há mais de 20 anos realizando pequenos carretos,
              transporte de móveis, eletrodomésticos e montagem
              de móveis em Belo Horizonte e Região Metropolitana.
            </Typography>

          </div>

          {/* Links */}

          <div>

            <Typography
              variant="h5"
              color="white"
              className="mb-6"
            >
              Links rápidos
            </Typography>

            <ul className="space-y-3">

              <li>
                <a
                  href="#inicio"
                  className="hover:text-green-400 transition-colors"
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#servicos"
                  className="hover:text-green-400 transition-colors"
                >
                  Serviços
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="hover:text-green-400 transition-colors"
                >
                  Vantagens
                </a>
              </li>

              <li>
                <a
                  href="#avaliacoes"
                  className="hover:text-green-400 transition-colors"
                >
                  Avaliações
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="hover:text-green-400 transition-colors"
                >
                  Contato
                </a>
              </li>

            </ul>

          </div>

          {/* Contato */}

          <div>

            <Typography
              variant="h5"
              color="white"
              className="mb-6"
            >
              Contato
            </Typography>

            <div className="space-y-3">

              <p>📍 Belo Horizonte - MG</p>

              <p>📞 (31) 98504-1041</p>

              <p>🕒 Segunda a Domingo • 8h ás 22h</p>

              <div className="flex gap-4 pt-3">

                <a
                  href={WHATSAPP}
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp text-2xl hover:text-green-400 transition-colors"></i>
                </a>

                {/* <a
                  href={INSTAGRAM}
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram text-2xl hover:text-pink-400 transition-colors"></i>
                </a> */}

                <a
                  href={MAPS}
                  target="_blank"
                >
                  <i className="fa-solid fa-location-dot text-2xl hover:text-red-400 transition-colors"></i>
                </a>

              </div>

              <a
                href={WHATSAPP}
                target="_blank"
              >
                <Button
                  color="green"
                  className="mt-6"
                  fullWidth
                >
                  Solicitar orçamento pelo WhatsApp
                </Button>
              </a>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <div className="flex flex-col gap-3 items-center justify-between md:flex-row">

          <Typography className="text-gray-400">

            © {new Date().getFullYear()} RC Carretos.
            Todos os direitos reservados.

          </Typography>

          <Typography className="text-gray-400">

            Desenvolvido por{" "}
            <a
              href="https://izabelaapolinario.github.io/Curriculo/"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Izabela Apolinário
            </a>

          </Typography>

        </div>

      </div>
    </footer>
  );
}