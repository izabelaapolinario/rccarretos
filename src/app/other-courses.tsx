"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const CITIES = [
  "Belo Horizonte",
  "Contagem",
  "Betim",
  "Nova Lima",
  "Sabará",
  "Santa Luzia",
  "Vespasiano",
  "Ribeirão das Neves",
  "Lagoa Santa",
  "Ibirité",
  "Esmeraldas",
  "Confins",
];

export default function OtherCourses() {
  return (
    <section id="atendimento" className="py-24 bg-gray-50 px-6">
      <div className="container mx-auto">

        <div className="text-center mb-16">

          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Área de Atendimento
          </Typography>

          <Typography
            variant="lead"
            className="mx-auto max-w-3xl text-gray-600"
          >
            Atendemos Belo Horizonte e diversas cidades da Região Metropolitana,
            realizando pequenos carretos, transporte de móveis, eletrodomésticos
            e montagem de móveis com rapidez e segurança.
          </Typography>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {CITIES.map((city) => (

            <Card
              key={city}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardBody className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">

                  <MapPinIcon className="h-6 w-6" />

                </div>

                <Typography
                  variant="h6"
                  color="blue-gray"
                >
                  {city}
                </Typography>

              </CardBody>
            </Card>

          ))}

        </div>

        <div className="mt-16 rounded-2xl bg-blue-700 p-10 text-center">

          <Typography
            variant="h3"
            color="white"
            className="mb-4"
          >
            Sua cidade não está na lista?
          </Typography>

          <Typography
            className="mx-auto mb-8 max-w-3xl text-white text-lg"
          >
            Entre em contato pelo WhatsApp. Dependendo da distância,
            também realizamos atendimentos em outras cidades da região.
          </Typography>

          <a
            href="https://wa.me/5531985041041?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600">
              Solicitar orçamento pelo WhatsApp
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}