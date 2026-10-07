import { createFileRoute } from "@tanstack/react-router";
import { Lock, Zap, Users, RefreshCw, Play, ShieldCheck, Film, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Nome da marca — troque aqui para atualizar a página inteira
const BRAND_FIRST = "Vila";
const BRAND_SECOND = "Picante";
const BRAND_NAME = `${BRAND_FIRST} ${BRAND_SECOND}`;

// Foto de perfil ao lado da marca (deixe vazio para mostrar o espaço reservado)
const BRAND_LOGO_URL = "/media/logo.webp";

const TELEGRAM_URL = "https://apextry.com/go/vilapicante";

// Trailer oficial da série (deixe vazio para mostrar o placeholder)
const TRAILER_URL = "/media/trailer.mp4";
const TRAILER_POSTER_URL = "/media/trailer-poster.webp";

const PAGE_TITLE = `${BRAND_NAME}™ — Série Original +18`;
const PAGE_DESCRIPTION =
  "Uma série adulta e autoral, com humor, situações inesperadas e episódios exclusivos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
    ],
    // Preload da logo e dos 2 primeiros episódios é gerado pelo React a partir de fetchPriority="high"
  }),
  component: Index,
});

function Index() {
  const liveCount = useLiveCount();

  return (
    <div className="min-h-screen bg-[#070707] text-foreground font-sans overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-radial opacity-70" />

      <main className="relative mx-auto max-w-md px-5 pb-40 pt-8 sm:max-w-lg">
        {/* TOP BRAND */}
        <header className="flex flex-col items-center gap-3 animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/40 shadow-[0_0_18px_hsl(var(--primary)/0.35)]">
              {BRAND_LOGO_URL ? (
                <img
                  src={BRAND_LOGO_URL}
                  alt={BRAND_NAME}
                  width={48}
                  height={48}
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImagePlaceholder iconClassName="h-5 w-5" />
              )}
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Série Original +18
              </span>
              <span className="mt-1 text-xl sm:text-2xl font-extrabold uppercase tracking-[0.12em]">
                <span className="text-foreground">{BRAND_FIRST}</span>
                <span className="text-primary">{BRAND_SECOND}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/90 sm:text-[11px]">
              <Lock className="h-3 w-3 shrink-0 text-foreground/70" />
              Conteúdo Exclusivo • Produção Autoral
            </span>
            <span className="text-foreground/30">·</span>
            <LiveOnlineCounter count={liveCount} />
          </div>
        </header>

        {/* HERO */}
        <section className="mt-10 text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-[26px] font-extrabold leading-[1.1] tracking-tight uppercase text-center sm:text-3xl md:text-4xl">
            <span className="text-foreground">O lado mais </span>
            <span className="text-gradient-primary">picante</span>
            <span className="text-foreground"> da vila</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Uma série adulta e autoral, com humor, situações inesperadas e episódios exclusivos.
          </p>

          <EpisodeShowcase />

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-full bg-gradient-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] hover:shadow-glow-strong animate-pulse-glow"
          >
            Ver Episódios Exclusivos
          </a>
        </section>

        {/* INTRO BENEFITS */}
        <section className="mt-16 animate-fade-up">
          <h2 className="text-center text-base font-semibold uppercase">
            Tem coisa acontecendo <span className="text-primary">nessa vila…</span>
          </h2>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Histórias inéditas, personagens originais e episódios feitos exclusivamente para maiores de 18 anos.
          </p>

          <p className="mt-8 text-center text-sm font-semibold">O que está disponível para membros:</p>

          <div className="mt-5 space-y-3">
            <BenefitCard
              icon={<Film className="h-5 w-5" />}
              title="Episódios Exclusivos"
              text="Temporadas completas que não estão em nenhum outro lugar."
            />
            <BenefitCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Novos Episódios"
              text="Novas histórias da vila lançadas com frequência."
            />
            <BenefitCard
              icon={<Users className="h-5 w-5" />}
              title="Comunidade de Membros"
              text="Bastidores e conversas em uma área reservada."
            />
            <BenefitCard
              icon={<Zap className="h-5 w-5" />}
              title="Acesso Imediato"
              text="Entrada rápida na área de membros após confirmação."
            />
          </div>
        </section>

        {/* TRAILER */}
        <section className="mt-16 animate-fade-up">
          <h3 className="text-center text-base font-bold">
            Uma prévia da série <span aria-hidden>👀</span>
          </h3>

          {/* Phone mockup */}
          <div className="mx-auto mt-5 max-w-[320px] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 shadow-card">
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="h-5 w-5 rounded-full bg-primary/80" />
              <LiveOnlineCounter count={liveCount} />
            </div>

            <div className="relative aspect-square overflow-hidden rounded-md bg-black">
              {TRAILER_URL ? (
                <LazyVideo src={TRAILER_URL} poster={TRAILER_POSTER_URL} />
              ) : (
                <ImagePlaceholder label="Vídeo do trailer" />
              )}
            </div>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-primary" />
            Mais de <span className="font-bold text-foreground">7 mil membros</span> acompanhando a série
          </p>

          <JoinTicker />
        </section>

        {/* FINAL CTA */}
        <section id="cta" className="mt-16 animate-fade-up">
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card to-background p-6 text-center shadow-glow">
            <ShieldCheck className="mx-auto h-8 w-8 text-primary animate-float" />
            <h3 className="mt-3 text-2xl font-extrabold">
              A vila como você <span className="text-gradient-primary">nunca viu</span>
            </h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Acesso reservado com episódios exclusivos para membros.
            </p>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full bg-gradient-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02] hover:shadow-glow-strong"
            >
              Acessar {BRAND_NAME}
            </a>
            <p className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
              Conteúdo 18+ • Acesso reservado
            </p>
          </div>
        </section>

        <footer className="mt-16 space-y-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground/60">
          <p>Conteúdo destinado exclusivamente para maiores de 18 anos.</p>
          <p>
            Obra de ficção original. Todos os personagens são adultos e fictícios; qualquer semelhança com
            pessoas reais é coincidência.
          </p>
        </footer>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-[#070707]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-md px-5 py-3 sm:max-w-lg">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-gradient-primary px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-smooth hover:scale-[1.01]"
          >
            Ver Episódios Exclusivos
          </a>
        </div>
      </div>
    </div>
  );
}

