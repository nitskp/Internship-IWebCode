import React from "react";
import { arrayBuffer } from "stream/consumers";
import FormSection from "../FormSection/FormSection";
import Captcha from "../Captcha/Captcha";
import SubmitButton from "../SubmitButton/SubmitButton";
import './Form.css'

const Form = () => {
  let data: any[] = [
    {
      formHeading: "Submit Your Application",

      isText: false,
      fields: [
        {
          fieldName: "input",
          label: "Resume/CV",
          type: "file",
          placeHolder: "Attach Resume/CV",
          isRequired: true,
        },
        {
          fieldName: "input",
          label: "Full Name",
          type: "text",
          placeHolder: "",
          isRequired: true,
        },
        {
          fieldName: "input",
          label: "Email",
          type: "email",
          placeHolder: "",
          isRequired: true,
        },
        {
          fieldName: "input",
          label: "Phone",
          type: "tel",
          placeHolder: "",
          isRequired: false,
        },
        {
          fieldName: "input",
          label: "Current Company",
          type: "text",
          placeHolder: "",
          isRequired: false,
        },
      ],
    },
    {
      formHeading: "Links",

      isText: false,
      fields: [
        {
          fieldName: "input",
          label: "LinkedIn URL",
          type: "url",
          placeHolder: "",
          isRequired: false,
        },
        {
          fieldName: "input",
          label: "Twitter URL",
          type: "url",
          placeHolder: "",
          isRequired: false,
        },
        {
          fieldName: "input",
          label: "Github URL",
          type: "url",
          placeHolder: "",
          isRequired: false,
        },
        {
          fieldName: "input",
          label: "Portfolio URL",
          type: "url",
          placeHolder: "",
          isRequired: false,
        },
        {
          fieldName: "input",
          label: "Other Website",
          type: "url",
          placeHolder: "",
          isRequired: false,
        },
      ],
    },
    {
      formHeading: "PREFERRED PRONOUNS",

      isText: false,
      fields: [
        {
          fieldName: "input",
          label: "If you'd like, please share your pronouns with us.",
          placeHolder: "Type your response",
        },
      ],
    },
    {
      formHeading: "ADDITIONAL INFORMATION",

      isText: false,
      fields: [
        {
          fieldName: "textarea",
          placeHolder: "Add a cover letter or anything else you want to share",
        },
      ],
    },
    {
      formHeading: "U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION",

      isText: true,
      textData: [
        // "(Completion is voluntary and will not subject you to adverse treatment)", see a way to include this

        "Our company values diversity. To ensure that we comply with reporting requirements and to learn more about how we can increase diversity in our candidate pool, we invite you to voluntarily provide demographic information in a confidential survey at the end of this application. Providing this information is optional. It will not be accessible or used in the hiring process, and has no effect on your opportunity for employment.",
        ,
      ],
    },
    {
      formHeading: "",

      isText: false,
      fields: [
        {
          // add special requirements for select
          fieldName: "select",
          name: "gender",
          label: "Gender",
          options: ["Male", "Female", "Decline to self Identify"],
          placeHolder: "Select...",
          isRequired: false,
        },
      ],
    },
    {
      formHeading: "",

      isText: false,
      fields: [
        {
          fieldName: "select",
          name: "race",
          label: "Race",
          options: [
            "Hispanic or Latino",
            "White (Not Hispanic or Latino)",
            "Black or African American (Not Hispanic or Latino)",
            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
            "Asian (Not Hispanic or Latino)",
            "American Indian or Alaska Native (Not Hispanic or Latino)",
            "Two or More Races (Not Hispanic or Latino)",
            "Decline to self-identify"
          ],
          placeHolder: "Select...",
          isRequired: false,
        },
      ],
    },
    {
      formHeading: "",
      isText: false,
      fields: [
        {
          fieldName: "select",
          name: "veteran-status",
          label: "Veteran Status",
          options: [
            "I am a veteran",
            "I am not a veteran",
            "Decline to self identify",
          ],
          placeHolder: "Select...",
          isRequired: false,
        },
      ],
    },
  ];

  return (
    <div className="form-container">
      {data.map((ele, index) => (
        //pass the whole ele as a prop
        <FormSection
          key={"Form" + ele.formHeading + index.toString()}
          formSectionData={ele}
        />
      ))}

      <Captcha />
      <SubmitButton />
    </div>
  );
};

export default Form;
