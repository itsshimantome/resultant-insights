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

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:flex sm:justify-between">
          <a
            href="/"
            className="truncate text-xl font-black tracking-tight text-foreground sm:text-2xl"
          >
            Resultant
          </a>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Select>
              <SelectTrigger className="h-9 w-[92px] text-xs sm:h-10 sm:w-[150px] sm:text-sm">
                <SelectValue placeholder="Iteration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Iteration 1</SelectItem>
                <SelectItem value="2">Iteration 2</SelectItem>
                <SelectItem value="3">Iteration 3</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="h-9 w-[100px] text-xs sm:h-10 sm:w-[150px] sm:text-sm">
                <SelectValue placeholder="Agent count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Agent</SelectItem>
                <SelectItem value="5">5 Agents</SelectItem>
                <SelectItem value="10">10 Agents</SelectItem>
                <SelectItem value="25">25 Agents</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Form - first on mobile, left on md+ */}
            <div className="order-1 md:order-1">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Check your result
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter your details to fetch your board result.
                </p>
                <form
                  className="mt-6 space-y-4"
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

                  <div className="space-y-2">
                    <Label htmlFor="roll">Roll no.</Label>
                    <Input id="roll" inputMode="numeric" placeholder="e.g. 123456" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reg">Registration no.</Label>
                    <Input id="reg" inputMode="numeric" placeholder="e.g. 9876543210" />
                  </div>

                  <Button type="submit" className="w-full">
                    Get result
                  </Button>
                </form>
              </div>
            </div>

            {/* Image - second on mobile (below), right on md+ */}
            <div className="order-2 md:order-2">
              <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-black shadow-sm aspect-video" />
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
      <footer className="border-t border-border bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground">
          © {currentYear} Resultant. All rights reserved. Developed by Itsshimanto.
        </div>
      </footer>
    </div>
  );
}
