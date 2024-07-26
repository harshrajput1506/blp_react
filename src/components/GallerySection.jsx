import { galleries } from "../constants/Constant";

const Gallery = () => {
  return (
    <div className="mx-auto my-24 bg-secondaryBackground rounded-2xl flex flex-col justify-center items-center space-y-5 p-8">
      <h1 className="mt-10 mb-10 text-5xl font-bold text-primary">GALLERY</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-10 lg:grid-rows-5 justify-items-center gap-x-8 gap-y-8">
        {galleries.map((img, idx) => (
          <div key={idx} className="relative w-full pt-[75%] overflow-hidden rounded-lg">
            <img src={img} alt="gallery image" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
