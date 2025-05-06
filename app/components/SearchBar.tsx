import { StyleProp, TextInput, TextStyle } from 'react-native';
import './SearchBar.styles.css';


// type SearchBarProps = {
//   className: string;
//   placeholder?: string;
//   onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
// };
type SearchBarProps = {
  style?: StyleProp<TextStyle>;
  placeholder: string;
  onChangeHandler: (text: string) => void;
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

// const SearchBar = ({ className, placeholder, onChangeHandler }: SearchBarProps) => (
//   <TextInput
//     style={[className, { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8 }]} 
//     placeholder={placeholder}
//     onChangeText={onChangeHandler} 
//   />
// );
const SearchBar = ({ style, placeholder, onChangeHandler }: SearchBarProps) => (
  <TextInput
    style={[
      { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8 },
      style,
    ]}
    placeholder={placeholder}
    onChangeText={onChangeHandler}
  />
);

export default SearchBar;
