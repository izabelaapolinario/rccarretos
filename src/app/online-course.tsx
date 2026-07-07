"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
 TruckIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const SERVICES  = [
  {
    icon: TruckIcon,
    title: "Pequenos Carretos",
    description:
      "Realizamos pequenos fretes para residências, apartamentos, empresas e comércios em Belo Horizonte e Região Metropolitana.",
  },
  {
    icon: HomeModernIcon,
    title: "Transporte de Móveis",
    description:
      "Transportamos sofás, camas, guarda-roupas, mesas, armários, painéis, eletrodomésticos e diversos outros itens com segurança.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Montagem de Móveis",
    description:
      "Montagem e desmontagem de móveis residenciais e corporativos, utilizando ferramentas profissionais e muito cuidado.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Retirada em Lojas",
    description:
      "Buscamos suas compras em lojas, depósitos e marketplaces e entregamos com rapidez e segurança até o destino.",
  },
];

export function OnlineCourse() {
   return (
    <section
      id="servicos"
      className="bg-gray-50 py-24 px-6"
    >
      <div className="container mx-auto">

        <div className="text-center mb-16">

          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Nossos Serviços
          </Typography>

          <Typography
            variant="lead"
            className="mx-auto max-w-3xl text-gray-600"
          >
            Há mais de 20 anos oferecendo soluções rápidas e seguras para
            pequenos carretos, transporte de móveis, eletrodomésticos,
            entregas e montagem de móveis em Belo Horizonte e toda a Região
            Metropolitana.
          </Typography>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {SERVICES.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
            >
              {service.description}
            </FeatureCard>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OnlineCourse;
