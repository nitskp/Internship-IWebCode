import Heading from './Heading'

const index = (props: { name: string; type: string }) => {
  return (
   <Heading name={props.name} type={props.type}/>
  )
}

export default index
