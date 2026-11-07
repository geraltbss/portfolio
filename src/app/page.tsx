import Image from "next/image";
import { getBasePath } from "@/lib/site";

type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  href: string;
  visual: "rag" | "research" | "market" | "genomics" | "model";
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Sales, meet AI.",
    description:
      "A local-first RAG assistant that turns Superstore sales data into answers you can actually use.",
    category: "AI · DATA ANALYTICS",
    tags: ["Python", "ChromaDB", "Mistral 7B", "Gradio"],
    href: "https://github.com/geraltbss/RAG-Sales-Tool",
    visual: "rag",
    featured: true,
  },
  {
    number: "02",
    title: "The cost of context.",
    description:
      "A study of prompting, RAG and context optimization-measuring the trade-offs between accuracy, cost and latency.",
    category: "LLM · EXPERIMENTS",
    tags: ["RAG", "Vertex AI", "Transformers"],
    href: "https://github.com/geraltbss/Cost-Latency-Tradeoff-in-LLM-Based-System-Prompting-RAG-and-Context-Optimization",
    visual: "research",
  },
  {
    number: "03",
    title: "Reading the market.",
    description:
      "A Colombo Stock Exchange research project combining technical indicators and sentiment analysis for algorithmic trading.",
    category: "FINANCE · MACHINE LEARNING",
    tags: ["Python", "Technical analysis", "Sentiment"],
    href: "https://github.com/geraltbss/Algorithmic-Trading-using-Technical-and-Sentiment-Analysis-for-the-Colombo-Stock-Exchange",
    visual: "market",
  },
  {
    number: "04",
    title: "Tracking change over time.",
    description:
      "A transcriptomics study of gene and pathway changes from L4 larvae to two-day-old adults of C.Elegans, with a focus on CUG-repeat-associated effects.",
    category: "BIOINFORMATICS · GENE EXPRESSION",
    tags: ["Transcriptomics", "Pathways", "Data analysis"],
    href: "https://github.com/onlau/dsp2026",
    visual: "genomics",
  },
  {
    number: "05",
    title: "Sales, in dimension.",
    description:
      "A sales data engineering assignment exploring dimensional modeling and business-focused analysis.",
    category: "DATA ENGINEERING",
    tags: ["Python", "Pandas", "Star schema"],
    href: "https://github.com/geraltbss/Surge",
    visual: "model",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "rag") {
    return (
      <div className="visual visual-rag" aria-hidden="true">
        <div className="rag-orbit orbit-one" />
        <div className="rag-orbit orbit-two" />
        <div className="rag-core">ask<br />anything<span>✳</span></div>
        <span className="rag-chip chip-top">YOUR DATA</span>
        <span className="rag-chip chip-left">RETRIEVE</span>
        <span className="rag-chip chip-right">GENERATE</span>
        <span className="rag-index">RAG / 01</span>
      </div>
    );
  }

  if (type === "research") {
    return (
      <div className="visual visual-research" aria-hidden="true">
        <div className="research-topline"><span>BENCHMARK / 03 METHODS</span><span>3 APPROACHES</span></div>
        <div className="bar-chart">
          <div className="bar-column"><i className="bar bar-a" /><span>PROMPT</span></div>
          <div className="bar-column"><i className="bar bar-b" /><span>RAG</span></div>
          <div className="bar-column"><i className="bar bar-c" /><span>CONTEXT</span></div>
        </div>
        <div className="research-note"><span>cost</span><span>latency</span><span>accuracy</span></div>
      </div>
    );
  }

  if (type === "market") {
    return (
      <div className="visual visual-market" aria-hidden="true">
        <div className="market-topline"><span>CSE / SIGNALS</span><span>TECHNICAL × SENTIMENT</span></div>
        <div className="market-chart">
          <div className="market-gridline" />
          <div className="market-gridline" />
          <div className="market-gridline" />
          <div className="candle candle-one"><i /></div>
          <div className="candle candle-two"><i /></div>
          <div className="candle candle-three"><i /></div>
          <div className="candle candle-four"><i /></div>
          <div className="candle candle-five"><i /></div>
          <div className="candle candle-six"><i /></div>
          <div className="market-trend" />
        </div>
        <div className="market-bottomline"><span>PRICE ACTION</span><span>TEXT SIGNALS</span><span>DECISIONS</span></div>
        <span className="market-spark">↗</span>
      </div>
    );
  }

  if (type === "genomics") {
    return (
      <div className="visual visual-genomics" aria-hidden="true">
        <div className="genomics-topline"><span>EXPRESSION / TIME</span><span>123CUG</span></div>
        <div className="gene-helix">
          <div className="helix-strand strand-a" />
          <div className="helix-strand strand-b" />
          <i /><i /><i /><i /><i /><i />
        </div>
        <div className="stage-labels"><span>L4 LARVA</span><span>2-DAY ADULT</span></div>
        <div className="gene-pathways"><span>GENES</span><i /><span>PATHWAYS</span><i /><span>CHANGE</span></div>
      </div>
    );
  }

  return (
    <div className="visual visual-model" aria-hidden="true">
      <div className="schema-label">SALES DATA / MODEL</div>
      <div className="schema">
        <div className="schema-table fact-table"><b>FACT_SALES</b><span>order_id</span><span>product_key</span><span>sales · profit</span></div>
        <div className="schema-lines"><i /><i /><i /></div>
        <div className="schema-dimensions">
          <div className="schema-table"><b>PRODUCT</b><span>category</span></div>
          <div className="schema-table"><b>DATE</b><span>month · year</span></div>
          <div className="schema-table"><b>REGION</b><span>state · city</span></div>
        </div>
      </div>
      <span className="schema-stamp">MODEL<br />01-03</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className={`project-card${project.featured ? " project-featured" : ""}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} - open GitHub repository`}
    >
      <ProjectVisual type={project.visual} />
      <div className="project-copy">
        <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
        <div className="project-title-row"><h3>{project.title}</h3><Arrow diagonal /></div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </a>
  );
}

