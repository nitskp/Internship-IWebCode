import clsx from "clsx";
import { useState } from "react";
import { Path,useForm, UseFormRegister } from "react-hook-form";
import "./Select.css";

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



const Select = (props: {
  selectId: string;
  name: string;
  label: string;
  options: string[];
  registerValue:Path<Selects>;
  register:UseFormRegister<Selects>;
  isRequired:boolean;
}) => {
  // const {register,watch} = useForm();
  const [showInfo, setShowInfo] = useState(false);
  const { selectId, name, label, options,registerValue,register,isRequired } = props;
  // console.log(label,':',watch(registerValue));
  return (
    <div className="select-container">
      <div className="select-box">
      <div className="label-container">
        {/* Label  */}
        <label htmlFor={name}>{label}</label>
        {/* For putting info icon next to Race  */}
        {name === "race" ? (
          <span onClick={() => setShowInfo(!showInfo)}>
            <svg
              className="info-icon"
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
            >
              <path d="M2.34372 13.6571C-0.781242 10.5328 -0.781242 5.46508 2.34373 2.34174C5.46662 -0.780571 10.5323 -0.780571 13.6562 2.34168C16.7812 5.4651 16.7812 10.5348 13.6563 13.6571C10.5331 16.7808 5.46724 16.7811 2.34372 13.6571ZM3.03656 12.9639C5.77735 15.7051 10.2226 15.7048 12.9633 12.9637C15.7052 10.2242 15.7052 5.77554 12.9632 3.03502C10.2221 0.295293 5.77669 0.295293 3.03645 3.03502C0.294472 5.77556 0.294472 10.2223 3.03656 12.9639Z" />
              <path d="M9 7H7V12H9V7Z" />
              <path d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" />
            </svg>
          </span>
        ) : (
          <></>
        )}
      </div>
          {/* Select  */}
      <select id={name} {...register(registerValue,{required:isRequired})}>
        {/* for first default option  */}
        <option key={selectId + "-1"} value="">
          {"Select..."}
        </option>
        {options.map((ele, index) => {
          return (
            <option key={selectId + index.toString()} value={ele}>
              {ele}
          {/* {console.log('select options key',selectId + index.toString())} */}
            </option>
          );
        })}
      </select>
      </div>
      {/* For adding info about all the options in 'race' select's case */}
      {name === "race" ? (
        <div
          className={clsx({
            options__details: !showInfo,
            ".options__details--show": showInfo,
          })}
        >
          <div className="race__info">
            <h5>Hispanic or Latino</h5>
            <p>
              A person of Cuban, Mexican, Puerto Rican, South or Central
              American, or other Spanish culture or origin regardless of race.
            </p>
          </div>
          <div className="race__info">
            <h5>White (Not Hispanic or Latino)</h5>
            <p>
              A person having origins in any of the original peoples of Europe,
              the Middle East, or North Africa.
            </p>
          </div>
          <div className="race__info">
            <h5>Black or African American (Not Hispanic or Latino)</h5>
            <p>
              A person having origins in any of the black racial groups of
              Africa.
            </p>
          </div>
          <div className="race__info">
            <h5>
              Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)
            </h5>
            <p>
              A person having origins in any of the peoples of Hawaii, Guam,
              Samoa, or other Pacific Islands.
            </p>
          </div>
          <div className="race__info">
            <h5>Asian (Not Hispanic or Latino)</h5>
            <p>
              A person having origins in any of the original peoples of the Far
              East, Southeast Asia, or the Indian Subcontinent, including, for
              example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan,
              the Philippine Islands, Thailand, and Vietnam.
            </p>
          </div>
          <div className="race__info">
            <h5>Asian (Not Hispanic or Latino)</h5>
            <p>
              A person having origins in any of the original peoples of the Far
              East, Southeast Asia, or the Indian Subcontinent, including, for
              example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan,
              the Philippine Islands, Thailand, and Vietnam.
            </p>
          </div>
          <div className="race__info">
            <h5>American Indian or Alaska Native (Not Hispanic or Latino)</h5>
            <p>
              A person having origins in any of the original peoples of North
              and South America (including Central America), and who maintain
              tribal affiliation or community attachment.
            </p>
          </div>
          <div className="race__info">
            <h5>Two or More Races (Not Hispanic or Latino)</h5>
            <p>
              All persons who identify with more than one of the above five
              races.
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Select;
