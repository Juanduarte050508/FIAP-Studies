
export default function Home() {
  // const nome = "Ana";
  const Botao = ({ texto }) => <button>{texto}</button>;
  const BotaoGrande = (props) => {
  
  return <button className="btn bnt-lg" >{texto}
  </button>
}
  
  return (
    <>
      <div>
        {/* {className = define uma classe no JSX} */}
        <h1 onClick="" className="">Welcome to the real world! </h1>
      </div>
      <p>
        {/* Isto exibirá 0 na tela */}
        {pontos && 'Você tem pontos'}
      </p>

      <p>
        {/* Melhor: evita mostrar 0 */}
        {pontos > 0 ? 'Você tem pontos' : null}
      </p>

      <button
        style={estilo}
        className={ativo ? 'btn btn-primary' : 'btn btn-outline'}
      >
        Botão
      </button>
    </>
  );
}
