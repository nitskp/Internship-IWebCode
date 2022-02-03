import React from 'react'
import Heading from '../Heading/Heading'
import Details from '../Details/Details';
import './FormSection.css'

const FormSection = (props:{formSectionData:any}) => {
  const formSectionData = props.formSectionData;
  const isText = formSectionData.isText;
  const formHeading = formSectionData.formHeading;
  // console.log(props.formSectionData);
  return(
    <div className='form-section-container'>
      {
        isText?<h4>{formHeading}<span> (Completion is voluntary and will not subject you to adverse treatment)</span></h4>:formHeading===""?<></>:
        <Heading type='h4' name={formHeading} />
      }
      <Details key={"Form-Section"+formSectionData.label} isText={isText} fields={formSectionData.isText?formSectionData.textData:formSectionData.fields}/>
    </div>
  )
}

export default FormSection
