import Heading from "../../Heading";
import Details from "./Details";
import "./FormSection.css";

interface InputField {
  formHeading: string;
  isText: false;
  fields: any[];
}

interface InfoField {
  formHeading: string;
  isText: true;
  textData: string[];
}

const FormSection = (props: { formSectionData: InputField | InfoField }) => {
  const formSectionData = props.formSectionData;
  const isText = formSectionData.isText;
  const formHeading = formSectionData.formHeading;

  return (
    <div className="form-section-container">
      {isText ? (
        <>
          <hr />
          <h4>
            {formHeading}
            <span>
              {" "}
              (Completion is voluntary and will not subject you to adverse
              treatment)
            </span>
          </h4>
        </>
      ) : formHeading === "" ? (
        <></>
      ) : (
        <Heading type="h4" name={formHeading} />
      )}
      <Details
        key={"Form-Section" + formSectionData.formHeading}
        isText={isText}
        fields={
          formSectionData.isText
            ? formSectionData.textData
            : formSectionData.fields
        }
      />
    </div>
  );
};

export default FormSection;
