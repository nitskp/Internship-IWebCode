# Render Form Components and Props Spec
## ComponentName : Input
Used for making Input field
### Props: 
1. label:string,
2. type:string,
3. isRequired:boolean,
4. placeHolder:string,
5. registerValue:strings,
6. validations:Object(eg - {max: 10, min: 10 etc…})
## Component Name : Select
Used for making Select Field
### Props:
1. label:string,
2. name:string,
3. id:string, ( It’s a key. It will be used when rendering options using map)
4. options:string[],
5. registerValue:string, (will be same as name most probably)
6. isRequired:boolean
## ComponentName : Textarea
Used for making textarea field
### Props 
1. label:string,
2. isRequired:boolean,
3. placeHolder:string,
4. registerValue:strings,
5. validations:Object(eg - {max: 10, min: 10 etc…})
## ComponentName : Captcha
For making Captcha
### Props
Not decided yet
## ComponentName : Form
Used as a container for form
### Props
No props for it

