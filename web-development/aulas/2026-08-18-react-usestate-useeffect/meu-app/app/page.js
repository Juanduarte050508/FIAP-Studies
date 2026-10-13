import styles from "./page.module.css";

import Contador from "./componentes/Contador";
import Exercicio1Contador from "./Exercicio1Contador";
import Exercicio2Relogio from "./Exercicio2Relogio";
import Exercicio3InputControlado from "./Exercicio3InputControlado";
import Exercicio4TodoSimples from "./Exercicio4TodoSimples";
import Exercicio5Timer from "./Exercicio5Timer";
import Exercicio6TemaClaroEscuro from "./Exercicio6TemaClaroEscuro";
import Exercicio7BuscaAPI from "./Exercicio7BuscaAPI";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Aula: Estado e Hooks (useState / useEffect)</h1>
          <p>Exemplo da aula (lousa) e os 7 exercícios praticados.</p>
        </div>

        <section className="mb-4">
          <h2>Exemplo da aula: Contador</h2>
          <Contador />
        </section>

        <section className="mb-4">
          <h2>Exercício 1: Contador (+1 / -1)</h2>
          <Exercicio1Contador />
        </section>

        <section className="mb-4">
          <h2>Exercício 2: Relógio</h2>
          <Exercicio2Relogio />
        </section>

        <section className="mb-4">
          <h2>Exercício 3: Campo de texto controlado</h2>
          <Exercicio3InputControlado />
        </section>

        <section className="mb-4">
          <h2>Exercício 4: To-Do simples</h2>
          <Exercicio4TodoSimples />
        </section>

        <section className="mb-4">
          <h2>Exercício 5: Timer (Iniciar/Pausar/Reset)</h2>
          <Exercicio5Timer />
        </section>

        <section className="mb-4">
          <h2>Exercício 6: Tema Claro/Escuro</h2>
          <Exercicio6TemaClaroEscuro />
        </section>

        <section className="mb-4">
          <h2>Exercício 7 (Desafio): Busca em API</h2>
          <Exercicio7BuscaAPI />
        </section>
      </main>
    </div>
  );
}
