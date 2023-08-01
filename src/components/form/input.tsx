import styles from "./form.module.css";

type InputProps = {
  id: string;
  type: "text" | "number";
  label: string;
  value: string | number;
  onChange?: (value: string) => void;
};

export default function Input(props: InputProps) {
  return (
    <div className="flex-1">
      <label
        htmlFor={props.id}
        className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        data-testid={props.id}
        value={props.value}
        onChange={(event) => props.onChange?.(event.target.value)}
        className={styles.fieldtext}
      />
    </div>
  );
}
