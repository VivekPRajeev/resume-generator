import { Provider } from "jotai";
import Form from "../../components/Form";
import TemplateA from "../../resume/TemplateA/TemplateA";

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
          <TemplateA />{" "}
        </div>
      </div>
    </Provider>
  );
};

export default EditorPage;
