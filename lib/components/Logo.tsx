import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export function Logo({ showText = true, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`} style={{ fontWeight: 500 }}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">
        F
      </div>
      {showText && (
        <span className="font-semibold text-xl text-slate-900" style={{ fontWeight: 500 }}>
          Flowtiva
        </span>
      )}
    </Link>
  );
}

