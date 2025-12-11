const DisplayImages = ({ images }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 border">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          style={{ border: "1px solid #ccc" }}
          alt={img.alt || "image"}
          className="w-40 h-40 object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default DisplayImages;
