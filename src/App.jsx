import {
  BackgroundChanger,
  CurrencyConvertor,
  PasswordGenerator,
  ThemeChanger,
} from "./components";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <main>
      <BackgroundChanger />
      <PasswordGenerator />
      <CurrencyConvertor />
      <ThemeProvider>
        <ThemeChanger />
      </ThemeProvider>
    </main>
  );
}

export default App;
