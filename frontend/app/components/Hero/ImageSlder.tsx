"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function MultiImageSlider({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start", // Align 'start' is usually better for multi-slide
      slidesToScroll: 1, // Scroll one at a time, or set to 3 to jump groups
    },
    [Autoplay({ delay: 3000 })],
  );

  return (
    <div className="relative w-full overflow-hidden top-5" ref={emblaRef}>
      <div className="flex -ml-4">
        {" "}
        {/* Negative margin compensates for slide padding */}
        {images.map((src, index) => (
          <div
            key={index}
            /* THE MAGIC PIXELS:
               - min-w-0: Prevents flex items from shrinking below content
               - pl-4: The gap between slides
               - basis-full: 1 slide on mobile
               - sm:basis-1/2: 2 slides on tablet
               - lg:basis-1/3: 3 slides on desktop
            */
            className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 "
          >
            <div className="relative h-75 overflow-hidden ">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
