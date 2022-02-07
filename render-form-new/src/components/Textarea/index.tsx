
import Teaxtarea from "./Teaxtarea";

const index = (props: {
  name: string;
  placeHolder: string;
  label: string;
  registerValue: string;
}) => {
  return (
    <Teaxtarea
      name={props.name}
      label={props.label}
      placeHolder={props.placeHolder}
      registerValue={props.registerValue}
    />
  );
};

export default index;
