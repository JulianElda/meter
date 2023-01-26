type SelectProps = {
  id: string;
  label: string;
  value: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
};
export type SelectOption = {
  display: string;
  value: string;
};

export default function Select(props: SelectProps) {
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
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <div className="mt-1">
        <select
          id={props.id}
          name={props.id}
          data-testid={props.id}
          value={props.value}
          onChange={(event) => props.onChange?.(event.target.value)}
          className="input-field-text">
          {getOptions()}
        </select>
      </div>
    </div>
  );
}
