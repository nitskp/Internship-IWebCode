import Select from "./Select";

const index = (props: {
  selectId: string;
  name: string;
  label: string;
  options: string[];
  registerValue:string

}) => {
  return (
    <Select
      selectId={props.selectId}
      name={props.name}
      label={props.label}
      options={props.options}
      registerValue={props.registerValue}
    />
  );
};

export default index;
