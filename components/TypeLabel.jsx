import styles from "./TypeLabel.module.css";

export default function TypeLabel({ type, className, ...rest }) {
  return (
    <span className={`${styles.label} ${className}`} {...rest}>
      {type}
    </span>
  );
}
