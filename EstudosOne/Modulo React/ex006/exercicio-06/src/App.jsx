import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);
  const [copyText, setCopyText] = useState("Copiar");

  // ...

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      </div>
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>
  );
}

export default App;
