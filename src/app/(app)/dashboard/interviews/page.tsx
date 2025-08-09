import { Button } from "@/components/ui/button";
import { Lock, PhoneCall } from "lucide-react";
import Image from "next/image";


export default function InterviewsPage() {
  
  return (
    <div className="grid place-items-center w-full h-screen">
      <div className="flex flex-col items-center gap-6">
      <Image src='/interview.svg' alt="My SVG" width={200} height={200} />
      <Button className="gap-4" variant="outline">
        Start Interview <Lock className="w-4 h-4" />
      </Button>
      </div>
    </div>
  )
}
