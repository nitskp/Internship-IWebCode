
import Input from "./Input";

const index = (props: {
  label: string;
  isRequired: boolean;
  type: string;
  placeHolder: string;
  validations: any;
  registerValue: string
}) => {
  return (
    <Input
      label={props.label}
      isRequired={props.isRequired}
      type={props.type}
      placeHolder={props.placeHolder}
      validations={props.validations}
      registerValue={props.registerValue}
    />
  );
};

export default index;
