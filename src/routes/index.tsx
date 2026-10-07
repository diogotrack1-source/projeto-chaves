import { createFileRoute } from "@tanstack/react-router";
import { Lock, Zap, Users, RefreshCw, Play, ShieldCheck } from "lucide-react";
import brandLogo from "@/assets/brand-logo.png";
import { useEffect, useState } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agostinho Carrara Casais™ — Comunidade VIP" },
      {
        name: "description",
        content:
          "Comunidade privada para casais no Telegram. Conteúdos exclusivos para membros em uma área reservada.",
      },
      { property: "og:title", content: "Agostinho Carrara Casais™ — Comunidade VIP" },
      {
        property: "og:description",
        content: "Acesso privado à comunidade VIP de casais no Telegram.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#070707] text-foreground font-sans overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-radial opacity-70" />

      <main className="relative mx-auto max-w-md px-5 pb-40 pt-8 sm:max-w-lg">
        {/* TOP BRAND */}
        <header className="flex flex-col items-center gap-3 animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/40 shadow-[0_0_18px_hsl(var(--primary)/0.35)]">
              <img
                src={brandLogo}
                alt="Agostinho Carrara Casais VIP"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Agostinho
              </span>
              <span className="mt-1 text-xl sm:text-2xl font-extrabold uppercase tracking-[0.12em]">
                <span className="text-primary">Carrara</span>
                <span className="text-foreground"> Casais</span>
                <span className="ml-1.5 align-middle text-[10px] font-bold text-primary">VIP</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
            <Lock className="h-3 w-3 text-foreground/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/90">
              Acesso 100% Anônimo
            </span>
            <span className="text-foreground/30">·</span>
            <LiveOnlineCounter />
          </div>
        </header>



        {/* HERO */}
        <section className="mt-10 text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-[18px] font-extrabold leading-tight tracking-tight uppercase text-center sm:text-xl md:text-2xl">
            <span className="text-gradient-primary">ALBÚM CONFIDENCIAL</span>
            <span className="text-foreground"> DE CASAIS NO TELEGRAM</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Conteúdos exclusivos para membros, organizados e atualizados com frequência em uma área reservada.
          </p>

          {/* Showcase premium — pares automáticos */}
          <MediaShowcase />


          <a
            href="https://t.me/carraracasaisbot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-full bg-gradient-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] hover:shadow-glow-strong animate-pulse-glow"
          >
            Entrar no Grupo VIP
          </a>
        </section>

        {/* INTRO BENEFITS */}
        <section className="mt-16 animate-fade-up">
          <h2 className="text-center text-base font-semibold">
            Conheça uma comunidade VIP reservada para casais
          </h2>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Acesso privado, conteúdos organizados e atualizações frequentes para membros.
          </p>

          <p className="mt-8 text-center text-sm font-semibold">Confira o que está disponível para membros:</p>

          <div className="mt-5 space-y-3">
            <BenefitCard
              icon={<Lock className="h-5 w-5" />}
              title="Acesso Privado"
              text="Conteúdos organizados em uma área exclusiva."
            />
            <BenefitCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Atualizações Frequentes"
              text="Novos materiais adicionados regularmente."
            />
            <BenefitCard
              icon={<Users className="h-5 w-5" />}
              title="Comunidade Ativa"
              text="Membros interagindo em uma comunidade reservada."
            />
            <BenefitCard
              icon={<Zap className="h-5 w-5" />}
              title="Acesso Imediato"
              text="Entrada rápida no grupo VIP após confirmação."
            />
          </div>
        </section>

        {/* PEEK INTO THE GROUP */}
        <section className="mt-16 animate-fade-up">
          <h3 className="text-center text-base font-bold">
            Dê uma espiadinha no grupo <span aria-hidden>👀</span>
          </h3>

          {/* Phone mockup */}
          <div className="mx-auto mt-5 max-w-[320px] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 shadow-card">
            {/* Fake chat header */}
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="h-5 w-5 rounded-full bg-primary/80" />
              <span className="h-2 w-24 rounded-full bg-white/15" />
            </div>

            {/* Video preview */}
            <div className="relative aspect-square overflow-hidden rounded-md bg-black">
              <video
                src="https://files.catbox.moe/yp8liz.mp4"
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-primary" />
            Mais de <span className="font-bold text-foreground">7 mil membros</span> ativos na rede
          </p>
        </section>



        {/* FINAL CTA */}
        <section id="cta" className="mt-16 animate-fade-up">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-background p-6 text-center shadow-glow">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary animate-float" />
            <h3 className="mt-3 text-2xl font-extrabold">
              Entre agora na <span className="text-gradient-primary">comunidade VIP</span>
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Acesso reservado com conteúdos exclusivos para membros.
            </p>

            <a
            href="https://t.me/carraracasaisbot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full bg-gradient-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] hover:shadow-glow-strong"
            >
              Entrar Agora
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
              Conteúdo 18+ • Acesso anônimo
            </p>
          </div>
        </section>

        <footer className="mt-16 text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
          Conteúdo destinado exclusivamente para maiores de 18 anos. Acesso sujeito às regras da comunidade.
        </footer>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-[#070707]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-md px-5 py-3 sm:max-w-lg">
          <a
            href="https://t.me/carraracasaisbot"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-gradient-primary px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.01]"
          >
            Entrar no Grupo VIP
          </a>
        </div>
      </div>
    </div>
  );
}

