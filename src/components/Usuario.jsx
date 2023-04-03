import { Link } from "react-router-dom";
export const Usuario = ({ nome, cargo, redes }) => {
  return (
    <div>
      <h2 className="display-1">{nome}</h2>
      <div className="d-flex">
        <span className="lead flex-grow-1">{cargo}</span>
        {redes.map((rede) => (
          <Link
            className="lead mx-1"
            role="button"
            to={rede.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`bi ${rede.icone}`}></i>
          </Link>

        ))}

      </div>
    </div>
  );
};
