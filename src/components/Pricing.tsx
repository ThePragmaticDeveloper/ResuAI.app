import { Check, Minus, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Pricing = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container max-w-[90rem] mx-auto px-4">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Prices that make sense!
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Rich in features, not in pricing.
          </p>
        </div>
        <div className="grid text-left w-full grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 divide-x pt-20"> {/* Adjusted grid-cols */}
          <div className="col-span-2 lg:col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Basic</p>
            <p className="text-sm text-muted-foreground">
              This basic plan gets you started with the essentials with no cost. Create your first resume and get a feel for the platform.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">Free</span>
              {/* <span className="text-sm text-muted-foreground"> / month</span> */}
            </p>
            <Button asChild variant="outline" className="btn-gradient gap-4 mt-8">
             <Link href="/dashboard/resumes">
              Get Started <MoveRight className="w-4 h-4" />
             </Link>
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Pro</p>
            <p className="text-sm text-muted-foreground">
              Get access to all the features and templates, plus AI-powered resume and cover letter generation.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$9.99</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button className="btn-gradient gap-4 mt-8">
              Go Pro <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">ATS-Friendly Design</div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">Resume Parser</div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            AI Interview
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            AI Cover Letter
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            Resumes
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-muted-foreground text-sm">5 Resumes</p>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <p className="text-muted-foreground text-sm">Unlimited</p>
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            Premium Templates
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
          {/* New Line */}
          <div className="text-lg px-3 lg:px-6 col-span-2 lg:col-span-1 py-4">
            Unlimited Resumes
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Check className="w-4 h-4 text-green-800" />
          </div>
        </div>
      </div>
    </div>
  </div>
);