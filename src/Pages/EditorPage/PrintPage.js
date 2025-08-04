import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TemplateA from "../../resume/TemplateA/TemplateA";
import { Link } from "react-router-dom";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const PrintPage = () => {
  return (
    <>
      <Link
        to="/"
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 print:hidden"
        title="Print"
      >
        <FontAwesomeIcon icon={faBackward} /> Back
      </Link>
      <TemplateA />
    </>
  );
};

export default PrintPage;
