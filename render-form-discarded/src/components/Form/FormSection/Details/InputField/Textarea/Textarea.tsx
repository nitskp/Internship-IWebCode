import './Textarea.css'

const Textarea = (props:{textAreaObject:any}) => {
  const textAreaObject = props.textAreaObject;
  const placeHolder = textAreaObject.placeholder;
  return (
    <textarea >
    {placeHolder}  
    </textarea>
  )
}

export default Textarea
