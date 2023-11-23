import "./App.css";
import Invoice from "./components/invoice/Invoice";
import Profile from "./components/invoice/Profile";
import InvoiceContent from "./mock-data/invoiceData";
import InvoiceData from "./components/invoice/InvoiceData";
import InvoiceContainer from "./components/invoice/InvoiceContainer";

function App() {
  return (
    <main className="app">
      <InvoiceContainer>
        <Profile
          email={InvoiceContent.Email}
          phone={`+234 ${InvoiceContent["Phone No"].slice(1)}`}
          name={InvoiceContent.Name}
        />

        <Invoice>
          {Object.keys(InvoiceContent).map((content, index) => (
            <InvoiceData
              key={content}
              index={index}
              dataKey={content}
              data={InvoiceContent[content]}
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
