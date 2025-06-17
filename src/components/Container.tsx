
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('container max-w-[90rem] mx-auto px-4', className)}>
      {children}
    </div>
  );
};

export default Container

