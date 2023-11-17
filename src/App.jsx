import "./App.css";
import Invoice from "./components/invoice-components/Invoice";
import Profile from "./components/invoice-components/Profile";
import InvoiceContainer from "./components/invoice-components/InvoiceContainer";
import invoiceContent from "./mock-data/invoiceData";
import InvoiceData from "./components/invoice-components/InvoiceData";

function App() {
  console.log(invoiceContent);
  return (
    <main className="app">
      <InvoiceContainer>
        <Profile
          email="divine@gmail.com"
          phone="+234 9071214921"
          name="Divine Domokuma"
        />
        <Invoice>
          {Object.keys(invoiceContent).map((content, index) => (
            <InvoiceData
              key={content}
              index={index}
              dataKey={content}
              data={invoiceContent[content]}
            />
          ))}
        </Invoice>
      </InvoiceContainer>
    </main>
  );
}

{
  /* <ResultSheetContainer>
  <ResultSheetHeader />
  <StudentProfile profile={studentResultData.profile} />
  <GradeKey />
  <ResultSheet>
    {studentResultData.resultData.map((data) => (
      <ResultSheetData key={data.subject} resultData={data} />
    ))}
  </ResultSheet>
  <TeacherRemarks remarks={studentResultData.remarks} />
</ResultSheetContainer> */
}
export default App;
