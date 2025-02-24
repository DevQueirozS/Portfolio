import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao nosso site!</p>
      <Link to="/about">Ir para Sobre</Link>
    </div>
  );
}
