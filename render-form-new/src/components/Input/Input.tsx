import clsx from "clsx";
import "./Input.css";
import { useForm } from "react-hook-form";

const Input = (props: {
  label: string;
  isRequired: boolean;
  type: string;
  placeHolder: string;
  validations: any;
  registerValue:string;
}) => {
  const{register, watch} = useForm();
  const { label, isRequired, type, placeHolder, registerValue } = props;
  // console.log(label, ':',watch(registerValue))
  return (
    <div className="input-container">
      {/* Label  */}
      <label htmlFor={label} className={clsx({ "is-required": isRequired })}>
        {label}
      </label>
      
      {type !== "file" ? (
        // for all input other than type == file
        <input type={type} placeholder={placeHolder} id={label} {...register(registerValue)} />
      ) : (
        // For type==file input 
        // For attaching clip image and accompanying text
        <div className="file-container">
          {/* Clip Image  */}
          <span className="button-clip">
            <svg width="16px" height="16px" viewBox="0 0 16 16">
              <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
            </svg>
          </span>
          {/* Accompanying Text  */}
          <span className="text">
            Attach Resume/CV
          </span>
          {/* Input type == file tag  */}
          <input type={type} placeholder={placeHolder} id={label} {...register(registerValue)}/>
        </div>
      )}
    </div>
  );
};

export default Input;