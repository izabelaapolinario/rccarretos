"use client";

import {
  StarIcon,
  UserCircleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const GOOGLE_REVIEW_LINK = "https://g.page/r/CfGQZozaxNLlEBM/review";

const REVIEWS = [
  {
    name: "Carlos Henrique",
    service: "Pequeno Carreto",
    review:
      "Excelente atendimento! Chegou no horário combinado, transportou todos os móveis com muito cuidado e ajudou na organização.",
    image: "",
    google: true,
  },
  {
    name: "Fernanda Souza",
    service: "Montagem de Móveis",
    review:
      "Muito profissional e educado. A montagem ficou perfeita e o serviço foi realizado rapidamente. Recomendo.",
    image: "",
    google: true,
  },
  {
    name: "Marcos Oliveira",
    service: "Transporte de Geladeira",
    review:
      "Preço justo, atendimento rápido pelo WhatsApp e muito cuidado durante todo o transporte.",
    image: "",
    google: true,
  },
];


function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className="h-5 w-5 text-yellow-500"
        />
      ))}
    </div>
  );
}


export default function CarouselFeatures() {
  return (
    <section
      id="avaliacoes"
      className="py-24 bg-gray-50 px-6"
    >

      <div className="container mx-auto">


        {/* Título */}

        <div className="text-center mb-12">

          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            O que nossos clientes dizem
          </Typography>


          <Typography
            variant="lead"
            className="mx-auto max-w-3xl text-gray-600"
          >
            A confiança dos nossos clientes é o que nos motiva a continuar
            oferecendo um serviço rápido, seguro e de qualidade.
          </Typography>


          <div className="flex justify-center items-center gap-2 mt-6">

            <div className="flex">

              {[...Array(5)].map((_, index) => (

                <StarIcon
                  key={index}
                  className="h-6 w-6 text-yellow-500"
                />

              ))}

            </div>


            <Typography
              color="blue-gray"
              className="font-semibold"
            >
              Avaliações dos nossos clientes
            </Typography>

          </div>

        </div>



        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {REVIEWS.map((review) => (

            <Card
              key={review.name}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all"
            >

              <CardBody>


                <Stars />


                <Typography
                  className="text-gray-700 leading-7 mb-6"
                >
                    {review.review}
                </Typography>



                <div className="flex items-center gap-4">


                  <div className="h-12 w-12 overflow-hidden rounded-full bg-blue-100 flex items-center justify-center">

                    {review.image ? (

                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-full w-full object-cover"
                      />

                    ) : (

                      <UserCircleIcon
                        className="h-10 w-10 text-blue-600"
                      />

                    )}

                  </div>



                  <div>

                    <div className="flex items-center gap-2">

                      <Typography
                        variant="h6"
                        color="blue-gray"
                      >
                        {review.name}
                      </Typography>


                      {review.google && (

                        <CheckBadgeIcon
                          className="h-5 w-5 text-blue-600"
                          title="Avaliação Google"
                        />

                      )}

                    </div>


                    <Typography
                      className="text-sm text-gray-500"
                    >
                      {review.service}
                    </Typography>


                  </div>


                </div>


              </CardBody>


            </Card>


          ))}


        </div>



        {/* CTA Google */}

        <div className="text-center mt-14">


          <Typography
            className="mb-5 text-gray-600"
          >
            Já utilizou nossos serviços? Sua avaliação ajuda muito a RC Carretos.
          </Typography>


          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >

            <Button
              color="blue"
            >
              ⭐ Avaliar no Google
            </Button>


          </a>


        </div>



      </div>


    </section>
  );
}