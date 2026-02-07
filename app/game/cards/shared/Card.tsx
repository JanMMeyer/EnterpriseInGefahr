import { cx } from "class-variance-authority";


export type CardProps = {
  children: React.ReactNode;
  onClick: () => void;
  bgImage?: string;
  className?: string;
  innerClassName?: string;
};

export function Card({ children, onClick, bgImage, className, innerClassName }: CardProps) {
  return (
	    <div 
		className={cx("w-20 h-28 bg-center bg-no-repeat rounded shadow-xl cursor-pointer select-none", className)} 
		style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}		
		onClick={onClick}
	>
		<div className={cx("size-full p-4 flex items-center justify-center rounded", innerClassName)}>
		{children}
		</div>
	</div>
  );
}