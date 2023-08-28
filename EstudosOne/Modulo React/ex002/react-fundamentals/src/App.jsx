import Title from "./Title";
import styles from "./App.module.css"

export default function App() {
  const status = true;

  return (
    <div className={styles.app}>
      <Title />
      <h2>It's easy, like 1 + 1 is {1 + 1}</h2>
      <h2  style={{
        color: status ? "#00ff9f" : "#f64348"
      }}
    >Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  );
}
