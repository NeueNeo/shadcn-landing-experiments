import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Code2,
  Layers,
  Sparkles,
  Terminal,
  Github,
  Twitter,
  ChevronRight,
  Check,
  Star,
  Users,
  GitFork,
  Download,
  Heart,
  Blocks,
  Monitor,
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  Minus,
  Play,
  Box,
  Paintbrush,
  Copy,
  Menu,
  X,
} from "lucide-react";

/* ─────────────────────────── NAVBAR (minimal, left-weighted) ─────────────────────────── */

function Navbar() {
  return (
    <header className="sticky top-10 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-foreground flex items-center justify-center">
              <Box className="h-3.5 w-3.5 text-background" />
            </div>
            <span className="text-sm font-semibold tracking-tight">Catalyst</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">Log in</Button>
          <Button size="sm" className="h-8 px-3 text-xs">Get Started Free</Button>
        </div>
      </div>
      <Separator />
    </header>
  );
}

/* ─────────────────────────── HERO (left-aligned, split) ─────────────────────────── */

function HeroSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-36">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs font-normal">v2.0 Released</Badge>
            <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              What&apos;s new <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08]">
              The developer<br />
              platform for<br />
              <span className="text-muted-foreground">modern UI</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-[480px] leading-relaxed">
              Production-ready components. Type-safe. Accessible. Own the code, not the dependency. Built for teams that ship.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button size="lg" className="gap-2 h-11">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" className="gap-2 h-11 text-muted-foreground">
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-2">
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-xs text-muted-foreground">GitHub Stars</p>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <p className="text-2xl font-bold">2M+</p>
              <p className="text-xs text-muted-foreground">Downloads/mo</p>
            </div>
            <Separator orientation="vertical" className="h-10" />
            <div>
              <p className="text-2xl font-bold">87+</p>
              <p className="text-xs text-muted-foreground">Components</p>
            </div>
          </div>
        </div>

        {/* Right — terminal card */}
        <div className="rounded-xl border bg-card overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/20" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
              <div className="h-3 w-3 rounded-full bg-green-500/20" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2">~/my-app</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-5">
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span>npx shadcn@latest init</span>
            </div>
            <div className="text-muted-foreground text-xs space-y-1">
              <p>✔ Preflight checks passed</p>
              <p>✔ Found Next.js with App Router</p>
              <p>✔ Tailwind CSS v4 detected</p>
              <p>✔ TypeScript configured</p>
              <p className="text-foreground pt-1">→ Ready. Add components with: npx shadcn add</p>
            </div>
            <Separator />
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span>npx shadcn add button card dialog table</span>
            </div>
            <div className="text-muted-foreground text-xs space-y-1">
              <p>✔ button.tsx <span className="text-foreground/40">— @radix-ui/react-slot</span></p>
              <p>✔ card.tsx</p>
              <p>✔ dialog.tsx <span className="text-foreground/40">— @radix-ui/react-dialog</span></p>
              <p>✔ table.tsx</p>
              <p className="text-foreground pt-1">→ 4 components added to src/components/ui/</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── LOGO BAR ─────────────────────────── */

