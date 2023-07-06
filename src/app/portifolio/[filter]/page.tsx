'use client'

import { PageContainer } from "@/components/PageContainer";
import { PageTitle } from "@/components/PageTitle";
import { FilterList } from "../components/FilterList";
import { Gallery } from "../components/Gallery";

export default function Portifolio() {
  const items = [
    {
      key: "all",
      value: "All",
    },
    {
      key: "graphic_design",
      value: "Graphic Design",
    },
    {
      key: "web_design",
      value: "Web Design",
    },
    {
      key: "photography",
      value: "Photography",
    },

  ]

  const images = [
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi one",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi two",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi three",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi four",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi five",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi six",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi seven",
    },
    {
      src: "https://source.unsplash.com/random",
      alt: "imagem 1",
      id: "Abacaxi eight",
    }

  ]

  return (
    <PageContainer className="overflow-y-auto">
      <PageTitle text="Portifolio" />

      <div className="flex flex-col items-center justify-center w-full gap-6 pt-4 pl-4 mt-4">
        <FilterList
          items={items}
        />
        <Gallery
          images={images}
        />
      </div>
    </PageContainer>
  )
}