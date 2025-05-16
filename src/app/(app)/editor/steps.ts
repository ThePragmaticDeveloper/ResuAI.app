import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";


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
  component: GeneralInfoForm,
}, {
  key: "work-experience",
  title: "Work Experience",
  imgUrl: "/case.png",
  component: WorkExperienceForm,
}, {
  key: "education",
  title: "Education",
  imgUrl: "/cap.png",
  component: PersonalInfoForm,
}, {
  key: "skills",
  title: "Skills",
  imgUrl: "/skills.png",
  component: PersonalInfoForm,
}]