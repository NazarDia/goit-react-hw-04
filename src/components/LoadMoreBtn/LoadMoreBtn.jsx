import style from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={style.container}>
      <button className={style.loadBtn} onClick={onClick} type="click">
        Load More
      </button>
    </div>
  );
};
