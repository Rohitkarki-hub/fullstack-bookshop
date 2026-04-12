import ImageSlider from "./ImageSlder";
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

export default function Hero() {
  return (
    <div className="">
      <ImageSlider images={images} />
    </div>
  );
}
