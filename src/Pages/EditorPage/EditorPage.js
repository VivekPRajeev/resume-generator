import { Provider } from "jotai";
import Form from "../../components/Form";
import TemplateA from "../../resume/TemplateA/TemplateA";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const EditorPage = () => {
  return (
    <Provider>
      <div className="grid grid-cols-12">
        <div className="col-span-5 ">
          {" "}
          <Form />{" "}
        </div>

        <div className="col-span-7  mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
          {" "}
          <Link
            to="/print"
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            title="Print"
          >
            <FontAwesomeIcon icon={faPrint}/> Print
          </Link>
          <TemplateA />{" "}
        </div>
      </div>
    </Provider>
  );
};

export default EditorPage;
