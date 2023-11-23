import "./App.css";
import Grading from "./components/result-sheet/Grading";
import studentResultData from "./mock-data/studentResultData";
import ResultSheet from "./components/result-sheet/ResultSheet";
import TeacherRemarks from "./components/result-sheet/TeacherRemarks";
import StudentProfile from "./components/result-sheet/StudentProfile";
import ResultSheetData from "./components/result-sheet/ResultSheetData";
import ResultSheetHeader from "./components/result-sheet/ResultSheetHeader";
import ResultSheetContainer from "./components/result-sheet/ResultSheetContainer";

function App() {
  return (
    <main className="app">
      <ResultSheetContainer>
        <ResultSheetHeader />
        <StudentProfile profile={studentResultData.profile} />
        <Grading />
        <ResultSheet>
          {studentResultData.resultData.map((data) => (
            <ResultSheetData key={data.subject} resultData={data} />
          ))}
        </ResultSheet>
        <TeacherRemarks remarks={studentResultData.remarks} />
      </ResultSheetContainer>
    </main>
  );
}

{
  /* <InvoiceContainer>
<Profile
  email={InvoiceContent.Email}
  name={InvoiceContent.Name}
  phone={`+234 ${InvoiceContent["Phone No"].slice(1)}`}
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
</InvoiceContainer> */
}
export default App;
