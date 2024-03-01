import style from './ImageCard.module.css';

export const ImageCard = ({ item: { urls, alt_description, user, likes } }) => {
  return (
    <div>
      <img
        className={style.cardImg}
        src={urls.small}
        alt={alt_description}
        width={'320px'}
        height={'320px'}
      />
      <div className={style.cardInfo}>
        <p>Photo by: {user.name}</p>
        <p>Likes: {likes}</p>
        <p></p>
      </div>
    </div>
  );
};
