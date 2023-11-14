import "./App.css";
import GradeKey from "./components/result-sheet-components/GradeKey";
import ResultSheet from "./components/result-sheet-components/ResultSheet";
import StudentProfile from "./components/result-sheet-components/StudentProfile";
import ResultSheetHeader from "./components/result-sheet-components/ResultSheetHeader";
import ResultSheetContainer from "./components/result-sheet-components/ResultSheetContainer";
import studentResultData from "./mock-data/studentResultData";
import ResultSheetData from "./components/result-sheet-components/ResultSheetData";
import TeacherRemarks from "./components/result-sheet-components/TeacherRemarks";
import { Button, Flex } from "@chakra-ui/react";

function App() {
  return (
    <main
      className="app"
      style={{ padding: "10px", background: "rgba(0,0,0,0.06)" }}
    >
      <ResultSheetContainer>
        <ResultSheetHeader />
        <StudentProfile profile={studentResultData.profile} />
        <GradeKey />
        <ResultSheet>
          {studentResultData.resultData.map((data) => (
            <ResultSheetData key={data.subject} resultData={data} />
          ))}
        </ResultSheet>
        <TeacherRemarks remarks={studentResultData.remarks} />
      </ResultSheetContainer>
      <Flex justifyContent={"end"} px={"2"} py={"5"} onClick={() => print()}>
        <Button w={"fit-content"} size={"sm"} colorScheme="purple">
          Print
        </Button>
      </Flex>
    </main>
  );
}

export default App;
