import useDebounce from "@/hooks/useDebounce";
import { ResumeValues } from "@/lib/validation";
import { useEffect, useState } from "react";

export default function useAutoSaveResume(resumeData: ResumeValues) {
  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [lastSavedData, setLastSavedData] = useState(
    structuredClone(resumeData),
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function saveResume() {
      setIsSaving(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLastSavedData(structuredClone(debouncedResumeData));
      setIsSaving(false);
    }

    const hasUnsavedChanges =
      JSON.stringify(debouncedResumeData) !== JSON.stringify(lastSavedData);

    if (hasUnsavedChanges && debouncedResumeData && !isSaving) {
      saveResume();
    }
  }, [debouncedResumeData, lastSavedData, isSaving]);

  
  // useEffect(() => {
  //   setIsError(false);
  // }, [debouncedResumeData])

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeData) !== JSON.stringify(lastSavedData),
  };
}
