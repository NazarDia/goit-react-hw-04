import style from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={style.list}>
      {items.map(item => (
        <li className={style.item} key={item.id}>
          <ImageCard
            item={item}
            onClick={() => {
              openModal(item);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
