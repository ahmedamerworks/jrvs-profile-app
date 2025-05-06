import { ChangeEvent } from 'react';
import './SearchBar.styles.css';

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

// const SearchBar = ({ 
//   className, 
//   placeholder, 
//   onChangeHandler 
// }: SearchBarProps) => (
//   <input
//     className={`search-bar ${className}`}
//     type='search'
//     placeholder={placeholder}
//     onChange={onChangeHandler}
//   />
// );
import { TextInput } from 'react-native';

const SearchBar = ({ className, placeholder, onChangeHandler }: SearchBarProps) => (
  <TextInput
    style={[className, { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8 }]} 
    placeholder={placeholder}
    onChangeText={onChangeHandler} 
  />
);

export default SearchBar;
