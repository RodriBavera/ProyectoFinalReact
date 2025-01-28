import "./TituloPrincipal.css";

const TituloPrincipal = ({texto}) => {
  return (
    <div>
        <h1 className="tituloPrincipal">{texto}</h1>
    </div>
  )
}

export default TituloPrincipal