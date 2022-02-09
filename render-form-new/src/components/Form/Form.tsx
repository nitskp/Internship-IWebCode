import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
  }
  // Use form hook
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitSuccessful },
    reset,
  } = useForm<Inputs>();

  const [isCaptchaClicked, setIsCaptchaClicked] = useState(false);
  const [showCaptchaError,setShowCaptchaError] = useState(false);

  useEffect(()=>{
    if(isSubmitSuccessful){
      setIsCaptchaClicked(false)
    reset()
    }
  },[isSubmitSuccessful,reset])

  //  FIREBASE DATA SUBMIT
  const firebaseConfig = {
    apiKey: "AIzaSyAUoBrhcXf2TyL9rjXJnHCxM-j9T0sQwo8",
    authDomain: "render-form.firebaseapp.com",
    projectId: "render-form",
    storageBucket: "render-form.appspot.com",
    messagingSenderId: "623895579983",
    appId: "1:623895579983:web:caf33f382026a6e5b8493a",
    measurementId: "G-5CETP3MHQ5",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Submit Handler
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isCaptchaClicked) {
      // Changing file ref so that this can upload
      const file = data.resumeCV[0];
      const storage = getStorage();
      const storageRef = ref(storage, "file/" + file.name);
      uploadBytes(storageRef, file).then(() => console.log("File Upload"));
      // Storing rest of the data in another object
      const firebaseData = {
        additionalInfo: data.additionalInfo,
        company: data.company,
        email: data.email,
        fullName: data.fullName,
        gender: data.gender,
        githubUrl: data.githubUrl,
        linkedInUrl: data.linkedInUrl,
        otherWebsite: data.otherWebsite,
        phone: data.phone,
        portfolioUrl: data.portfolioUrl,
        pronouns: data.pronouns,
        race: data.race,
        twitterUrl: data.twitterUrl,
        veteran: data.veteran,
      };
      // Submitted data to firebase
      try {
        const docRef = await addDoc(collection(db, "users"), firebaseData);
        console.log("Document written with ID :", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      alert("form submitted");
      setIsCaptchaClicked(false);
    } else {
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
        {showCaptchaError?<p>Captcha not clicked</p>:<></>}
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