function LogoBar() {
  const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Raycast", "Supabase", "Resend"];
  return (
    <section className="border-y">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium shrink-0">Trusted by</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {logos.map((name) => (
              <span key={name} className="text-sm font-medium text-muted-foreground/50">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FEATURES (left header + right grid) ─────────────────────────── */

function FeaturesSection() {
  const features = [
    { icon: Copy, title: "Copy & Paste", desc: "No package installs. The code lives in your repo. Customize freely." },
    { icon: Code2, title: "Type-Safe", desc: "Full TypeScript coverage. Autocomplete that actually works." },
    { icon: Shield, title: "Accessible", desc: "Radix primitives. WAI-ARIA. Keyboard nav. Screen reader tested." },
    { icon: Zap, title: "Zero Runtime", desc: "Pure Tailwind. No CSS-in-JS overhead. Smallest possible bundle." },
    { icon: Paintbrush, title: "Themeable", desc: "CSS custom properties. Swap entire palettes with one file change." },
    { icon: Layers, title: "Composable", desc: "Mix and match primitives. Build complex UIs from simple parts." },
  ];

  return (
    <section id="features" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        {/* Left — sticky header */}
        <div className="lg:sticky lg:top-[6.5rem] lg:self-start space-y-5">
          <Badge variant="outline" className="text-xs">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Built different.<br />
            On purpose.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Not another component library. This is your code — we just give you a head start.
          </p>
          <Button variant="outline" className="gap-2 mt-2">
            View All Features <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Right — card grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <Card key={f.title} className="border-border/50 hover:border-border transition-colors group">
              <CardHeader className="pb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted mb-2 group-hover:bg-primary/10 transition-colors">
                  <f.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-sm font-semibold">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{f.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── BENTO GRID ─────────────────────────── */

function BentoSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4 text-xs">Platform</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Everything in one toolkit
        </h2>
        <p className="text-muted-foreground text-lg">
          Components, blocks, themes, and tooling — all designed to work together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Wide card */}
        <Card className="md:col-span-2 border-border/50 overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Blocks className="h-4 w-4 text-primary" />
              <Badge variant="secondary" className="text-xs">New</Badge>
            </div>
            <CardTitle className="text-lg">Pre-built Blocks</CardTitle>
            <CardDescription className="leading-relaxed">
              Full page sections — hero, pricing, testimonials, dashboards — ready to drop in. Built with the same components you already use.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border bg-muted/30 p-4 font-mono text-xs text-muted-foreground">
              <p>$ npx shadcn add login-01</p>
              <p className="mt-2">✔ Added block: login-01</p>
              <p>&nbsp;&nbsp;→ src/app/login/page.tsx</p>
              <p>&nbsp;&nbsp;→ src/components/login-form.tsx</p>
            </div>
          </CardContent>
        </Card>

        {/* Tall card */}
        <Card className="md:row-span-2 border-border/50 flex flex-col">
          <CardHeader className="flex-1">
            <Paintbrush className="h-4 w-4 text-primary mb-2" />
            <CardTitle className="text-lg">Theming Engine</CardTitle>
            <CardDescription className="leading-relaxed">
              CSS custom properties power the entire system. Swap colors, radius, fonts — everything adapts instantly. Dark mode included.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["Background", "Foreground", "Primary", "Muted", "Accent"].map((name) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{name}</span>
                  <div className="flex items-center gap-2">
                    <div className={`h-4 w-8 rounded-sm border ${
                      name === "Background" ? "bg-background" :
                      name === "Foreground" ? "bg-foreground" :
                      name === "Primary" ? "bg-primary" :
                      name === "Muted" ? "bg-muted" :
                      "bg-accent"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom left */}
        <Card className="border-border/50">
          <CardHeader>
            <Terminal className="h-4 w-4 text-primary mb-2" />
            <CardTitle className="text-lg">CLI Tooling</CardTitle>
            <CardDescription className="leading-relaxed">
              Add components, diff updates, manage registries. One command does it all.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Bottom middle */}
        <Card className="border-border/50">
          <CardHeader>
            <Globe className="h-4 w-4 text-primary mb-2" />
            <CardTitle className="text-lg">Multi-Framework</CardTitle>
            <CardDescription className="leading-relaxed">
              React, Vue, Svelte. Next.js, Remix, Astro, Vite. Your stack, your choice.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}

/* ─────────────────────────── HOW IT WORKS (horizontal steps) ─────────────────────────── */

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Init", desc: "Run the CLI. It detects your stack and sets everything up.", time: "~10s" },
    { num: "02", title: "Add", desc: "Pick components. Dependencies resolve automatically.", time: "~5s" },
    { num: "03", title: "Ship", desc: "The code is yours. Customize, compose, deploy.", time: "∞" },
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="space-y-3">
            <Badge variant="outline" className="text-xs">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Zero to shipped in three steps
            </h2>
          </div>
          <Button variant="outline" className="gap-2 self-start md:self-auto">
            Read the Docs <BookOpen className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.num}</span>
                  <Badge variant="secondary" className="text-xs font-mono">{step.time}</Badge>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CODE COMPARISON (tabs) ─────────────────────────── */

function CodeComparisonSection() {
  return (
    <section id="components" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
        {/* Left — code */}
        <div>
          <Tabs defaultValue="component" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-6">
              <TabsTrigger value="component" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-sm">Component</TabsTrigger>
              <TabsTrigger value="usage" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-sm">Usage</TabsTrigger>
              <TabsTrigger value="theme" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3 text-sm">Theme</TabsTrigger>
            </TabsList>

            <TabsContent value="component" className="mt-6">
              <div className="rounded-xl border bg-card overflow-hidden">
                <div className="px-4 py-2.5 border-b bg-muted/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">button.tsx</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs gap-1">
                    <Copy className="h-3 w-3" /> Copy
                  </Button>
                </div>
                <div className="p-5 font-mono text-xs leading-6 text-muted-foreground overflow-x-auto">
                  <p><span className="text-foreground">import</span> * <span className="text-foreground">as</span> React <span className="text-foreground">from</span> <span className="text-green-400">&quot;react&quot;</span></p>
                  <p><span className="text-foreground">import</span> {"{"} Slot {"}"} <span className="text-foreground">from</span> <span className="text-green-400">&quot;@radix-ui/react-slot&quot;</span></p>
                  <p><span className="text-foreground">import</span> {"{"} cva {"}"} <span className="text-foreground">from</span> <span className="text-green-400">&quot;class-variance-authority&quot;</span></p>
                  <p><span className="text-foreground">import</span> {"{"} cn {"}"} <span className="text-foreground">from</span> <span className="text-green-400">&quot;@/lib/utils&quot;</span></p>
                  <p className="mt-3"><span className="text-foreground">const</span> buttonVariants = <span className="text-foreground">cva</span>(</p>
                  <p>&nbsp;&nbsp;<span className="text-green-400">&quot;inline-flex items-center justify-center&quot;</span>,</p>
                  <p>&nbsp;&nbsp;{"{"} variants: {"{"} variant: {"{"} ... {"}"}, size: {"{"} ... {"}"} {"}"} {"}"})</p>
                  <p className="mt-3"><span className="text-foreground">const</span> Button = React.forwardRef(...)</p>
                  <p className="mt-3"><span className="text-foreground">export</span> {"{"} Button, buttonVariants {"}"}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="mt-6">
              <div className="rounded-xl border bg-card overflow-hidden">
                <div className="px-4 py-2.5 border-b bg-muted/50">
                  <span className="text-xs text-muted-foreground font-mono">app/page.tsx</span>
                </div>
                <div className="p-5 font-mono text-xs leading-6 text-muted-foreground">
                  <p><span className="text-foreground">import</span> {"{"} Button {"}"} <span className="text-foreground">from</span> <span className="text-green-400">&quot;@/components/ui/button&quot;</span></p>
                  <p className="mt-3"><span className="text-foreground">export default function</span> Page() {"{"}</p>
                  <p>&nbsp;&nbsp;<span className="text-foreground">return</span> (</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-foreground">Button</span> variant=<span className="text-green-400">&quot;outline&quot;</span>&gt;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-foreground">Button</span>&gt;</p>
                  <p>&nbsp;&nbsp;)</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="theme" className="mt-6">
              <div className="rounded-xl border bg-card overflow-hidden">
                <div className="px-4 py-2.5 border-b bg-muted/50">
                  <span className="text-xs text-muted-foreground font-mono">globals.css</span>
                </div>
                <div className="p-5 font-mono text-xs leading-6 text-muted-foreground">
                  <p><span className="text-foreground">:root</span> {"{"}</p>
                  <p>&nbsp;&nbsp;--background: <span className="text-green-400">0 0% 100%</span>;</p>
                  <p>&nbsp;&nbsp;--foreground: <span className="text-green-400">0 0% 3.9%</span>;</p>
                  <p>&nbsp;&nbsp;--primary: <span className="text-green-400">0 0% 9%</span>;</p>
                  <p>&nbsp;&nbsp;--radius: <span className="text-green-400">0.5rem</span>;</p>
                  <p>{"}"}</p>
                  <p className="mt-2"><span className="text-foreground">.dark</span> {"{"}</p>
                  <p>&nbsp;&nbsp;--background: <span className="text-green-400">0 0% 3.9%</span>;</p>
                  <p>&nbsp;&nbsp;--foreground: <span className="text-green-400">0 0% 98%</span>;</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right — explanation */}
        <div className="lg:sticky lg:top-[6.5rem] space-y-6">
          <Badge variant="outline" className="text-xs">Developer Experience</Badge>
          <h2 className="text-3xl font-bold tracking-tight leading-tight">
            Your code.<br />Your rules.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Every component is a file in your project. Read it, modify it, extend it. No black boxes, no hidden configs, no version conflicts.
          </p>
          <div className="space-y-4 pt-2">
            {[
              "Full source code in your repo",
              "Class Variance Authority for variants",
              "Tailwind utilities — no custom CSS",
              "Radix primitives under the hood",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── COMPARISON (side by side) ─────────────────────────── */

function ComparisonSection() {
  const rows = [
    { feature: "Own the source code", catalyst: true, others: false },
    { feature: "Zero runtime cost", catalyst: true, others: false },
    { feature: "Tailwind-native", catalyst: true, others: "Partial" },
    { feature: "CLI component install", catalyst: true, others: false },
    { feature: "Radix accessibility", catalyst: true, others: "Partial" },
    { feature: "TypeScript-first", catalyst: true, others: true },
    { feature: "Dark mode", catalyst: true, others: true },
    { feature: "Framework agnostic", catalyst: true, others: "Partial" },
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left — header */}
          <div className="lg:sticky lg:top-[6.5rem] space-y-5">
            <Badge variant="outline" className="text-xs">Why Switch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              The difference<br />is ownership
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Traditional component libraries give you a dependency. We give you a codebase.
            </p>
          </div>

          {/* Right — table */}
          <div className="rounded-xl border bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_80px_80px] gap-4 px-6 py-4 border-b bg-muted/50">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Feature</span>
              <span className="text-xs font-medium text-center">Catalyst</span>
              <span className="text-xs font-medium text-center text-muted-foreground">Others</span>
            </div>
            {rows.map((r, i) => (
              <div key={r.feature} className={`grid grid-cols-[1fr_80px_80px] gap-4 px-6 py-3.5 items-center ${i < rows.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-sm">{r.feature}</span>
                <div className="flex justify-center">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex justify-center">
                  {r.others === true ? (
                    <Check className="h-4 w-4 text-muted-foreground/50" />
                  ) : r.others === "Partial" ? (
                    <span className="text-[10px] text-muted-foreground">Partial</span>
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground/30" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PRICING (horizontal layout) ─────────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="space-y-3">
          <Badge variant="outline" className="text-xs">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Free to start. Scale when ready.
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-[300px]">
          All components are MIT licensed and free forever. Pro adds premium blocks, themes, and priority support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {/* Free */}
        <Card className="border-border/50 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Open Source</CardTitle>
              <span className="text-3xl font-bold">$0</span>
            </div>
            <CardDescription>Everything you need to build.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="space-y-2.5">
              {["87+ components", "CLI tooling", "TypeScript support", "Dark mode", "MIT License", "Community support"].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">Get Started</Button>
          </CardContent>
        </Card>

        {/* Pro */}
        <Card className="border-primary flex flex-col relative">
          <div className="absolute -top-3 right-6">
            <Badge className="gap-1 text-xs"><Star className="h-3 w-3" /> Popular</Badge>
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Pro</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">$19</span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
            </div>
            <CardDescription>For teams that ship fast.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-6">
            <div className="space-y-2.5">
              {["Everything in Open Source", "50+ premium blocks", "Figma design kit", "Custom themes", "Priority support", "Private registries", "Team management"].map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Button className="w-full">Start Free Trial</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIALS (large quote format) ─────────────────────────── */

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We rebuilt our entire dashboard UI in two weeks. With MUI it took us three months the first time around.",
      author: "Sarah Chen",
      role: "Engineering Lead",
      company: "DataFlow",
    },
    {
      quote: "The fact that I can read every line of component code and modify it without fighting abstractions — that's the whole point.",
      author: "Marcus Rivera",
      role: "Staff Engineer",
      company: "Vercel",
    },
    {
      quote: "Our designers love it. The Figma kit matches 1:1, and when we need to customize, the code is right there.",
      author: "Yuki Tanaka",
      role: "Design Director",
      company: "Linear",
    },
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <Badge variant="outline" className="mb-12 text-xs">What People Say</Badge>
        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <div key={t.author}>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight max-w-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">{t.author.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>
              {i < testimonials.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ (two-column) ─────────────────────────── */

function FAQSection() {
  const faqs = [
    { q: "Is this free?", a: "Yes. All components are MIT licensed. Use them in personal and commercial projects." },
    { q: "How is this different from a library?", a: "You own the code. It lives in your project, not in node_modules. No version conflicts, no locked APIs." },
    { q: "Which frameworks are supported?", a: "React-first with Next.js, Remix, Vite, Astro. Community ports for Vue and Svelte." },
    { q: "How do I update components?", a: "Use `shadcn diff` to see upstream changes, then merge what you want. No surprise breaking changes." },
    { q: "Do I need all components?", a: "No. Add only what you need. The CLI resolves dependencies automatically." },
    { q: "Is there a Figma kit?", a: "Yes — included with Pro. Full component library with variants and design tokens." },
  ];

  return (
    <section id="faq" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
        {/* Left */}
        <div className="lg:sticky lg:top-[6.5rem] space-y-5">
          <Badge variant="outline" className="text-xs">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Common questions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Reach out on Discord.
          </p>
          <Button variant="outline" className="gap-2">
            <MessageSquare className="h-4 w-4" /> Ask on Discord
          </Button>
        </div>

        {/* Right */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA (full-width, minimal) ─────────────────────────── */

function CTASection() {
  return (
    <section className="border-y">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-3 max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to build?
            </h2>
            <p className="text-muted-foreground text-lg">
              Start with the CLI. Add your first component in under a minute.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2.5 font-mono text-sm">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span>npx shadcn@latest init</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── NEWSLETTER ─────────────────────────── */

function NewsletterSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-20">
      <div className="rounded-2xl border bg-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight">Stay in the loop</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get notified about new components, blocks, and updates. No spam, unsubscribe anytime.
            </p>
          </div>
          <div className="flex gap-2">
            <Input placeholder="you@example.com" className="h-10" />
            <Button className="shrink-0 h-10">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER (compact) ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-md bg-foreground flex items-center justify-center">
                <Box className="h-3 w-3 text-background" />
              </div>
              <span className="text-sm font-semibold">Catalyst</span>
            </div>
            <nav className="hidden sm:flex items-center gap-6">
              {["Docs", "Components", "Blocks", "Themes", "GitHub"].map((link) => (
                <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><MessageSquare className="h-4 w-4" /></a>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-xs text-muted-foreground">© 2026 Catalyst</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-theme="indigo">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <FeaturesSection />
      <BentoSection />
      <HowItWorksSection />
      <CodeComparisonSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
