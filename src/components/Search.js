import styles from "components/Search.module.scss";
import classNames from "classnames";
import { useState } from "react";
import Link from "next/link";
import { setSearch } from "redux/search/search";
import { useDispatch } from "react-redux";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function onKeyboardChange(event) {
    let input = event.target.value;
    document.body.scrollTop = 0;
    setQuery(input);
    dispatch(setSearch(input));
  }
  return (
    <div className={styles.container}>
        <input
          type="search"
          className={styles.searchBox}
          onChange={(e) => onKeyboardChange(e)}
          placeholder="Search a movie..."
        />{" "}
        <Link href={`/search/${query}`}>
          <button
            type="button"
            className={classNames(
              styles.btn,
              styles.btnPrimary,
              styles.btnInside,
              styles.uppercase
            )}
          >
            search
          </button>
        </Link>
    </div>
  );
};

export default Search;
