import "./style.css";

const CardStudents = ({ name, house, patronus, image, species }) => {
  return (
    <div className="container">
      <img
        className="imgs"
        src={
          image === ""
            ? "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png"
            : image
        }
        alt={name}
      />
      <div>
        <h1 className="name">{name}</h1>
        <span>
          {" "}
          <strong>Casa: </strong>{" "}
          {house === "" ? <div>Casa não informada</div> : house}
        </span>
        <span>
          <strong>Patrono: </strong>
          {patronus === "" ? <div>Patrono não informado</div> : patronus}
        </span>
        <span>
          <strong>Espécie: </strong> {species}
        </span>
      </div>
    </div>
  );
};
export default CardStudents;
