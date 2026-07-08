"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/fundo.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Carretos Rápidos em Belo Horizonte e Região Metropolitana
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Pequenos fretes, transporte de móveis, eletrodomésticos e montagem de móveis com mais de 20 anos de experiência.
         Atendimento rápido pelo WhatsApp.
        </Typography>
        <div>
          <a
          href="https://wa.me/5531985041041?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="gradient" color="white">
            Solicitar Orçamento no WhatsApp
          </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
