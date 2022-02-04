import Details from './Details'

const index = (props: { isText: boolean; fields: any[] }) => {
  return (
    <Details isText={props.isText} fields={props.fields}/>
  )
}

export default index
