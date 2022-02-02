import React from 'react'
import Heading from '../Heading/Heading'
import Details from '../Details/Details';

const FormSection = (props:{formSectionData:any}) => {
  const formSectionData = props.formSectionData;
  // console.log(props.formSectionData);
  return(
    <div className='form-section-container'>
      <Heading type='h2' name={formSectionData.formHeading}/>
      <Details key={"Form-Section"+formSectionData.label} isText={formSectionData.isText} fields={formSectionData.fields}/>
    </div>
  )
}

export default FormSection
