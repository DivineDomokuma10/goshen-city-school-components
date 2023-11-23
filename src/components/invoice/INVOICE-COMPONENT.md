# AN INVOICE COMPONENT

## TOOLS FOR BUILDING

Technologies for building includes:

- Reactjs
- Javascript
- Chakra Ui

## COMPONENT'S STRUCTURE

### CONSTITUES:

The **_INVOICE COMPONENT_** is made up of four sub-components, which includes:

- _Invoice.jsx_
- _Profile.jsx_
- _InvoiceData.jsx_
- _InvoiceContainer.jsx_

Each of the components are segments of the complete **_INVOICE COMPONENT_**,
which all ecapsulates logics for consuming and rendering user data that has been passed to it via component props.

### COMPONENT HIERACHY:

```htm
<InvoiceContainer>
  <Profile />

  <Invoice>
    <InvoiceData>
  </Invoice>
</InvoiceContainer>
```

The about code snippet shows the hierachy of components.

- **_InvoiceContainer:_**
  Top level component, which acts as a wrappper component.

- **_Profile:_**
  A direct child of the **_InvoiceContainer_** component.
  Displays a limited info of the user's data such as name, email and phone number.
  Takes in three props (name, email and phone number).

- **_Invoice:_**
  A direct child of the **_InvoiceContainer:_** component.
  It takes the **_InvoiceData_** component as children.
  Displays a complete info of the user by mapping throught the user's data set and return an **_InvoiceData_** component.

- **_InvoiceData:_**
  A direct Child of the **_Invoice_** component.
  Takes in three props.
  - dataKey: a required prop, used to render the user's data key.
  - index: an optional prop, used for adding certain background color.
  - data: a required prop, used to render the user's actual data value
