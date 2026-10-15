import { ExternalLink } from 'lucide-react';
import type { Project } from '../data';

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className={p.featured ? 'card project featured' : 'card project'}>
      <p className="meta">{p.context}</p>
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      <p><strong>My part: </strong>{p.role}</p>
      {p.tech.length > 0 && <ul className="chips" aria-label="Technologies">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>}
      {p.links?.map((l) => (
        <a key={l.href} className="link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <ExternalLink size={14} aria-hidden /></a>
      ))}
    </article>
  );
}
