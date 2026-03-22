import { cx } from "class-variance-authority";


export type CardProps = {
  children: React.ReactNode;
  bgImage?: string;
  innerClassName?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, onClick, bgImage, className, innerClassName, style, disabled, ...props }: CardProps) {
  return (
	    <div 
		className={cx(
			"w-20 h-28 bg-center bg-no-repeat rounded shadow-xl select-none transition-all duration-300",
			disabled ? "cursor-not-allowed grayscale opacity-50" : "cursor-pointer",
			className,
		)} 
		style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none", ...style }}		
		onClick={disabled ? undefined : onClick}
	>
		<div className={cx("size-full p-4 flex items-center justify-center rounded", innerClassName)}>
		{children}
		</div>
	</div>
  );
}