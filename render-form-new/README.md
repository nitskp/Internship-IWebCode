# Components
## FormSection
A container for different sections of form. Inside it will be the following:
1. Section heading - props
2. Field Component - props
### Props
1. sectionHeading:string
2. fieldComponent:string
## Field Component
It for different types of form's fields:
1. Depending upon fieldtype there will be three types of fields
### Props
1. fieldName:string
## Input
Component for input field and its label
### Props
1. placeholderValue:string
2. type:string
3. validation:any
4. labelValue:string 
5. isRequired:boolean
## Select
Component for select field and its label
### Props
1. name:string
2. labelValue:string
3. options:string[]
4. placeholder:string[]
5. validation:any
6. isRequired:boolean
## Textarea
Component for textarea
### Props
1. placeHolder:string
2. validation:any
3. isRequired:boolean
4.labelValue:string
# Things to note
For U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION  section don't use FormSection, make a different component for this or directly code it inside form component.
Try using higher order components