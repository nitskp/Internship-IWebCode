import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import './Textarea.css'

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

type Textareas = {
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
  additionalInfo:string;
  gender: Gender;
  race: Race;
  veteran: Veteran;
}


const Teaxtarea = (props: {
  name: string;
  placeHolder: string;
  label: string;
  registerValue:Path<Textareas>;
  register:UseFormRegister<Textareas>
  validations:any
  errors:FieldErrors<Textareas>
}) => {
  // const {register, watch} = useForm();
  const { name, placeHolder, label,registerValue,register, validations, errors } = props;
  // console.log("errors : ", errors.additionalInfo)
  // console.log(registerValue,' : ',watch(registerValue))
  let errorDisplay = <></>
  if(errors.additionalInfo){
    errors.additionalInfo.message = 'Enter at least 30 characters';
    errorDisplay = <p>{errors.additionalInfo.message}</p>
  }
  return (
    <div className='textarea-container'>
      {/* Label  */}
      <label htmlFor={name}>{label}</label>
      {/* Error Message  */}
      {errorDisplay}
      {/* Textarea  */}
      <textarea
        // name={name}
        id={name}
        placeholder={placeHolder}
        {...register(registerValue, validations)}
      ></textarea>
    </div>
  );
};

export default Teaxtarea;
