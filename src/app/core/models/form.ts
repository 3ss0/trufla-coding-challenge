export const formElementsTypes=[
    {
      label:'Textbox',
      value:'text'
    },
    {
      label:'Dropdown',
      value:'select'
    },
    {
      label:'Checkbox',
      value:'checkbox'
    },
    {
      label:'RadioButton',
      value:'radio'
    }
];

export const elementsValidations={
  text:[
    'required',
    'maxLength',
    'minLength'
  ],
  select:[
    'required'
  ],
  checkbox:[
    'required'
  ],
  radio:[
    'required'
  ]
  
}

export const formStyles=[
  {
    label:'show 1 element in row',
    value:'single'
  },
  {
    label:'show 2 elements in row',
    value:'double'
  }
];
