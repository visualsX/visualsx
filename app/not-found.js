import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <p className="text-[9rem] leading-none font-bold tracking-tighter text-primary sm:text-[12rem]">404</p>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-lg text-muted">The page you&apos;re looking for has moved or never existed.</p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="dark">
          Back to home
        </Button>
        <Button href="/contact" variant="outline">
          Contact us
        </Button>
      </div>
    </section>
  );
}
