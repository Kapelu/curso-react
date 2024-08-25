import "@/app/css/utility.css";
import "@/app/css/ComponentCard.css";

export function ComponentCard(props) {
  return (
    <div className="componente">
      <div className="card box-shadow">
        <div className="content">
          <div className="img">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
            </svg>
          </div>
          <div className="nombre">
            {props.name}
            <br />
            {props.office ? "Municipal" : "Albañil"}
          </div>
          <div className="p">
            +54{props.phone}
          </div>
            <ul className="list">
              <li className="list-item">{props.address.street}</li>
              <li className="list-item">{props.address.city }</li>
            </ul>
        </div>
      </div>
    </div>
  );
}