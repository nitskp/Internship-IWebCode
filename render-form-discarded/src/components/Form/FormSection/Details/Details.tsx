
import InfoField from "./InfoField";
import InputField from "./InputField";

// fieldName: "input",
// label: "Resume/CV",
// type: "file",
// placeHolder: "Attach Resume/CV",
// isRequired: true,

interface inputField{
  fieldName:string,
  label:string,
  type:string,
  placeHolder:string,
  isRequired:boolean
}

const Details = (props: { isText: boolean; fields: any[] }) => {
  const isText = props.isText;
  const fields = props.fields;
  return (
    <div className="details-container">
      {isText
        ? fields.map((ele, indx) => {
            return (
              <InfoField
                key={"Details" + ele.data1 + indx.toString()}
                text={ele}
              />
            );
          })
        : fields.map((ele, indx) => {
            return (
              <InputField
                key={"Details" + ele.label + indx.toString()}
                dataObject={ele}
              />
            );
          })}
    </div>
  );
};

export default Details;
