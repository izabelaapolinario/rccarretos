import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RC Carretos | Carretos Rápidos e Montagem de Móveis em BH e Região",
  description:
    "Carretos rápidos, fretes pequenos, entregas urgentes e montagem de móveis em Belo Horizonte, Betim, Contagem e região. Atendimento rápido e orçamento pelo WhatsApp.",

  keywords: [
    "carreto em belo horizonte",
    "carreto bh",
    "pequenos carretos",
    "frete pequeno",
    "frete em bh",
    "carreto barato",
    "carreto rápido",
    "transporte de móveis",
    "montagem de móveis",
    "montador de móveis",
    "frete de geladeira",
    "frete de sofá",
    "carreto contagem",
    "carreto betim",
    "carreto nova lima",
    "carreto região metropolitana",
    "RC Carretos"],

     authors: [
    {
      name: "RC Carretos",
    },
  ],

  creator: "RC Carretos",

  publisher: "RC Carretos",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "RC Carretos | Carretos Rápidos em Belo Horizonte",
    description:
      "Pequenos carretos, fretes, transporte de móveis e montagem de móveis com mais de 20 anos de experiência.",

    siteName: "RC Carretos",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "RC Carretos",
      },
    ],
  },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
