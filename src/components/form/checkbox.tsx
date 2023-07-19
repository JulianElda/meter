import classes from "./form.module.css";

type CheckboxProps = {
  id: string;
  label: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={props.id}
          name={props.id}
          data-testid={props.id}
          checked={props.value}
          onChange={(event) => props.onChange?.(event.target.checked)}
          className={classes.checkbox}
        />
      </div>
      <div className="ml-3">
        <label
          htmlFor={props.id}
          className={classes.label}>
          {props.label}
        </label>
      </div>
    </div>
  );
}
