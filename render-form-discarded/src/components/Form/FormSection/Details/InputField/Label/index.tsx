import Label from './Label'

const index = (props:{labelValue:string, htmlFor:string}) => {
  return (
    <Label labelValue={props.labelValue} htmlFor={props.htmlFor}/>
  )
}

export default index
