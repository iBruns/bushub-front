import Link from "next/link";
import { CSSProperties } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  leftIcon?: React.ReactNode;
  style?: CSSProperties;
  link: string;
}

export default function SocialButton({
  children,
  contentClassName,
  leftIcon,
  style,
  link,
}: ButtonProps) {
  const focus = "focus:outline-none focus:ring";
  const font = "text-sm text-center";

  const styleSettings = `${focus} ${font}`;

  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <button
        className={`bg-[#1c19177d] hover:bg-stone-800 border border-stone-700 text-stone-400 h-10 px-5 rounded-lg transition-all duration-200 font-bold align-top ${styleSettings}`}
        style={style}
      >
        <div
          className={`h-full w-full flex flex-row space-x-3 items-center justify-center ${contentClassName}`}
        >
          {leftIcon} {children && <span className="truncate">{children}</span>}
        </div>
      </button>
    </Link>
  );
}
