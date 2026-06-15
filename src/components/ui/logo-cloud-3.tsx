import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  imageClassName?: string;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
};

export function LogoCloud({
  className,
  logos,
  imageClassName,
  gap = 42,
  speed = 80,
  speedOnHover = 25,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={gap} reverse speed={speed} speedOnHover={speedOnHover}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className={cn(
              "pointer-events-none h-4 select-none object-contain md:h-5",
              imageClassName
            )}
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
