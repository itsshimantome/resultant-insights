import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resultant — Check Your Result" },
      {
        name: "description",
        content:
          "Resultant helps you look up board exam results by roll and registration number.",
      },
      { property: "og:title", content: "Resultant — Check Your Result" },
      {
        property: "og:description",
        content:
          "Resultant helps you look up board exam results by roll and registration number.",
      },
    ],
  }),
  component: Index,
});

const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1990 + 1 },
  (_, i) => currentYear - i,
);
const iterations = Array.from({ length: 10 }, (_, i) => i + 1);
const agentCounts = [1, 2, 3];

function Logo() {
  return (
    <a href="/" className="group inline-flex items-center gap-2">
      <span
        aria-hidden
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary to-primary/60 text-primary-foreground shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)] ring-1 ring-inset ring-white/10"
      >
        <span className="text-sm font-black tracking-tighter">R</span>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_hsl(150_80%_50%)]" />
      </span>
      <span className="text-lg font-black tracking-tight sm:text-xl">
        <span className="text-foreground">Result</span>
        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          ant
        </span>
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background font-sans text-foreground antialiased">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 sm:flex sm:justify-between sm:py-4">
          <Logo />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Select>
              <SelectTrigger className="h-9 w-[84px] text-xs sm:h-10 sm:w-[140px] sm:text-sm">
                <SelectValue placeholder="Iteration" />
              </SelectTrigger>
              <SelectContent className="max-h-64">
                {iterations.map((i) => (
                  <SelectItem key={i} value={String(i)}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-9 w-[92px] text-xs sm:h-10 sm:w-[140px] sm:text-sm">
                <SelectValue placeholder="Agent count" />
              </SelectTrigger>
              <SelectContent>
                {agentCounts.map((a) => (
                  <SelectItem key={a} value={String(a)}>
                    {a}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Form */}
            <div className="order-1">
              <div className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_hsl(150_80%_50%)]" />
                    Live
                  </div>
                  <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                    Check your result
                  </h1>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Enter your details to fetch your board result.
                  </p>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <Label htmlFor="board">Board</Label>
                    <Select>
                      <SelectTrigger id="board">
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">Dhaka</SelectItem>
                        <SelectItem value="chattogram">Chattogram</SelectItem>
                        <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        <SelectItem value="khulna">Khulna</SelectItem>
                        <SelectItem value="sylhet">Sylhet</SelectItem>
                        <SelectItem value="barisal">Barisal</SelectItem>
                        <SelectItem value="comilla">Comilla</SelectItem>
                        <SelectItem value="dinajpur">Dinajpur</SelectItem>
                        <SelectItem value="mymensingh">Mymensingh</SelectItem>
                        <SelectItem value="madrasah">Madrasah</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent className="max-h-64">
                        {years.map((y) => (
                          <SelectItem key={y} value={String(y)}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="roll">Roll no.</Label>
                      <Input id="roll" inputMode="numeric" placeholder="123456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg">Registration no.</Label>
                      <Input id="reg" inputMode="numeric" placeholder="9876543210" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full font-semibold">
                    Get result
                  </Button>
                </form>
              </div>
            </div>

            {/* Image */}
            <div className="order-2">
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted via-background to-muted shadow-2xl shadow-black/50 aspect-video">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.15),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="absolute left-3 top-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-3 text-muted-foreground">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-background/80 shadow-lg backdrop-blur-md">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 1.125V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 1.5v-1.5c0-.621-.504-1.125-1.125-1.125M18.75 5.625v1.5c0 .621-.504 1.125-1.125 1.125m-15 0v-1.5c0-.621.504-1.125 1.125-1.125m15 0v1.5c0-.621-.504-1.125-1.125-1.125m-15 0v1.5c0 .621-.504 1.125-1.125 1.125M18.75 5.625h-15a1.125 1.125 0 01-1.125-1.125M18.75 5.625c0-.621-.504-1.125-1.125-1.125H5.625a1.125 1.125 0 00-1.125 1.125m13.5 0v1.5c0 .621.504 1.125 1.125 1.125m-15 0h7.5c.621 0 1.125-.504 1.125-1.125V5.625a1.125 1.125 0 00-1.125-1.125m-9.75 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h1.5a1.125 1.125 0 001.125-1.125v-1.5a1.125 1.125 0 00-1.125-1.125H3.375z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium tracking-wide uppercase">Result preview</span>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground">
          © {currentYear} Resultant. All rights reserved. Developed by Itsshimanto.
        </div>
      </footer>
    </div>
  );
}
