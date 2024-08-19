import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-24 lg:py-8 lg:pt-20 bg-verylight-org">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center text-center space-y-8 lg:pt-4 justify-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center">
                ByteFiesta
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl text-center">
                Empowering digital education around the world. Learn digitally like a pro with ByteFiesta.
              </p>
              <div className="mt-8">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              </div>
            </div>
            <div className="items-center justify-center hidden md:flex">
              <img
                src="/hero.png"
                width="600"
                height="800"
                alt="Hero"
                className="max-w-full rounded-xl object-cover"
                style={{ aspectRatio: "600/600", objectFit: "fill" }}
              />
            </div>
          </div>
        </div>
      </section>
  )
}
