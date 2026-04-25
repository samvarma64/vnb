import Image from "next/image";

export default function VNBLogo({
  className = "h-12 w-auto",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/vnbheaderlogo.jpeg"
      alt="VNB Logo"
      width={200}
      height={68}
      className={`${className} transition-transform group-hover:scale-105`}
    />
  );
}
