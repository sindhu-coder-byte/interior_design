"use client";

import { useMemo, useState } from "react";

type Project = { title: string; category: string; location: string; image: string; className: string };

const projects: Project[] = [
  { title: "The Quiet House", category: "Minimalist", location: "Cotswolds / 2024", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", className: "project-tall" },
  { title: "Kensington Edit", category: "Luxury", location: "London / 2024", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85", className: "project-wide" },
  { title: "Clay & Light", category: "Living", location: "Bath / 2023", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", className: "project-standard" },
  { title: "North Star Office", category: "Workspace", location: "Manchester / 2024", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85", className: "project-standard" },
  { title: "Serein Apartment", category: "Luxury", location: "Paris / 2023", image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85", className: "project-tall" },
  { title: "Rituals of Home", category: "Living", location: "Dublin / 2023", image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1000&q=85", className: "project-wide" },
];

const categories = ["All work", "Living", "Workspace", "Minimalist", "Luxury"];
const testimonials = [
  { quote: "They found the soul of our home before we knew how to name it. Every room now feels inevitable.", name: "Amelia & Jonas", role: "The Quiet House", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=92&crop=faces" },
  { quote: "A rare combination of beautiful ideas and absolute calm. The process was as considered as the result.", name: "Rhea Malhotra", role: "Kensington Edit", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=92&crop=faces" },
  { quote: "Our team works differently now. The space gives us room to think, focus, and gather with intention.", name: "Tom Kavanagh", role: "North Star Office", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=92&crop=faces" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("All work");
  const [slider, setSlider] = useState(48);
  const [room, setRoom] = useState("Living room");
  const [size, setSize] = useState("Medium");
  const [style, setStyle] = useState("Warm minimal");
  const [testimonial, setTestimonial] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const visibleProjects = useMemo(() => filter === "All work" ? projects : projects.filter((project) => project.category === filter), [filter]);
  const estimate = room === "Kitchen" ? (size === "Large" ? "£38k – £58k" : "£22k – £36k") : room === "Workspace" ? (size === "Large" ? "£26k – £42k" : "£14k – £28k") : (size === "Large" ? "£32k – £50k" : size === "Small" ? "£12k – £20k" : "£20k – £34k");

  return (
    <main className={dark ? "site dark" : "site light"}>
      <nav className="nav"><a className="logo" href="#top"><span className="logo-mark">A</span><span>Aura <i>Studio</i></span></a><div className="nav-links"><a href="#work">Projects</a><a href="#services">Services</a><a href="#process">Process</a><a href="#estimate">Pricing</a></div><button className="nav-cta" onClick={() => setModalOpen(true)}>Book consultation <Arrow /></button><button className="menu-button" aria-label="Open menu" title="Open navigation">☰</button></nav>

      <section className="hero" id="top"><div className="hero-image" /><div className="hero-content"><p className="eyebrow">Interior architecture / London + beyond</p><h1>Space to<br /><em>feel more.</em></h1><p className="hero-copy">We shape thoughtful interiors around the rituals, rhythms, and quiet ambitions of the people who live in them.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore portfolio <Arrow /></a><button className="button button-ghost" onClick={() => setModalOpen(true)}>Start your space <Arrow /></button></div></div><div className="hero-meta"><span>Scroll to explore</span><span>01 <i>/ 05</i></span></div><div className="hero-caption"><span>Reimagining a Victorian townhouse</span><span>01 — 06</span></div></section>

      <section className="statement section-pad"><p className="eyebrow">Our point of view</p><h2>A home should hold<br /><em>your way of being.</em></h2><div className="statement-bottom"><p>From the first sketch to the final candle, we make spaces with a sense of place. Less about trends, more about the feeling you want to come home to.</p><a className="text-link" href="#process">How we work <Arrow /></a></div></section>

      <section className="comparison section-pad"><div className="section-heading"><div><p className="eyebrow">The transformation</p><h2>Before / <em>after</em></h2></div><span className="project-index">01 <i>/ 04</i></span></div><div className="comparison-frame"><div className="comparison-after" style={{ clipPath: `inset(0 0 0 ${slider}%)` }} /><div className="comparison-before" /><div className="comparison-divider" style={{ left: `${slider}%` }}><span>↔</span></div><input className="comparison-range" type="range" min="8" max="92" value={slider} onChange={(event) => setSlider(Number(event.target.value))} aria-label="Compare before and after" title="Drag to compare before and after" /><div className="comparison-label before-label">Before · shell</div><div className="comparison-label after-label">After · The Quiet House</div></div></section>

      <section className="work section-pad" id="work"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Spaces with <em>substance.</em></h2></div><p className="heading-note">A small collection of homes and spaces<br />made slowly, with care.</p></div><div className="filters">{categories.map((category) => <button key={category} className={filter === category ? "filter active" : "filter"} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="project-grid">{visibleProjects.map((project) => <article className={`project ${project.className}`} key={project.title}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }}><button className="project-arrow" title={`Open ${project.title}`} aria-label={`Open ${project.title}`}><Arrow /></button></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.location}</p></div><span>{project.category}</span></div></article>)}</div></section>

      <section className="process section-pad" id="process"><div className="section-heading"><div><p className="eyebrow">A considered process</p><h2>From first thought<br />to <em>feeling at home.</em></h2></div><p className="heading-note">Good design is a conversation.<br />Ours happens in three chapters.</p></div><div className="process-grid">{[["01", "Discovery & 3D moodboard", "We listen, observe, and translate the intangible into a shared visual direction.", "✦"], ["02", "Material & spatial design", "Plans become atmosphere. Every surface, sightline, and detail earns its place.", "◌"], ["03", "Execution & handover", "We stay close through every decision, so the final reveal feels quietly effortless.", "⌁"]].map(([number, title, text, icon]) => <div className="process-step" key={number}><div className="step-top"><span>{number}</span><b>{icon}</b></div><h3>{title}</h3><p>{text}</p><a className="text-link" href="#estimate">Learn more <Arrow /></a></div>)}</div></section>

      <section className="estimate section-pad" id="estimate"><div className="estimate-intro"><p className="eyebrow">A sense of scale</p><h2>Let&apos;s make a<br /><em>roughly right</em><br />beginning.</h2><p>Every project is different. This gives you a first feeling for the kind of investment your space may ask for.</p></div><div className="calculator"><div className="calc-progress"><span className="progress-active" /><span /><span /></div><div className="calc-question"><p className="eyebrow">01 / 03 · The room</p><h3>What are we shaping?</h3><div className="option-row">{["Living room", "Kitchen", "Workspace"].map((option) => <button key={option} className={room === option ? "option selected" : "option"} onClick={() => setRoom(option)}>{option}</button>)}</div></div><div className="calc-question"><p className="eyebrow">02 / 03 · The scale</p><h3>How much space?</h3><div className="option-row">{["Small", "Medium", "Large"].map((option) => <button key={option} className={size === option ? "option selected" : "option"} onClick={() => setSize(option)}>{option}</button>)}</div></div><div className="calc-question"><p className="eyebrow">03 / 03 · The feeling</p><h3>Which sounds like you?</h3><div className="option-row">{["Warm minimal", "Quiet luxury", "Bold eclectic"].map((option) => <button key={option} className={style === option ? "option selected" : "option"} onClick={() => setStyle(option)}>{option}</button>)}</div></div><div className="estimate-result"><span>Estimated project range</span><strong>{estimate}</strong><small>{style} · {room} · {size} scale</small></div></div></section>

      <section className="stories section-pad"><div className="story-image" style={{ backgroundImage: `url(${testimonials[testimonial].image})` }} /><div className="story-content"><p className="eyebrow">Client stories</p><div className="rating">★★★★★ <span>5.0 / 5</span></div><blockquote>“{testimonials[testimonial].quote}”</blockquote><div className="story-client"><div><strong>{testimonials[testimonial].name}</strong><span>{testimonials[testimonial].role}</span></div><div className="story-controls"><button onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous story" title="Previous story">←</button><span>0{testimonial + 1} / 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next story" title="Next story">→</button></div></div></div></section>

      <footer className="footer section-pad"><div><a className="logo" href="#top"><span className="logo-mark">A</span><span>Aura <i>Studio</i></span></a><h2>Make room for<br /><em>what matters.</em></h2></div><div className="footer-right"><p>Have a space in mind?<br /><a className="text-link" href="mailto:hello@aurastudio.co">hello@aurastudio.co <Arrow /></a></p><div className="footer-links"><a href="#work">Instagram</a><a href="#work">Pinterest</a><a href="#process">Journal</a></div><small>© 2024 Aura Studio. All rights reserved.</small></div></footer>

      <div className="floating-bar"><a className="float-action whatsapp" href="https://wa.me/440000000000" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">◔</a><button className="float-action" onClick={() => setModalOpen(true)} aria-label="Book a call" title="Book a call">↗</button><button className="float-action theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle dark and light mode" title="Toggle dark and light mode">{dark ? "☼" : "☾"}</button></div>
      {modalOpen && <div className="modal-backdrop" onClick={() => setModalOpen(false)}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close modal" title="Close modal">×</button><p className="eyebrow">Let&apos;s begin</p><h2>Make room for<br /><em>your next chapter.</em></h2><p>Tell us a little about your space and we&apos;ll be in touch within two working days.</p><form onSubmit={(event) => { event.preventDefault(); setModalOpen(false); }}><input placeholder="Your name" required /><input type="email" placeholder="Email address" required /><button className="button button-primary" type="submit">Request a consultation <Arrow /></button></form></div></div>}
    </main>
  );
}
