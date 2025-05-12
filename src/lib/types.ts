import { ResumeValues } from "./validation";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeValues>>;
}


// export interface EditorFormProps {
//   resumeData: ResumeValues;
//   setResumeData: (data: ResumeValues) => void;
// }