export default function Home() {
  const basePath = getBasePath();

  return (
    <main>
      <div className="page-shell">
        <header className="site-header">
          <a className="brand-link" href="#top" aria-label="Buddhima Senarathna home">
            <span className="brand-name">Buddhima Senarathna</span>
            <span className="brand-role">DATA SCIENTIST</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-link" href="https://github.com/geraltbss" target="_blank" rel="noreferrer">
            GitHub <Arrow diagonal />
          </a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> DATA · AI · NLP</div>
            <h1>I make<br /><span className="headline-accent">data</span> useful<span className="headline-period">.</span></h1>
            <div className="hero-bottom">
              <p>I build practical tools where data, AI and clear product thinking meet.</p>
              <a className="pill-link" href="#projects">Explore my work <Arrow /></a>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-grid" aria-hidden="true" />
            <Image
              className="portrait-image"
              src={`${basePath}/buddhima-senarathna.png`}
              alt="Buddhima Senarathna"
              fill
              priority
              sizes="(max-width: 640px) 82vw, (max-width: 900px) 42vw, 440px"
            />
            <span className="portrait-label"><span className="status-dot" /></span>
            <span className="portrait-index"></span>
          </div>
          <div className="hero-footnote"><span>DATA TOOLS & EXPERIMENTS</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="work-section" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected work<span>.</span></h2></div>
            <a className="text-link" href="https://github.com/geraltbss?tab=repositories" target="_blank" rel="noreferrer">All public repos <Arrow diagonal /></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-mark">✳</div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious about data.<br /><span>Focused on people.</span></h2>
            <p className="about-description">I’m a data scientist who enjoys making complex data easier to understand and useful in the real world. I’m currently pursuing a Master’s in Data Science at the University of Helsinki while working at KONE. My path so far has taken me through data science, business intelligence, and data engineering - and I’m always excited to learn what’s next.</p>
          </div>
          <div className="about-aside">
            <span className="aside-label">THE SHORT STORY</span>
            <ul className="journey-list">
              <li>
                <span className="journey-marker" />
                <div><span className="journey-date">CURRENT · EXPECTED 2027</span><h3>Master’s student, Data Science</h3><p>University of Helsinki · Data Scientist at KONE.</p></div>
              </li>
              <li>
                <span className="journey-marker" />
                <div><span className="journey-date">2024 - 2025</span><h3>BI Developer</h3><p>IFS</p></div>
              </li>
              <li>
                <span className="journey-marker" />
                <div><span className="journey-date">2023 - 2024</span><h3>Undergraduate Trainee, Data Engineering</h3></div>
              </li>
            </ul>
            <a href="https://www.linkedin.com/in/buddhima-senarathna" target="_blank" rel="noreferrer" className="about-link">Connect on LinkedIn <Arrow diagonal /></a>
          </div>
        </section>

        <footer className="site-footer">
          <a className="wordmark footer-mark" href="#top"><span>b</span>s.</a>
          <span>MADE WITH CURIOSITY, BY BUDDHIMA SENARATHNA.</span>
          <a href="https://github.com/geraltbss" target="_blank" rel="noreferrer">SAY HELLO <Arrow diagonal /></a>
        </footer>
      </div>
    </main>
  );
}
