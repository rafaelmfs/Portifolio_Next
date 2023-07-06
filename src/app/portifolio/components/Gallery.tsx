import Image from "next/image";
import { HTMLAttributes } from "react";

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: Array<{
    src: string;
    alt: string;
    id: string;
  }>;
}

export function Gallery({ images, ...props }: GalleryProps) {
  const gridColumnsLength = images.length / 4 > 1 ? "grid-cols-4" : "grid-cols-2"

  return (
    <div
      className={`grid ${gridColumnsLength} gap-8 px-4`}
      {...props}
    >
      {
        images.map(image => (
          <Image
            className="object-cover aspect-square"
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
          />

        ))
      }
    </div>
  )
}