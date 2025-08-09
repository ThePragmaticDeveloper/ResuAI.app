import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTA = () => (
  <div className="w-full py-20 lg:py-40 bg-dotted-gradient">
    <div className="container max-w-[90rem] mx-auto px-4">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Try out ResuAI today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
           Gain a competitive edge in today's job market with AI-driven <br /> resumes that are strategically designed to bypass ATS algorithms <br /> and capture recruiters' attention
          </p>
        </div>
        <Button asChild size="sm" className="btn-gradient text-lg w-fit p-6 mt-4 rounded-xl">
          <Link href="/dashboard/resumes">
           Craft My Resume
          </Link>
        </Button>
        {/* <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div> */}
      </div>
    </div>
  </div>
);