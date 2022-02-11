import { Select } from "../Select";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import "./Form.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
  additionalInfo: string;
  gender: Gender;
  race: Race;
  veteran: Veteran;
}

const Form = () => {
  const onChange = () => {
    setIsCaptchaClicked(true);
    setShowCaptchaError(false);
  };
  // Use form hook
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<Inputs>();

  const [isCaptchaClicked, setIsCaptchaClicked] = useState(false);
  const [showCaptchaError, setShowCaptchaError] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsCaptchaClicked(false);
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // Submit Handler
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (isCaptchaClicked) {
      const user = new FormData();
      user.append("identifier", "nitinkpandey4@gmail.com");
      user.append("password", "Thisisthepassword");

      let file: File = formData.resumeCV[0];
      console.log("file:", file);
      const fileData = new FormData();
      fileData.append("files", file);

      console.log("File Data Get all: ", fileData.getAll("files"));

      const apiKeyObject = await fetch("http://localhost:1337/api/auth/local", {
        body: user,
        method: "POST",
      }).then((res) => res.json());

      let jwt = apiKeyObject.jwt;
      console.log("jwt", jwt);

      const fileRef = await fetch("http://localhost:1337/api/upload/", {
        method: "POST",
        body: fileData,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
        .then((res) => res.json())
        .catch((err) => console.log("Error", err));

      console.log("fileRef url", fileRef);

      const newData = {
        fullName: formData.fullName,
        email: formData.email,
        resumeCV: fileRef[0],
        phone: formData.phone,
        company: formData.company,
        linkedInUrl: formData.linkedInUrl,
        twitterUrl: formData.twitterUrl,
        githubUrl: formData.githubUrl,
        portfolioUrl: formData.portfolioUrl,
        otherWebsite: formData.otherWebsite,
        pronoun: formData.pronouns,
        additionalInfo: formData.additionalInfo,
        gender: formData.gender,
        race: formData.race,
        veteran: formData.veteran,
      };

      const sentData = new FormData();
      sentData.append("data", JSON.stringify(newData));
      await fetch("http://localhost:1337/api/forms", {
        method: "POST",
        body: sentData,
        headers: {
          Authorization: "Bearer " + jwt,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("Data at api :", data))
        .catch((err) => console.log("Error", err));
    }
      else{
        console.log('Click the captcha first');
        setShowCaptchaError(true);
      }
    
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {/*Application submit section of the form */}
      <div className="form-section-container">
        {/* Section Heading */}
        <h4>SUBMIT YOUR APPLICATION</h4>
        {/* Input Field */}
        {/* Validations not working for file field  and problem with firebase*/}
        <Input
          label={"Resume/CV"}
          type={"file"}
          placeHolder={""}
          validations={{
            required: true,
            validate: {
              lessThan5Mb: (file: { size: number }[]) => file[0].size < 5e6,
              acceptedFormat: (file: { type: string }[]) =>
                file[0].type === "application/pdf",
            },
          }}
          registerValue={"resumeCV"}
          register={register}
          errors={errors}
          watch={watch}
        />
        {/* Input Field */}
        <Input
          label={"Full name"}
          type={"text"}
          placeHolder={""}
          validations={{ required: true, minLength: 10 }}
          registerValue={"fullName"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Email"}
          type={"email"}
          placeHolder={""}
          validations={{
            required: true,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          }}
          registerValue={"email"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Phone"}
          type={"tel"}
          placeHolder={""}
          validations={{ pattern: /\+91\d{10}/ }} // only for india here
          registerValue={"phone"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Current Company"}
          type={"text"}
          placeHolder={""}
          validations={{}}
          registerValue={"company"}
          register={register}
          errors={errors}
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
          placeHolder={""}
          validations={{ pattern: /^https:\/\/www.linkedin.com\/.*$/ }}
          registerValue={"linkedInUrl"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Twitter URL"}
          type={"url"}
          placeHolder={""}
          validations={{ pattern: /^https:\/\/twitter.com\/.*$/ }}
          registerValue={"twitterUrl"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"GitHub URL"}
          type={"url"}
          placeHolder={""}
          validations={{ pattern: /^https:\/\/github.com\/.*$/ }}
          registerValue={"githubUrl"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Portfolio URL"}
          type={"url"}
          placeHolder={""}
          validations={{}}
          registerValue={"portfolioUrl"}
          register={register}
          errors={errors}
        />
        {/* Input Field */}
        <Input
          label={"Other Website"}
          type={"url"}
          placeHolder={""}
          validations={{}}
          registerValue={"otherWebsite"}
          register={register}
          errors={errors}
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
          placeHolder={"Type your response"}
          validations={{}}
          registerValue={"pronouns"}
          register={register}
          errors={errors}
        />
      </div>

      {/* Additional Information FormSection  */}
      <div className="form-section-container">
        <h4>ADDITIONAL INFORMATION</h4>
        <Textarea
          name="textarea"
          placeHolder="Add a cover letter or anything else you want to share"
          label=""
          registerValue="additionalInfo"
          register={register}
          validations={{ minLength: 30 }}
          errors={errors}
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
        />
      </div>
      {/* Captcha  */}
      <div className="captcha-container">
        <ReCAPTCHA
          sitekey="6LeMN2keAAAAABtNO4pSKFyCoEdqjAOXojYKKEEo"
          onChange={onChange}
        />
        {showCaptchaError ? <p>Captcha not clicked</p> : <></>}
      </div>
      {/* <input type='reset' value='reserfields'/> */}
      {/* Submit Button  */}
      <div className="submit-button-container">
        <input type="submit" value="Submit Application" />
      </div>
      {/* {isSubmitted?reset():console.log('Not reset')} */}
    </form>
  );
};

export default Form;
