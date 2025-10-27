import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon, Percent } from "lucide-react";

interface InputFieldProps {
  label: string;
  tooltip: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  step?: string;
  min?: string;
  max?: string;
}
export const InputField: React.FC<InputFieldProps> = ({
  label,
  tooltip,
  value,
  onChange,
  error,
  icon = <Percent className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />,
  type = "number",
  placeholder = "0",
  step = "0.01",
  min = "0",
  max = "10",
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      {icon}
      <Label className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {label}
      </Label>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <InfoIcon className="h-4 w-4 text-neutral-600/70 dark:text-neutral-400/70 cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
            <p className="w-64 text-sm">{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <Input
      type={type}
      placeholder={placeholder}
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`transition-all focus:ring-2 focus:ring-black dark:focus:ring-white border-neutral-200 dark:border-neutral-700 text-black dark:text-white ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);
