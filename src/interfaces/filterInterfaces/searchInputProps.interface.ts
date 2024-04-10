export interface SearchInputProps {
  name: string;
  cols?: number;
  value: string;
  onChange: (name: string, value: string) => void;
}
