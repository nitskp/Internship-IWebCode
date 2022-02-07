import { Path, UseFormRegister } from "react-hook-form";
import Select from "./Select";

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

type Selects = {
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


const index = (props: {
  selectId: string;
  name: string;
  label: string;
  options: string[];
  registerValue:Path<Selects>;
  register:UseFormRegister<Selects>
  isRequired:boolean

}) => {
  return (
    <Select
      selectId={props.selectId}
      name={props.name}
      label={props.label}
      options={props.options}
      registerValue={props.registerValue}
      register={props.register}
      isRequired={true}
    />
  );
};

export default index;
