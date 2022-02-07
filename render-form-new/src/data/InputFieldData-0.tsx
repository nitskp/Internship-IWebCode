const INPUT0 = [
    {
      id: 'i01',
      label: "Resume/CV",
      type: "file",
      placeHolder: "Attach Resume/CV",
      isRequired: true,
      validations: {},
    },
    {
      id: 'i02',
      label: "Full Name",
      type: "text",
      placeHolder: "",
      isRequired: true,
      validations: {},
    },
    {
      id: 'i03',
      label:"Email",
      type:'email',
      placeHolder:'',
      isRequired: true,
      validations:{}
    },
    {
      id: 'i04',
      label:"Phone",
      type:'tel',
      placeHolder:'',
      isRequired: false,
      validations:{}
    },
    {
      id: 'i05',
      label:"Current Company",
      type:'text',
      placeHolder:'',
      isRequired: false,
      validations:{}
    }
  ];

  export  default INPUT0;