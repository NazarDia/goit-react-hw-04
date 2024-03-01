import style from './Loader.module.css';
import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={style.loadingContainer}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
      <p>Loading, please wait</p>
    </div>
  );
};
