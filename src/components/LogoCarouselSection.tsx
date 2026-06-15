import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { cn } from "@/lib/utils";

const logoModules = import.meta.glob(
  "../assets/logos/*.{png,jpg,jpeg,svg,webp}",
  { eager: true, query: "?url", import: "default" }
);

function unwrapUrl(mod: unknown): string {
  if (typeof mod === "string") return mod;
  if (mod && typeof mod === "object" && "default" in mod) {
    const d = (mod as { default: unknown }).default;
    if (typeof d === "string") return d;
  }
  return "";
}

function altFromPath(path: string): string {
  const filename = path.split("/").pop() ?? path;
  return filename.replace(/^\d+\.\s*/, "").replace(/\.[^.]+$/, "");
}

function getLogos(): { src: string; alt: string }[] {
  return Object.entries(logoModules as Record<string, unknown>)
    .map(([path, mod]) => ({ path, url: unwrapUrl(mod) }))
    .filter((x) => x.url.length > 0)
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((x) => ({ src: x.url, alt: altFromPath(x.path) }));
}

export function LogoCarouselSection() {
  const logos = getLogos();

  if (logos.length === 0) {
    return null;
  }

  return (
    <section
      className="relative border-y border-black/[0.06] bg-[#EEEEE8] py-14 overflow-hidden"
      aria-label="Brands we work with"
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.04),transparent_55%)]",
          "blur-[40px]"
        )}
      />

      <div className="container relative mx-auto max-w-3xl px-6 lg:px-12">
        <h2
          className="mb-5 text-center text-xl font-medium tracking-tight text-black md:text-3xl"
          style={{ fontFamily: "Lemon Milk, sans-serif" }}
        >
          <span className="text-black/50">Trusted by experts.</span>
          <br />
          <span className="font-semibold text-black">Used by the leaders.</span>
        </h2>

        <div className="mx-auto my-5 h-px max-w-sm bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>

      <div className="relative w-full md:w-screen md:max-w-none md:left-1/2 md:-translate-x-1/2">
        <LogoCloud
          className="px-0"
          gap={108}
          imageClassName="h-[5.04rem] w-auto max-w-[16.8rem] md:h-[6.72rem] md:max-w-[20.16rem]"
          logos={logos}
          speed={90}
          speedOnHover={35}
        />
      </div>

      <div className="container relative mx-auto max-w-3xl px-6 lg:px-12">
        <div className="mt-5 h-px bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </div>
    </section>
  );
}
