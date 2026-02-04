import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/fade-in";
import { CountUp } from "@/components/count-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Palette,
  Blocks,
  FileCode,
  Monitor,
  Smartphone,
  Cpu,
  CircleDot,
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  Minus,
} from "lucide-react";

/* ─────────────────────────── NAVBAR ─────────────────────────── */

function Navbar() {
  return (
    <header className="sticky top-10 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6" />
          <span className="text-lg font-bold tracking-tight">Acme</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <FadeIn>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          <Badge variant="secondary" className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Now in Public Beta
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              composable blocks
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Ship production-ready interfaces in minutes, not months. Open source components built on Radix and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button size="lg" className="gap-2 min-w-[160px]">
              Start Building <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 min-w-[160px]">
              <Github className="h-4 w-4" /> Star on GitHub
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-green-500" /> Free & Open Source
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-green-500" /> TypeScript
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-green-500" /> Accessible
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── LOGO CLOUD ─────────────────────────── */

function LogoCloud() {
  const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma", "Raycast"];
  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <FadeIn>
        <p className="text-center text-sm text-muted-foreground mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((name) => (
            <span key={name} className="text-lg font-semibold text-muted-foreground/60">{name}</span>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */

function StatsSection() {
  const stats = [
    { value: 50000, suffix: "+", label: "GitHub Stars", icon: Star },
    { value: 2000000, suffix: "+", label: "Monthly Downloads", icon: Download },
    { value: 12000, suffix: "+", label: "Discord Members", icon: Users },
    { value: 800, suffix: "+", label: "Contributors", icon: GitFork },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.05}>
          <div className="flex flex-col items-center text-center gap-2">
            <stat.icon className="h-5 w-5 text-muted-foreground mb-1" />
            <span className="text-3xl md:text-4xl font-bold tracking-tight">
              <CountUp value={stat.value} suffix={stat.suffix} delay={i * 0.05} />
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── FEATURES ─────────────────────────── */

function FeaturesSection() {
  const features = [
    {
      icon: Code2,
      title: "Copy & Paste",
      description: "Components you own. Copy them into your project and customize everything. No dependency lock-in.",
    },
    {
      icon: Layers,
      title: "Composable by Design",
      description: "Every component is built to work together. Combine them into complex interfaces effortlessly.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Zero runtime overhead. Pure Tailwind CSS with no CSS-in-JS. Your bundle stays lean.",
    },
    {
      icon: Shield,
      title: "Accessible First",
      description: "Built on Radix UI primitives. WAI-ARIA compliant. Keyboard navigation out of the box.",
    },
    {
      icon: Globe,
      title: "Framework Agnostic",
      description: "Works with Next.js, Remix, Astro, Vite — anywhere React runs. Svelte and Vue ports available.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Defaults",
      description: "Designed to look great out of the box. Dark mode, animations, and polish included.",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">Features</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Everything you need to ship
        </h2>
        <p className="text-muted-foreground text-lg">
          Production-grade components with the flexibility to make them yours.
        </p>
      </div>
      </FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FadeIn key={feature.title} delay={i * 0.05}>
          <Card className="group hover:shadow-md transition-all duration-200 border-border/50 hover:border-border h-full">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
            </CardContent>
          </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Initialize your project",
      description: "Run the CLI to set up your project config. It detects your framework, configures paths, and creates your component directory.",
      code: "npx shadcn@latest init",
    },
    {
      step: "02",
      title: "Add components",
      description: "Pick the components you need. The CLI resolves dependencies, installs packages, and copies the source into your project.",
      code: "npx shadcn@latest add button card dialog",
    },
    {
      step: "03",
      title: "Customize & ship",
      description: "The code is yours. Adjust styles, modify behavior, compose components together, and ship your UI with full control.",
      code: "// It's just React + Tailwind — go wild",
    },
  ];

  return (
    <section id="how-it-works" className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Three steps to production
          </h2>
          <p className="text-muted-foreground text-lg">
            From zero to shipped in minutes, not months.
          </p>
        </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.05}>
            <div className="flex flex-col h-full">
              <Card className="flex flex-col h-full border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{step.description}</p>
                  <div className="rounded-md border bg-muted/50 px-3 py-2.5 font-mono text-xs">
                    <span className="text-muted-foreground">$ </span>
                    <span>{step.code}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CODE BLOCK ─────────────────────────── */

function CodeBlock() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
        <div className="space-y-6">
          <Badge variant="outline">Developer Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Add components in seconds
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Use the CLI to add components to your project. Each component is installed with its dependencies and ready to use.
          </p>
          <div className="space-y-3">
            {["Automatic dependency resolution", "TypeScript support built-in", "Customizable with Tailwind", "Works with your existing setup"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
        <FadeIn delay={0.1}>
        <div className="rounded-xl border bg-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/20" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
              <div className="h-3 w-3 rounded-full bg-green-500/20" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-4">
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">npx shadcn@latest init</span>
            </div>
            <div className="text-muted-foreground text-xs">
              ✔ Preflight checks.<br />
              ✔ Verifying framework. Found Next.js.<br />
              ✔ Validating Tailwind CSS config.<br />
              ✔ Project initialization completed.
            </div>
            <Separator />
            <div>
              <span className="text-muted-foreground">$</span>{" "}
              <span className="text-foreground">npx shadcn@latest add button card dialog</span>
            </div>
            <div className="text-muted-foreground text-xs">
              ✔ Installing dependencies.<br />
              ✔ Created 3 files:<br />
              &nbsp;&nbsp;- src/components/ui/button.tsx<br />
              &nbsp;&nbsp;- src/components/ui/card.tsx<br />
              &nbsp;&nbsp;- src/components/ui/dialog.tsx
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── INTEGRATIONS / FRAMEWORKS ─────────────────────────── */

function IntegrationsSection() {
  const frameworks = [
    { name: "Next.js", icon: Globe, description: "First-class support with App Router and Server Components." },
    { name: "Remix", icon: Blocks, description: "Full compatibility with Remix loaders and nested routes." },
    { name: "Astro", icon: Sparkles, description: "Use as React islands in your Astro content sites." },
    { name: "Vite", icon: Zap, description: "Lightning-fast HMR with zero config needed." },
    { name: "Laravel", icon: FileCode, description: "Inertia.js integration for full-stack Laravel apps." },
    { name: "Gatsby", icon: Layers, description: "Static and dynamic pages with plugin support." },
  ];

  const platforms = [
    { name: "Web", icon: Monitor, description: "Responsive by default. Desktop and mobile optimized." },
    { name: "Mobile", icon: Smartphone, description: "React Native ports available via community." },
    { name: "Electron", icon: Cpu, description: "Build desktop apps with your existing components." },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">Integrations</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Works everywhere you do
        </h2>
        <p className="text-muted-foreground text-lg">
          First-class support for every major React framework and platform.
        </p>
      </div>
      </FadeIn>
      <FadeIn>
      <Tabs defaultValue="frameworks" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
        </TabsList>
        <TabsContent value="frameworks">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((fw) => (
              <Card key={fw.name} className="border-border/50 hover:border-border transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <fw.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{fw.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{fw.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="platforms">
          <div className="grid sm:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <Card key={p.name} className="border-border/50 hover:border-border transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <p.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-base">{p.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{p.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────── COMPARISON TABLE ─────────────────────────── */

function ComparisonSection() {
  const features = [
    { name: "Own the source code", us: true, them: false },
    { name: "No runtime dependency", us: true, them: false },
    { name: "Full Tailwind CSS", us: true, them: false },
    { name: "Radix primitives", us: true, them: "Partial" },
    { name: "TypeScript native", us: true, them: true },
    { name: "Dark mode built-in", us: true, them: true },
    { name: "Tree-shakeable", us: true, them: "Partial" },
    { name: "CLI component install", us: true, them: false },
    { name: "Custom themes via CSS vars", us: true, them: "Partial" },
    { name: "Zero config setup", us: true, them: false },
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Comparison</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why teams switch to us
          </h2>
          <p className="text-muted-foreground text-lg">
            See how we compare to traditional component libraries.
          </p>
        </div>
        </FadeIn>
        <FadeIn>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border bg-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b bg-muted/50">
              <span className="text-sm font-medium">Feature</span>
              <span className="text-sm font-medium text-center">Acme</span>
              <span className="text-sm font-medium text-center text-muted-foreground">Others</span>
            </div>
            {/* Rows */}
            {features.map((f, i) => (
              <div key={f.name} className={`grid grid-cols-3 gap-4 px-6 py-3.5 ${i < features.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-sm">{f.name}</span>
                <div className="flex justify-center">
                  {f.us === true ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex justify-center">
                  {f.them === true ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : f.them === "Partial" ? (
                    <span className="text-xs text-muted-foreground">Partial</span>
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────── COMPONENT SHOWCASE ─────────────────────────── */

function ShowcaseSection() {
  const categories = [
    { name: "Forms", count: 24, description: "Inputs, selects, checkboxes, radios, switches, and more." },
    { name: "Data Display", count: 18, description: "Tables, cards, badges, avatars, and data visualization." },
    { name: "Navigation", count: 12, description: "Menus, tabs, breadcrumbs, pagination, and sidebars." },
    { name: "Feedback", count: 15, description: "Dialogs, toasts, alerts, progress bars, and skeletons." },
    { name: "Layout", count: 8, description: "Sheets, scroll areas, separators, and resizable panels." },
    { name: "Overlay", count: 10, description: "Popovers, tooltips, dropdowns, and context menus." },
  ];

  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">Components</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          87+ components and counting
        </h2>
        <p className="text-muted-foreground text-lg">
          From simple buttons to complex data tables — everything you need, nothing you don&apos;t.
        </p>
      </div>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 0.05}>
          <Card className="group border-border/50 hover:border-border transition-all cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{cat.name}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  <CountUp value={cat.count} delay={i * 0.05} />
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{cat.description}</CardDescription>
              <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                Browse components <ArrowUpRight className="h-3 w-3" />
              </div>
            </CardContent>
          </Card>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
      <div className="text-center mt-10">
        <Button variant="outline" className="gap-2">
          View All Components <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────── PRICING ─────────────────────────── */

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for side projects and experiments.",
      features: ["All components", "Community support", "MIT License", "Unlimited projects"],
      cta: "Get Started",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For teams shipping production applications.",
      features: ["Everything in Starter", "Premium blocks", "Priority support", "Figma design kit", "Custom themes"],
      cta: "Start Free Trial",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations with advanced needs.",
      features: ["Everything in Pro", "Custom components", "Dedicated support", "SLA guarantee", "Private registry"],
      cta: "Contact Sales",
      variant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">Pricing</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-muted-foreground text-lg">
          Start free. Scale when you&apos;re ready.
        </p>
      </div>
      </FadeIn>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.05}>
          <Card className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg scale-[1.02] transition-shadow duration-300 hover:shadow-[0_0_24px_0px] hover:shadow-primary/40" : "border-border/50"}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="gap-1">
                  <Star className="h-3 w-3" /> Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
              </div>
              <CardDescription className="pt-1">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div className="space-y-2.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant={plan.variant} className="w-full">{plan.cta}</Button>
            </CardContent>
          </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "shadcn/ui changed how our team builds interfaces. We ship 3x faster now.",
      author: "Sarah Chen",
      role: "Engineering Lead, Acme Corp",
    },
    {
      quote: "The composability is unreal. Every component just works together seamlessly.",
      author: "Marcus Rivera",
      role: "Senior Frontend Dev, StartupCo",
    },
    {
      quote: "Finally, a design system that gets out of your way. Copy, paste, customize, ship.",
      author: "Yuki Tanaka",
      role: "Design Engineer, DesignLab",
    },
    {
      quote: "We migrated from Material UI in a weekend. The DX improvement is night and day.",
      author: "Priya Sharma",
      role: "Tech Lead, DataFlow",
    },
    {
      quote: "The CLI is genius. Add what you need, skip what you don't. Zero bloat.",
      author: "James Park",
      role: "Indie Developer",
    },
    {
      quote: "Our design-to-code handoff went from days to hours. The Figma kit is spot-on.",
      author: "Elena Volkov",
      role: "Design Director, CreativeHQ",
    },
  ];

  return (
    <section id="testimonials" className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by developers
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from the teams building with our components.
          </p>
        </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.05}>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{t.author.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── OPEN SOURCE ─────────────────────────── */

function OpenSourceSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="relative overflow-hidden rounded-2xl border bg-card">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <Badge variant="secondary">Open Source</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Built in the open,<br />for everyone
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Acme is MIT licensed and free forever. Our codebase is fully open — audit it, fork it, contribute to it. We believe great tools should be accessible to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="gap-2">
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
              <Button variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" /> Read the Docs
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "This week", commits: 47, prs: 12, issues: 8 },
              { label: "This month", commits: 189, prs: 52, issues: 31 },
              { label: "All time", commits: 12400, prs: 2800, issues: 1500 },
            ].map((period, i) => (
              <div key={period.label} className="rounded-lg border bg-muted/30 px-5 py-4">
                <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">{period.label}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xl font-bold">
                      <CountUp value={period.commits} delay={i * 0.1} />
                    </p>
                    <p className="text-xs text-muted-foreground">Commits</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">
                      <CountUp value={period.prs} delay={i * 0.1} />
                    </p>
                    <p className="text-xs text-muted-foreground">PRs Merged</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">
                      <CountUp value={period.issues} delay={i * 0.1} />
                    </p>
                    <p className="text-xs text-muted-foreground">Issues Closed</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────── COMMUNITY ─────────────────────────── */

function CommunitySection() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides, API references, and examples for every component.",
      cta: "Read Docs",
    },
    {
      icon: MessageSquare,
      title: "Discord Community",
      description: "Join 12,000+ developers. Get help, share projects, and shape the roadmap.",
      cta: "Join Discord",
    },
    {
      icon: Github,
      title: "GitHub Discussions",
      description: "Feature requests, bug reports, and RFC discussions — all in the open.",
      cta: "View Discussions",
    },
    {
      icon: Palette,
      title: "Theme Gallery",
      description: "Browse community-made themes or create and share your own custom themes.",
      cta: "Explore Themes",
    },
  ];

  return (
    <section className="border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Community</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Join the ecosystem
          </h2>
          <p className="text-muted-foreground text-lg">
            A growing community of developers building better interfaces together.
          </p>
        </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {resources.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.05}>
            <Card className="group border-border/50 hover:border-border transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <r.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{r.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-sm leading-relaxed">{r.description}</CardDescription>
                <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                  {r.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function FAQSection() {
  const faqs = [
    {
      question: "Is shadcn/ui free to use?",
      answer: "Yes. All components are open source and licensed under MIT. You can use them in personal and commercial projects without any restrictions.",
    },
    {
      question: "How is this different from a component library?",
      answer: "Traditional libraries install as a dependency you import from node_modules. With shadcn/ui, the code lives in your project — you own it completely. No version conflicts, no overriding styles, no waiting for upstream fixes.",
    },
    {
      question: "Can I use this with my existing project?",
      answer: "Absolutely. The CLI can add components to any React project that uses Tailwind CSS. It works with Next.js, Remix, Vite, Astro, and more. Components are added incrementally — install only what you need.",
    },
    {
      question: "Do I need to install all the components?",
      answer: "No. Each component is independent. Use the CLI to add only the ones you need. Dependencies between components are resolved automatically.",
    },
    {
      question: "How do I customize the theme?",
      answer: "Theming is handled through CSS custom properties in your globals.css file. You can adjust colors, border radius, fonts, and more. Dark mode is built in and works with next-themes or any class-based toggle.",
    },
    {
      question: "Is there a Figma design kit?",
      answer: "Yes — the Pro plan includes a complete Figma design kit with all components, variants, and design tokens that stay in sync with the code.",
    },
    {
      question: "Can I use this with Vue or Svelte?",
      answer: "Community ports exist for Vue (shadcn-vue) and Svelte (shadcn-svelte). The core library is React-first, but the same design patterns apply across frameworks.",
    },
    {
      question: "How do I update components?",
      answer: "Since you own the code, updates are manual by design. Use `npx shadcn diff` to see what changed upstream, then merge the updates you want. No surprise breaking changes.",
    },
  ];

  return (
    <section id="faq" className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">FAQ</Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about the platform.
        </p>
      </div>
      </FadeIn>
      <FadeIn>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function CTASection() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-24 md:py-32">
      <FadeIn>
      <div className="relative overflow-hidden rounded-2xl border bg-card p-8 md:p-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to build something?
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of developers shipping beautiful interfaces faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
            <Input placeholder="Enter your email" className="h-11" />
            <Button size="lg" className="shrink-0 gap-2">
              Get Started <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Free forever. No credit card required.</p>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <span className="font-bold">Acme</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Build faster with composable components.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><MessageSquare className="h-4 w-4" /></a>
            </div>
          </div>
          {[
            { title: "Product", links: ["Components", "Blocks", "Themes", "CLI", "Changelog"] },
            { title: "Resources", links: ["Documentation", "Examples", "Templates", "GitHub"] },
            { title: "Community", links: ["Discord", "Discussions", "Contributing", "Sponsors"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact", "Legal"] },
          ].map((group) => (
            <div key={group.title}>
              <p className="text-sm font-medium mb-3">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Acme Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
        </FadeIn>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen" data-theme="indigo">
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CodeBlock />
      <IntegrationsSection />
      <ShowcaseSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <OpenSourceSection />
      <CommunitySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
