
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import Input from "./Input";

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

interface Inputs {
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


const index = (props: {
  label: string;
  isRequired: boolean;
  type: string;
  placeHolder?: string;
  validations: any;
  registerValue: Path<Inputs>,
  register:UseFormRegister<Inputs>,
  errors:FieldErrors<Inputs>
}) => {
  return (
    <Input
      label={props.label}
      isRequired={props.isRequired}
      type={props.type}
      placeHolder={props.placeHolder}
      validations={props.validations}
      registerValue={props.registerValue}
      register={props.register}
      errors={props.errors}
     
    />
  );
};

export default index;
