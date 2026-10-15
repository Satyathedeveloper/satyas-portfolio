import type { ReactNode } from 'react';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { education, experience, profile, projects, skills } from '../data';
import type { Job, SkillGroup } from '../data';
import ProjectCard from './ProjectCard';
import ProjectShowcase from './ProjectShowcase';
import Reveal, { delay } from './Reveal';
import { erp, nutsby } from '../showcase';

function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={`${id}-title`} className="section-title">{children}</h2>;
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container"><SectionHeading id={id}>{title}</SectionHeading><Reveal>{children}</Reveal></div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="status rise" style={delay(0)}><span className="dot" aria-hidden /> Open to opportunities. {profile.location}.</p>
          <h1 id="hero-title" className="rise" style={delay(80)}>Full-Stack Developer building ERP and e-commerce platforms with React, PHP and Node.js.</h1>
          <p className="lead rise" style={delay(160)}>2+ years of professional experience on business applications at Genesis Poweronics and Schemax. I work across the stack: MySQL and REST APIs on the back end, React interfaces on the front end, and Cashfree and Razorpay payments in production.</p>
          <div className="actions rise" style={delay(240)}>
            <a className="btn" href="#projects">View projects</a>
            <a className="btn btn-ghost" href={profile.resume} download><Download size={16} aria-hidden /> Download resume</a>
            <a className="icon-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={20} aria-hidden /></a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} aria-hidden /></a>
          </div>
        </div>
        <figure className="portrait rise" style={delay(200)}>
          <img src={profile.photo} width={400} height={400} alt={`Portrait of ${profile.name}`} />
        </figure>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <div className="prose">
        <p>I started in mechanical engineering and moved into software, beginning with React front-end work on a warehouse management system, then growing into full-stack development with PHP, Node.js and MySQL.</p>
        <p>My day-to-day work is building features end to end: designing the database, writing the REST APIs, connecting them to React screens, then debugging and testing them until they hold up in production. I also like making data easier to reach, which led me to the database chatbot.</p>
        <p>I am looking for a full-stack role where I can work on larger products and keep learning. Angular and Java are what I am studying now.</p>
      </div>
    </Section>
  );
}

function ExperienceItem({ job }: { job: Job }) {
  return (
    <li className="job">
      <div className="job-head">
        <h3>{job.role}</h3>
        <p className="meta">{job.period}</p>
      </div>
      <p className="company">{job.company}{job.note ? `. ${job.note}` : ''}</p>
      <ul className="points">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
      {job.tech.length > 0 && <ul className="chips" aria-label="Technologies used">{job.tech.map((t) => <li key={t}>{t}</li>)}</ul>}
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">{experience.map((j) => <ExperienceItem key={j.company} job={j} />)}</ol>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="note">Most of this work was built for employers and clients, so source code is private. Public links are shown where they exist.</p>
      <ProjectShowcase data={erp} />
      <ProjectShowcase data={nutsby} />
      <h3 className="sub">More work</h3>
      <div className="grid grid-3">{projects.map((p, i) => <Reveal key={p.name} ms={i * 60}><ProjectCard project={p} /></Reveal>)}</div>
    </Section>
  );
}

function SkillsGroup({ group }: { group: SkillGroup }) {
  const label = group.level === 'Learning' ? 'Learning' : group.level;
  return (
    <div className="card skill">
      <h3>{group.title}</h3>
      <p className={`level ${group.level.toLowerCase()}`}>{label}</p>
      <ul className="chips">{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="note">Professional means used in paid work. Foundational means I understand it and have used part of it. Learning means I am studying it now.</p>
      <div className="grid grid-3">{skills.map((g) => <SkillsGroup key={g.title} group={g} />)}</div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="job-head"><h3>{education.degree}</h3><p className="meta">{education.period}</p></div>
      <p className="company">{education.school}. {education.result}.</p>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="lead">I am happy to talk about full-stack, React or PHP roles. Email is the quickest way to reach me.</p>
      <ul className="contact-list">
        <li><a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden /> {profile.email}</a></li>
        <li><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} aria-hidden /> {profile.phone}</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden /> LinkedIn</a></li>
        <li><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden /> GitHub</a></li>
        <li><a href={profile.resume} download><Download size={18} aria-hidden /> Resume (PDF)</a></li>
      </ul>
    </Section>
  );
}

export function Footer() {
  return <footer className="footer"><div className="container">© {new Date().getFullYear()} {profile.name}</div></footer>;
}
