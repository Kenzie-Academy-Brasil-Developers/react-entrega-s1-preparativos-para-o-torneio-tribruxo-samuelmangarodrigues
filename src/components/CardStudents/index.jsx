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
      <h1 className="name">{name}</h1>
      <h2>Casa: {house}</h2>
      <h2>Patrono: {patronus}</h2>
      <h2>Espécie: {species}</h2>
    </div>
  );
};
export default CardStudents;
