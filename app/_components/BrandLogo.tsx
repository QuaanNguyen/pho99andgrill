import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function BrandLogo({ className, priority, alt = "" }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <Image
      src={`${basePath}/logo.png`}
      alt={alt}
      width={560}
      height={240}
      sizes="(max-width: 768px) 200px, 280px"
      className={className}
      priority={priority}
    />
  );
}
