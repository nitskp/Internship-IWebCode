import './InfoField.css'

const InfoField = (props:{text:any}) => {
    const text = props.text;
  return (
    <p>
      {text}
    </p>
  )
}

export default InfoField
