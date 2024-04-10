export interface MultipleSelectProps {
  name: string;
  options: string[];
  value: string;
  onChange: (name: string, value: string) => void;
}
