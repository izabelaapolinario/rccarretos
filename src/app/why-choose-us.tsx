"use client";

import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

interface BenefitProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function Benefit({ icon: Icon, title, description }: BenefitProps) {
  return (
    <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shrink-0">
        <Icon className="h-7 w-7" />
      </div>

      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography className="text-gray-600 leading-7 font-normal">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="sobre"
      className="bg-slate-50 py-24 px-6"
    >
      <div className="container mx-auto">

        <div className="text-center mb-16">

          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Por que escolher a RC Carretos?
          </Typography>

          <Typography
            variant="lead"
            className="mx-auto max-w-3xl text-gray-600"
          >
            Mais de duas décadas transportando móveis, eletrodomésticos e
            realizando pequenos fretes com responsabilidade, rapidez e
            compromisso em Belo Horizonte e Região Metropolitana.
          </Typography>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Benefit
            icon={StarIcon}
            title="Mais de 20 anos de experiência"
            description="Anos de experiência realizando carretos e montagens com segurança e confiança."
          />

          <Benefit
            icon={ClockIcon}
            title="Atendimento rápido"
            description="Respondemos rapidamente pelo WhatsApp e buscamos encaixar seu serviço o quanto antes."
          />

          <Benefit
            icon={ShieldCheckIcon}
            title="Cuidado com seus móveis"
            description="Seu patrimônio é tratado com atenção durante o transporte e a montagem."
          />

          <Benefit
            icon={CurrencyDollarIcon}
            title="Preço justo"
            description="Orçamentos transparentes, sem cobranças abusivas e com excelente custo-benefício."
          />

          <Benefit
            icon={WrenchScrewdriverIcon}
            title="Ferramentas profissionais"
            description="Equipamentos adequados para montagem e desmontagem de diversos tipos de móveis."
          />

          <Benefit
            icon={TruckIcon}
            title="Atendimento em BH e Região"
            description="Atendemos Belo Horizonte, Contagem, Betim, Nova Lima e diversas cidades da Região Metropolitana."
          />

        </div>

      </div>
    </section>
  );
}