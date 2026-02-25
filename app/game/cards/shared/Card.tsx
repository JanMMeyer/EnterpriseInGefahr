import { cx } from "class-variance-authority";


export type CardProps = {
  children: React.ReactNode;
  bgImage?: string;
  innerClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, onClick, bgImage, className, innerClassName,style, ...props }: CardProps) {
  return (
	    <div 
		className={cx("w-20 h-28 bg-center bg-no-repeat rounded shadow-xl cursor-pointer select-none", className)} 
		style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none", ...style }}		
		onClick={onClick}
	>
		<div className={cx("size-full p-4 flex items-center justify-center rounded", innerClassName)}>
		{children}
		</div>
	</div>
  );
}