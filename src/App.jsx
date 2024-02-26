import './App.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { ImageModal } from './components/ImageModal/ImageModal';
import { Loader } from './components/Loader/Loader';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { SearchBar } from './components/SearchBar/SearchBar';

export const App = () => {
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
};
