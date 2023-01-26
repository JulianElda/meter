type InputProps = {
  id: string;
  label: string;
  value: string;
  onChange?: (value: string) => void;
};

export default function Input(props: InputProps) {
  return (
    <div className="flex-1">
      <label htmlFor={props.id} className="input-label">
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        data-testid={props.id}
        value={props.value}
        onChange={(event) => props.onChange?.(event.target.value)}
        className="input-field-text"
      />
    </div>
  );
}