function LiveOnlineCounter() {
  const [count, setCount] = useState(1265);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 a +3
        const next = prev + change;
        if (next < 1240) return 1240 + Math.floor(Math.random() * 5);
        if (next > 1290) return 1290 - Math.floor(Math.random() * 5);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="text-[11px] font-semibold tracking-wider text-foreground/90">
        {count.toLocaleString("pt-BR")}
      </span>
      <span className="text-[11px] lowercase text-emerald-400">online</span>
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)] animate-pulse" />
    </>
  );
}

function MediaShowcase() {
  const media: { src: string; type: "image" | "video" }[] = [
    { src: "https://files.catbox.moe/oqv77g.jpg", type: "image" },
    { src: "https://files.catbox.moe/577o5m.MP4", type: "video" },
    { src: "https://files.catbox.moe/nw8rul.jpg", type: "image" },
    { src: "https://files.catbox.moe/zw9da4.mp4", type: "video" },
    { src: "https://files.catbox.moe/j12zui.mp4", type: "video" },
    { src: "https://files.catbox.moe/8wfl2h.mp4", type: "video" },
    { src: "https://files.catbox.moe/8u6byi.jpg", type: "image" },
    { src: "https://files.catbox.moe/cvnxpb.mp4", type: "video" },
  ];

  // Agrupa automaticamente em pares [vítima, preview]
  const pairs: { victim: typeof media[0]; preview: typeof media[0] }[] = [];
  for (let i = 0; i < media.length; i += 2) {
    const victim = media[i];
    const preview = media[i + 1] ?? media[i];
    pairs.push({ victim, preview });
  }

  return (
    <div className="relative mt-8 space-y-3">
      {pairs.map((pair, idx) => (
        <PairCard key={idx} victim={pair.victim} preview={pair.preview} index={idx} />
      ))}
      <LockedOverlay />
    </div>
  );
}

function LockedOverlay() {
  const handleClick = () => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.open(`https://t.me/carraracasaisbot${search}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Desbloquear conteúdo VIP"
      className="group absolute left-1/2 top-1/2 z-20 w-[70%] max-w-sm -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-3xl border border-white/25 bg-white/[0.14] p-6 text-center shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] sm:w-[60%]"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/15 animate-pulse-glow">
        <Lock className="h-7 w-7 text-white" strokeWidth={2.5} />
      </div>
      <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
        Conteúdo completo no VIP
      </h3>
      <p className="mt-2 text-xs text-white/70 sm:text-sm">
        Clique abaixo para desbloquear todo o conteúdo exclusivo.
      </p>
    </button>
  );
}

function PairCard({
  victim,
  preview,
  index,
}: {
  victim: { src: string; type: "image" | "video" };
  preview: { src: string; type: "image" | "video" };
  index: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-[#0a0606] p-2 shadow-card transition-smooth hover:border-primary/50 hover:shadow-glow">
      {/* Glow vermelho sutil */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-smooth group-hover:opacity-100" />

      <div className="relative grid grid-cols-[1fr_1.4fr] gap-2">
        {/* Vítima */}
        <div className="relative aspect-square overflow-hidden rounded-xl border border-border/60">
          {victim.type === "video" ? (
            <video
              src={victim.src}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={victim.src}
              alt={`Perfil ${index + 1}`}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              loading={index < 2 ? "eager" : "lazy"}
            />
          )}
          <div className="absolute left-1.5 top-1.5 rounded-md bg-black/70 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-foreground/90 backdrop-blur">
            Perfil
          </div>
        </div>

        {/* Preview relacionado */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/30">
          {preview.type === "video" ? (
            <video
              src={preview.src}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img
              src={preview.src}
              alt={`Preview ${index + 1}`}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              loading={index < 2 ? "eager" : "lazy"}
            />
          )}
          {/* Overlay dark + play */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute right-1.5 top-1.5 rounded-md bg-primary/90 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
            VIP
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/95 shadow-glow transition-smooth group-hover:scale-110">
              <Play className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>
          <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-foreground/90">
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
            Relacionado
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({

  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-smooth hover:border-primary/40 hover:shadow-glow">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow transition-smooth group-hover:scale-110">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
