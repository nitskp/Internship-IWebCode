import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import './InputField.css'


const InputField = (props: { dataObject: any }) => {
  const dataObject = props.dataObject;
  const fieldName = dataObject.fieldName;
  
  return (
    dataObject.label ==="If you'd like, please share your pronouns with us."?<div className="input-container--next-line">
       <Input inputDataObject={dataObject} />
    </div>:
    <div className="input-container">
      {fieldName === "input" ? 
      
      (
        <Input inputDataObject={dataObject} />
      ) : fieldName === "select" ? (
        <Select selectDataObject={dataObject}/>
      ) : (
        <Textarea textAreaObject={dataObject}/>// Will decide on textarea later
      )}
    </div>
  );
};

export default InputField;
