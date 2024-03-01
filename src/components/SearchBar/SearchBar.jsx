import style from './SearchBar.module.css';
import { ImSearch } from 'react-icons/im';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast('Search bar can not be empty!', {
    duration: 3000,
    style: { border: 'solid 2px black', backgroundColor: 'lightgrey' },
    position: 'top-right',
  });

export const SearchBar = ({ onSubmit }) => {
  const handelSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.search.value;

    if (value.trim() === '') {
      notify();
      return;
    }

    onSubmit(value);
    form.reset();
  };

  return (
    <>
      <header className={style.header}>
        <Toaster />
        <form className={style.form} onSubmit={handelSubmit}>
          <label className={style.label}>
            <input
              className={style.input}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
            />
            <button className={style.searchBtn} type="submit">
              <ImSearch />
            </button>
          </label>
        </form>
      </header>
    </>
  );
};
