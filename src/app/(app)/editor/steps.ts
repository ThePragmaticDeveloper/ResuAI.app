import { EditorFormProps } from "@/lib/types";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";


export const steps: {
  key: string;
  title: string;
  imgUrl: string;
  component: React.ComponentType<EditorFormProps>;
}[] = [{
  key: "personal-info",
  title: "Personal Info",
  imgUrl: "/user.png",
  component: PersonalInfoForm,
}, {
  key: "summary",
  title: "Summary",
  imgUrl: "/writing_hand.png",
  component: SummaryForm,
}, {
  key: "education",
  title: "Education",
  imgUrl: "/cap.png",
  component: EducationForm,
}, {
  key: "work-experience",
  title: "Work Experience",
  imgUrl: "/case.png",
  component: WorkExperienceForm,
}, {
  key: "skills",
  title: "Skills",
  imgUrl: "/skills.png",
  component: SkillsForm,
}]