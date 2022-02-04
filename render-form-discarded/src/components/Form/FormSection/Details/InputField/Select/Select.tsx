import Label from '../Label'
import './select.css'
// fieldName: "select",
// name: veteran-status
//           label: "Veteran Status",
//           options: ["I am a veteran","I am not a veteran", "Decline to self identify"],
//           placeHolder: "Select...",
//           isRequired: false,

const Select = (props:{selectDataObject:any}) => {
    const selectDataObject = props.selectDataObject;
    const name = props.selectDataObject;
    const label = selectDataObject.label;
    const options:string[] = selectDataObject.options;
    const placeHolder = selectDataObject.placeHolder;
    const isRequired = selectDataObject.isRequired;
  return (
      <>
       <Label htmlFor={name} labelValue={label}/>
    <select name={name} placeholder={placeHolder} id={name}>
    <option key={"Select" + placeHolder} value="" selected>{placeHolder}</option>
        {
            
            options.map(ele=>{
                return(
                    <option key={"Select" + ele} value={ele}>{ele}</option>
                )
            })
        }
    </select>
      </>
     
      
    
  )
}

export default Select
