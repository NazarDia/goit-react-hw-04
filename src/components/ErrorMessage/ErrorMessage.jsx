import style from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <div className={style.container}>
      <p className={style.error}>
        Something is going wrong! Please reload your page or check Internet
        connection.
      </p>
    </div>
  );
};
