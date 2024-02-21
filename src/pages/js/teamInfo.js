import { useParams } from "react-router-dom";
import { data_chefs } from "../../data/dataChefs";
import "../css/teamInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import LandingSection from "../../component/js/LandingSection";
import ChefDom from "../../component/js/ChefDom";
let data = data_chefs.slice(0, 3);
export default function TeamInfo() {
  const params = useParams();
  //find the selected chef to show his details
  const choosenChef = data_chefs.find((c) => {
    return +c.id === +params.id;
  });
  return (
    <>
      <LandingSection title={`Our team / ${choosenChef.name}`}></LandingSection>
      <div className="container">
        <div className=" row teamInfo mb-5 justify-content-between">
          <div className="col-md-8">
            <h2 className="fw-bold">{choosenChef.name}</h2>
            <p style={{ color: "var(--second--color)" }} className="fw-bold">
              {choosenChef.jop}
            </p>
            <p className="mb-4 mt-4">{choosenChef.jopDes}</p>
            <ul className=" d-flex   ">
              <li className="list-group-item fs-3 rounded me-3 cursor-pointer text-align-center">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="list-group-item fs-3 rounded  me-3 cursor-pointer text-align-center">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="list-group-item fs-3 rounded  me-3 cursor-pointer text-align-center">
                <FontAwesomeIcon icon={faPinterestP} />
              </li>
              <li className="list-group-item fs-3 rounded  me-3 cursor-pointer text-align-center">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
            </ul>
          </div>
          <div className="col-md-4" style={{ height: "350px" }}>
            <img
              src={choosenChef.img}
              className="w-100 h-100 rounded"
              alt=""
              width="640"
              height="160"
            ></img>
          </div>
        </div>

        <div className="  mb-5  w-100 row skills">
          <div className="col-md-6">
            <h4 className="fw-bolder mb-3">Info</h4>
            <ul className="p-0 me-5 pe-5">
              <li className="list-group-item ">
                <p className="d-inline-block">Experience: </p>
                <span className="fw-bolder"> {choosenChef.Experience}</span>
              </li>
              <li className="list-group-item ">
                <p className="d-inline-block">Phone: </p>
                <span className="fw-bolder"> {choosenChef.Phone}</span>
              </li>
              <li className="list-group-item ">
                <p className="d-inline-block">Email: </p>
                <span className="fw-bolder"> {choosenChef.Email}</span>
              </li>
              <li className="list-group-item ">
                <p className="d-inline-block">Address: </p>
                <span className="fw-bolder"> {choosenChef.Address}</span>
              </li>
            </ul>
          </div>

          <div className="col-md-6 ">
            <h4 className="fw-bolder mb-3">Skill</h4>
            <p className="mb-2"> Repairs</p>
            <div
              className="progress mb-2"
              role="progressbar"
              aria-label="Danger striped example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar progress-bar-striped bg-danger"
                style={{ width: `${choosenChef.Repairs}%` }}
                data-val={choosenChef.Repairs}
                data-role="progressbar"
              >
                {choosenChef.Repairs}%
              </div>
            </div>
            <p className="mb-2"> Develope</p>
            <div
              className="progress mb-2"
              role="progressbar"
              aria-label="Danger striped example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar progress-bar-striped bg-danger"
                style={{ width: `${choosenChef.Develope}%` }}
                data-val={choosenChef.Develope}
                data-role="progressbar"
              >
                {choosenChef.Develope}%
              </div>
            </div>
            <p className="mb-2"> Organization</p>
            <div
              className="progress mb-2"
              role="progressbar"
              aria-label="Danger striped example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar progress-bar-striped bg-danger"
                style={{ width: `${choosenChef.Organization}%` }}
                data-val={choosenChef.Organization}
                data-role="progressbar"
              >
                {choosenChef.Organization}%
              </div>
            </div>
          </div>
        </div>
        <div className=" relatedTeam">
          <h3 className=" fw-bolder mb-4 pt-5 border-top">Related Chef</h3>
          <div className="d-flex overflow-hidden text-white chefs-team flex-wrap mb-5 text-center">
            {data.map((chef) => {
              return <ChefDom chef={chef} key={chef.id}></ChefDom>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
