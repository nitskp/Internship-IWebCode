import clsx from "clsx";
import "./Input.css";
import { Path, UseFormRegister } from "react-hook-form";

enum Gender {
  male = "male",
  female = "female",
  decline = "decline to self identify",
}

enum Race {
  hispanic = "Hispanic or Latino",
  white = "White (Not Hispanic or Latino)",
  black = "Black or African American (Not Hispanic or Latino)",
  hawaiian = "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
  asian = "Asian (Not Hispanic or Latino)",
  american = "American Indian or Alaska Native (Not Hispanic or Latino)",
  mixed = "Two or More Races (Not Hispanic or Latino)",
  decline = "Decline to self-identify",
}

enum Veteran {
  veteran = "I am a veteran",
  notVeteran = "I am not a veteran",
  decline = "Decline to self identify",
}

type Inputs = {
  resumeCV: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  linkedInUrl: string;
  twitterUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  otherWebsite: string;
  pronouns: string;
  additionalInfo:string;
  gender: Gender;
  race: Race;
  veteran: Veteran;
}



const Input = (props: {
  label: string;
  isRequired: boolean;
  type: string;
  placeHolder: string;
  validations: any;
  registerValue:Path<Inputs>;
  register:UseFormRegister<Inputs>
}) => {
  
  const { label, isRequired, type, placeHolder, validations,registerValue, register } = props;
  // console.log(label, ':',watch(registerValue))
  console.log(validations);
  return (
    <div className="input-container">
      {/* Label  */}
      <label htmlFor={label} className={clsx({ "is-required": isRequired })}>
        {label}
      </label>
      
      {type !== "file" ? (
        // for all input other than type == file
        <input type={type} placeholder={placeHolder} id={label} {...register(registerValue,validations)} />
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
          <input type={type} placeholder={placeHolder} id={label} {...register(registerValue,{required:isRequired})}/>
        </div>
      )}
    </div>
  );
};

export default Input;
