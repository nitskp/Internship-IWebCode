import Select from "../Select";
import "./Form.css";

import Captcha from "../Captcha";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Teaxtarea from "../Textarea";

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
  additionalInfo: string;
  gender: Gender;
  race: Race;
  veteran: Veteran;
}

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {/*Application submit section of the form */}
      <div className="form-section-container">
        {/* Section Heading */}
        <h4>SUBMIT YOUR APPLICATION</h4>
        {/* Input Field */}
        <Input
          label={"Resume/CV"}
          type={"file"}
          isRequired={true}
          placeHolder={""}
          validations={{
            validate: {
              lessThan5Mb: (file: { size: number; }[]) =>file[0].size < 500000,
              acceptedFormat: (file: { type: string; }[]) => file[0].type === "application/pdf",}
          }}
          registerValue={"resumeCV"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Full name"}
          type={"text"}
          isRequired={true}
          placeHolder={""}
          validations={{ minLength: 10 }}
          registerValue={"fullName"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Email"}
          type={"email"}
          isRequired={true}
          placeHolder={""}
          validations={{ pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ }}
          registerValue={"email"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Phone"}
          type={"tel"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"phone"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Current Company"}
          type={"text"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"company"}
          register={register}
        />
      </div>

      {/* Link section of the form */}
      <div className="form-section-container">
        {/* Section Heading */}
        <h4>LINKS</h4>
        {/* Input Field */}
        <Input
          label={"LinkedIn URL"}
          type={"url"}
          isRequired={false}
          placeHolder={""}
          validations={{ pattern: /^https:\/\/www.linkedin.com\/.*$/ }}
          registerValue={"linkedInUrl"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Twitter URL"}
          type={"url"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"twitterUrl"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"GitHub URL"}
          type={"url"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"githubUrl"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Portfolio URL"}
          type={"url"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"portfolioUrl"}
          register={register}
        />
        {/* Input Field */}
        <Input
          label={"Other Website"}
          type={"url"}
          isRequired={false}
          placeHolder={""}
          validations={{}}
          registerValue={"otherWebsite"}
          register={register}
        />
      </div>

      {/* Pronoun FormSection */}
      <div className="form-section-container pronouns">
        {/* Section Heading  */}
        <h4>PREFERRED PRONOUNS</h4>
        {/* Extra text  */}
        <p>If you'd like, please share your pronouns with us.</p>
        {/* Input Field */}
        <Input
          label={""}
          type={"text"}
          isRequired={false}
          placeHolder={"Type your response"}
          validations={{}}
          registerValue={"pronouns"}
          register={register}
        />
      </div>

      {/* Additional Information FormSection  */}
      <div className="form-section-container">
        <h4>ADDITIONAL INFORMATION</h4>
        <Teaxtarea
          name="textarea"
          placeHolder="Add a cover letter or anything else you want to share"
          label=""
          registerValue="additionalInfo"
          register={register}
          validations={{ minLength: 30 }} // need to work on accepting it empty too
        />
      </div>

      {/* Form Section US Employment  */}
      <div className="form-section-container">
        {/* Section Heading  */}
        <h4>
          U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION{" "}
          <span>
            (Completion is voluntary and will not subject you to adverse
            treatment)
          </span>{" "}
        </h4>
        {/* Extra Text  */}
        <p>
          Our company values diversity. To ensure that we comply with reporting
          requirements and to learn more about how we can increase diversity in
          our candidate pool, we invite you to voluntarily provide demographic
          information in a confidential survey at the end of this application.
          Providing this information is optional. It will not be accessible or
          used in the hiring process, and has no effect on your opportunity for
          employment.
        </p>
        {/* Gender Select Field  */}
        <Select
          selectId={"s1"} // This is for rendering select options. For providing unique key
          label={"Gender"}
          name={"gender"}
          options={["Male", "Female", "Decline to self Identify"]}
          registerValue={"gender"}
          register={register}
          isRequired={true}
        />
        {/* Race Select Field  */}
        <Select
          selectId={"s2"}
          label={"Race"}
          name={"race"}
          options={[
            "Hispanic or Latino",
            "White (Not Hispanic or Latino)",
            "Black or African American (Not Hispanic or Latino)",
            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
            "Asian (Not Hispanic or Latino)",
            "American Indian or Alaska Native (Not Hispanic or Latino)",
            "Two or More Races (Not Hispanic or Latino)",
            "Decline to self-identify",
          ]}
          registerValue={"race"}
          register={register}
          isRequired={false}
        />
        {/* Veteran Status Field  */}
        <Select
          selectId={"s3"}
          label={"Veteran Status"}
          name={"veteran-status"}
          options={[
            "I am a veteran",
            "I am not a veteran",
            "Decline to self identify",
          ]}
          registerValue={"veteran"}
          register={register}
          isRequired={false}
        />
      </div>
      {/* Captcha Component  */}
      <Captcha />
      {/* Submit Button  */}
      <div className="submit-button-container">
        <input type="submit" value="Submit Application" />
      </div>
    </form>
  );
};

export default Form;
