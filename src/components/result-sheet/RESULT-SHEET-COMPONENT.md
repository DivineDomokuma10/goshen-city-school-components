# AN RESULT SHEET COMPONENT

## TOOLS FOR BUILDING

Technologies for building includes:

- Reactjs
- Javascript
- Chakra Ui

## COMPONENT'S STRUCTURE

### COMPONENTS:

The **_RESULT SHEET COMPONENT_** is made up of seven sub components, which includes:

- _Grading.jsx_
- _ResultSheet.jsx_
- _TeacherRemarks.jsx_
- _StudentProfile.jsx_
- _ResultSheetData.jsx_
- _ResultSheetHeader.jsx_
- _ResultSheetContainer.jsx_

Each of the components are segments of the complete **_RESULT SHEET COMPONENT_** ,
which all ecapsulates logics for consuming and rendering user data that has been passed to it via component props.

### COMPONENT HIERACHY:

```htm
<ResultSheetContainer>
  <ResultSheetHeader />

  <StudentProfile profile />

  <Grading />

  <ResultSheet>
    <ResultSheetData resultData />
  </ResultSheet>

  <TeacherRemarks remarks />
</ResultSheetContainer>
```

The code snippet above shows the hierachy of components.

- **_ResultSheetContainer:_**
  Top level component, which acts as a wrappper component.

- **_ResultSheetHeader:_**
  A direct child of the **_InvoiceContainer_** component.
  Displays the result sheet header contents such as school name, school address and other info about the school.

- **_StudentProfile:_**
  A direct child of the **_InvoiceContainer_** component.
  Takes in _profile prop_ and displays student profile data, such as:

  - Name
  - Term
  - Year
  - Grade
  - Class
  - Gender
  - Portal Id
  - No in Class
  - Class Average
  - Maxium Mark Obtained
  - Average / Percentage
  - Maxium Max Obtainable

- **_Grading:_**
  A direct child of the **_InvoiceContainer_** component.
  Contains a table that displays score grading from grade-A to grade-E.

- **_ResultSheet:_**
  A direct child of the **_InvoiceContainer_** component.
  Takes in the **_ResultSheetData_** component as children, and renders a table containing the student's actual result from mapping through the data consumed by the **_ResultSheetData_** components.

- **_ResultSheetData:_**
  A direct child of the **_ResultSheetData_** component.
  Takes in _resultData prop_ and renders the actual result data as rows contain colums for:

  - subject name
  - assignment score
  - test score
  - exam
  - total
  - grade
  - class average
  - subject position
  - remarks
  - verdict

- **_TeacherRemarks:_**
  A direct child of the **_ResultSheetData_** component.
  Contains a Table with 2 rows and 2 columns, for teacher's and principal's remarks.
