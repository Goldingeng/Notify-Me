import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.welcomePage}>
            <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default App;
