import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { albums } from "./photos";
import "./css/PhotoGallery.css";
import { GalRow } from "./AlbumCar";
import { TopButton } from "./Button";

export function PhotoGallery({ match }) {
  const photos = albums[match.params.album];
  console.log(photos, match);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = index => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="photo-gal">
      <GalRow images={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({ ...x, width: "100%" }))}
              // styles={{ view: () => ({ height: "100%", width: "100%" }) }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <TopButton />
    </div>
  );
}