function useLiveCount() {
  const [count, setCount] = useState(1285);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 a +3
        const next = prev + change;
        if (next < 1260) return 1260 + Math.floor(Math.random() * 5);
        if (next > 1310) return 1310 - Math.floor(Math.random() * 5);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return count;
}

function LiveOnlineCounter({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-[11px] font-semibold tracking-wider text-foreground/90">
        {count.toLocaleString("pt-BR")}
      </span>
      <span className="text-[11px] lowercase text-emerald-400">assistindo</span>
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)] animate-pulse" />
    </span>
  );
}

const JOIN_NAMES = [
  "Lucas M.", "Rafael S.", "Bruno C.", "Thiago R.", "Gabriel A.", "Felipe O.", "Matheus L.",
  "Pedro H.", "Gustavo P.", "Leonardo F.", "Rodrigo T.", "Diego N.", "André V.", "Marcelo B.",
  "Vinícius G.", "Eduardo D.", "Carlos J.", "Ricardo K.", "Fernanda S.", "Juliana R.",
  "Camila T.", "Amanda L.", "Larissa P.", "Beatriz M.",
];

const JOIN_TIMES = ["agora mesmo", "há 1 min", "há 2 min", "há 3 min"];

function pickRandom<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function JoinTicker() {
  const [entry, setEntry] = useState({ id: 0, name: JOIN_NAMES[0], time: JOIN_TIMES[0] });

  useEffect(() => {
    const interval = setInterval(() => {
      setEntry((prev) => {
        let name = pickRandom(JOIN_NAMES);
        while (name === prev.name) name = pickRandom(JOIN_NAMES);
        return { id: prev.id + 1, name, time: pickRandom(JOIN_TIMES) };
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 flex h-10 justify-center overflow-hidden">
      <div
        key={entry.id}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] text-muted-foreground animate-fade-up"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" />
        <span>
          <span className="font-semibold text-foreground">{entry.name}</span> entrou no grupo
        </span>
        <span className="text-foreground/40">· {entry.time}</span>
      </div>
    </div>
  );
}

// Vídeo mudo em loop que só baixa e toca quando entra na tela, e pausa ao sair
function LazyVideo({ src, poster, className = "" }: { src: string; poster?: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      poster={poster}
      className={`h-full w-full object-cover${className ? ` ${className}` : ""}`}
      preload="none"
      autoPlay={active}
      loop
      muted
      playsInline
    />
  );
}

type Media = { src: string; type: "image" | "video" };

// Episódios em destaque. Adicione `media` com material oficial da série para exibir a prévia.
const EPISODES: { title: string; duration: string; media?: Media }[] = [
  { title: "A Visita Inesperada", duration: "12 min", media: { src: "/media/episode-01.webp", type: "image" } },
  { title: "Depois que a Vila Dorme", duration: "15 min", media: { src: "/media/episode-02.webp", type: "image" } },
  { title: "O Segredo do Quarto", duration: "11 min", media: { src: "/media/episode-03.webp", type: "image" } },
  { title: "Ninguém Podia Descobrir", duration: "14 min", media: { src: "/media/episode-04.webp", type: "image" } },
];

function EpisodeShowcase() {
  return (
    <div className="relative mt-8 grid grid-cols-2 gap-3">
      {EPISODES.map((ep, idx) => (
        <EpisodeCard key={idx} index={idx} {...ep} />
      ))}
      <LockedOverlay />
    </div>
  );
}

function LockedOverlay() {
  const handleClick = () => {
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.open(`${TELEGRAM_URL}${search}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Desbloquear episódios exclusivos"
      className="group absolute left-1/2 top-1/2 z-20 w-[70%] max-w-sm -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-3xl border border-white/15 bg-white/[0.02] p-6 text-center shadow-lg backdrop-blur-[2px] transition-transform duration-300 hover:scale-[1.02] sm:w-[60%]"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 animate-pulse-glow">
        <Lock className="h-7 w-7 text-white" strokeWidth={2.5} />
      </div>
      <h3 className="mt-4 text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
        Episódios completos para membros
      </h3>
      <p className="mt-2 text-xs text-white/70 sm:text-sm">
        Clique para desbloquear a temporada exclusiva.
      </p>
    </button>
  );
}

function EpisodeCard({
  title,
  duration,
  media,
  index,
}: {
  title: string;
  duration: string;
  media?: Media;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-[#0a0606] shadow-card transition-smooth hover:border-primary/50 hover:shadow-glow">
      {media?.type === "video" && <LazyVideo src={media.src} className="absolute inset-0" />}
      {media?.type === "image" && (
        <img
          src={media.src}
          alt={title}
          width={288}
          height={432}
          className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
          fetchPriority={index < 2 ? "high" : "auto"}
          decoding="async"
        />
      )}
      {!media && <ImagePlaceholder />}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute right-2 top-2 rounded-md bg-primary/90 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
        Exclusivo
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3 text-left">
        <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">Episódio {number}</div>
        <div className="mt-1 text-[13px] font-extrabold uppercase leading-tight text-foreground">{title}</div>
        <div className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Play className="h-2.5 w-2.5 fill-primary text-primary" />
          {duration}
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

function ImagePlaceholder({ label, iconClassName = "h-6 w-6" }: { label?: string; iconClassName?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 border border-dashed border-white/15 bg-gradient-to-br from-[#2a0a0e] via-[#120507] to-black">
      <ImageIcon className={`${iconClassName} text-foreground/40`} />
      {label && (
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-foreground/40">{label}</span>
      )}
    </div>
  );
}
