import Header from "../../components/header/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import { GalleryImages } from "../../data/data";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        perferendis, ovident odio!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {GalleryImages.map((gallery) => (
            <article key={gallery.id}>
              <img src={gallery.image} alt={`Gallery Image ${gallery.id}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
