import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";


export const steps: {
  key: string;
  title: string;
  imgUrl: string;
  component: React.ComponentType;
}[] = [{
  key: "personal-info",
  title: "Personal Info",
  imgUrl: "/user.png",
  component: PersonalInfoForm,
}, {
  key: "summary",
  title: "Summary",
  imgUrl: "/writing_hand.png",
  component: PersonalInfoForm,
}, {
  key: "work-experience",
  title: "Work Experience",
  imgUrl: "/case.png",
  component: PersonalInfoForm,
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