import { StyleProp, TextInput, TextStyle } from 'react-native';

type SearchBarProps = {
  style?: StyleProp<TextStyle>;
  placeholder: string;
  onChangeHandler: (text: string) => void;
};

const SearchBar = ({ style, placeholder, onChangeHandler }: SearchBarProps) => (
  <TextInput
    style={[
      { height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8 },
      style,
    ]}
    placeholder={placeholder}
    onChangeText={onChangeHandler}
    accessible={true}
    accessibilityRole="search"
    accessibilityLabel={placeholder} // Use placeholder directly for clarity
    accessibilityHint="Enter text to filter profiles"
    importantForAccessibility="yes" // Ensures it's focusable
  />
);

export default SearchBar;
