const HomePage = ({ isRoting }) => {
  return (
    <>
      <h1>
        Clique no botão abaixo e veja quais bruxos, participarão do Torneio
        Tribuxo
      </h1>
      <button className="Btns" onClick={isRoting}>
        Começar
      </button>
    </>
  );
};
export default HomePage;
