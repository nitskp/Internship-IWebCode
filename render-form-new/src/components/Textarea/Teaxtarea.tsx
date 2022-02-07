import { useForm } from 'react-hook-form';
import './Textarea.css'

const Teaxtarea = (props: {
  name: string;
  placeHolder: string;
  label: string;
  registerValue:string;
}) => {
  const {register, watch} = useForm();
  const { name, placeHolder, label,registerValue } = props;
  // console.log(registerValue,' : ',watch(registerValue))
  return (
    <div className='textarea-container'>
      {/* Label  */}
      <label htmlFor={name}>{label}</label>
      {/* Textarea  */}
      <textarea
        // name={name}
        id={name}
        placeholder={placeHolder}
        {...register(registerValue)}
      ></textarea>
    </div>
  );
};

export default Teaxtarea;
