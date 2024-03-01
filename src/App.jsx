import { useState, useEffect } from 'react';
import { searchImages } from './api';
import './App.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { ImageModal } from './components/ImageModal/ImageModal';
import { Loader } from './components/Loader/Loader';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { SearchBar } from './components/SearchBar/SearchBar';

export const App = () => {
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [modalContent, setModalContent] = useState();

  const onSubmit = query => {
    if (query === search) {
      return;
    }
    setSearch(query);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await searchImages(search, page);
        const { results } = data;

        setImages(prev => [...prev, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    if (search === '') {
      return;
    }
    setLoader(true);
    fetchImages();
  }, [page, search]);

  const onClick = () => {
    setPage(page + 1);
  };

  const openModal = content => {
    setModalContent(content);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />

      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {error && <ErrorMessage />}

      {loader && <Loader />}
      {images.length !== 0 && <LoadMoreBtn onClick={onClick} />}

      {modal && <ImageModal closeModal={closeModal} content={modalContent} />}
    </>
  );
};
