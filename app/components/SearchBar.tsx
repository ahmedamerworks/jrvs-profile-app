import { ChangeEvent } from 'react';
import './SearchBar.styles.css';

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ 
  className, 
  placeholder, 
  onChangeHandler 
}: SearchBarProps) => (
  <input
    className={`search-bar ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBar;
