import { HTMLAttributes } from "react";

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  images: Array<{
    src: string;
    alt: string;
    id: string;
  }>;
}

export function Gallery({ images, ...props }: GalleryProps) {
  const gridLength = images.length / 4 > 1 ? 4 : 2

  return (
    <div
      className={`grid max-h-full grid-cols-${gridLength} gap-8 px-4`}
      {...props}
    >
      {
        images.map(image => (
          <img
            className="object-cover aspect-square"
            key={image.id}
            src={image.src}
            alt={image.alt}
          />

        ))
      }
    </div>
  )
}