import { SelectOption } from "./select";

type InputSelectProps = {
  inputId: string;
  selectId: string;
  inputLabel: string;
  selectLabel: string;
  inputValue: string;
  selectValue: string;
  onInputChange?: (value: string) => void;
  onSelectChange?: (value: string) => void;
  options: SelectOption[];
};

export default function InputSelect(props: InputSelectProps) {
  const getOptions = (): React.ReactNode => {
    return props.options.map((option: SelectOption) => {
      return (
        <option key={option.value} value={option.value}>
          {option.display}
        </option>
      );
    });
  };

  return (
    <div className="flex-1">
      <label htmlFor={props.inputId} className="input-label">
        {props.inputLabel}
      </label>
      <div className="relative mt-1 rounded-md">
        <input
          type="text"
          id={props.inputId}
          name={props.inputId}
          data-testid={props.inputId}
          value={props.inputValue}
          onChange={(event) => props.onInputChange?.(event.target.value)}
          className="input-field-text pr-8"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor={props.selectId} className="sr-only">
            {props.selectLabel}
          </label>
          <select
            id={props.selectId}
            name={props.selectId}
            data-testid={props.selectId}
            value={props.selectValue}
            onChange={(event) => props.onSelectChange?.(event.target.value)}
            className="input-field-selectgroup">
            {getOptions()}
          </select>
        </div>
      </div>
    </div>
  );
}
