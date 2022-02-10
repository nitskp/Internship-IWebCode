import clsx from "clsx";
import "./Input.css";
import { FieldErrors, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

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
  resumeCV: FileList;
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
  additionalInfo: string;
  gender: Gender;
  race: Race;
  veteran: Veteran;
};

const Input = (props: {
  label: string;
  type: string;
  placeHolder?: string;
  validations: any;
  registerValue: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch?:UseFormWatch<Inputs>
}) => {
  const {
    label,
    type,
    placeHolder,
    validations,
    registerValue,
    register,
    errors,
    watch
  } = props;

  // Change file name upon choosing it

  // const [fileUploaded, setFileUploaded] = useState(false);
  
  let file:any;
  if(watch){
    file = watch(registerValue);
  }
   
  //   if(file!==undefined){
  //     console.log(file[0].name)
  //     fileName=file[0].name;
  //   }
  // } 

  // For all Input error display
  let errorDisplay = <></>;
  if (errors.fullName && registerValue === "fullName") {
    errors.fullName.message = "Enter at least 10 characters";
    errorDisplay = <p>{errors.fullName.message}</p>;
  } else if (errors.email && registerValue === "email") {
    errors.email.message = "Enter a valid email";
    errorDisplay = <p>{errors.email.message}</p>;
  } else if (errors.phone && registerValue === "phone") {
    errors.phone.message = "Enter a valid phone number with country code";
    errorDisplay = <p>{errors.phone.message}</p>;
  } else if (errors.resumeCV && registerValue === "resumeCV") {
    errors.resumeCV.message =
      "File size should be less than 5 Mb and of type pdf";
    errorDisplay = <p>{errors.resumeCV.message}</p>;
  } else if (errors.linkedInUrl && registerValue === "linkedInUrl") {
    errors.linkedInUrl.message = "Enter valid url";
    errorDisplay = <p>{errors.linkedInUrl.message}</p>;
  } else if (errors.githubUrl && registerValue === "githubUrl") {
    errors.githubUrl.message = "Enter valid url";
    errorDisplay = <p>{errors.githubUrl.message}</p>;
  } else if (errors.twitterUrl && registerValue === "twitterUrl") {
    errors.twitterUrl.message = "Enter valid url";
    errorDisplay = <p>{errors.twitterUrl.message}</p>;
  }
  return (
    <div className="input-container">
      {/* Label  */}
      <label
        htmlFor={label}
        className={clsx({ "is-required": validations.required })}
      >
        {label}
      </label>
      {/* Error Message  */}
      {errorDisplay}

      {type !== "file" ? (
        // for all input other than type == file
        <input
          type={type}
          placeholder={placeHolder}
          id={label}
          {...register(registerValue, validations)}
        />
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
          <span className="text">{file?file[0]?file[0].name:'Attach Resume/CV':'Attach Resume/CV'}</span>
          {/* Input type == file tag  */}
          <input
            type={type}
            placeholder={placeHolder}
            id={label}
            {...register(registerValue, validations)}
            accept="application/pdf"
          />
        </div>
      )}
    </div>
  );
};

export default Input;
