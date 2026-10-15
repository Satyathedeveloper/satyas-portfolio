import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Showcase } from '../showcase';

function Mockup({ kind }: { kind: 'erp' | 'shop' }) {
  return (
    <figure className="mock" aria-label={`Illustrative ${kind === 'erp' ? 'ERP dashboard' : 'online store'} mockup`}>
      <div className="mock-bar" aria-hidden><i /><i /><i /></div>
      {kind === 'erp' ? (
        <div className="mock-body erp" aria-hidden>
          <div className="mock-side">{[0, 1, 2, 3, 4].map((n) => <b key={n} className={n === 1 ? 'on' : ''} />)}</div>
          <div className="mock-main">
            <div className="tiles">{[0, 1, 2].map((n) => <span key={n} />)}</div>
            {[0, 1, 2, 3].map((n) => <div className="row" key={n}><b /><b /><b /></div>)}
          </div>
        </div>
      ) : (
        <div className="mock-body shop" aria-hidden>
          <div className="banner" />
          <div className="products">{[0, 1, 2, 3].map((n) => <div key={n}><span /><b /><i /></div>)}</div>
        </div>
      )}
      <figcaption>Illustrative mockup, not a screenshot</figcaption>
    </figure>
  );
}

function ModuleOverview({ groups }: { groups: NonNullable<Showcase['groups']> }) {
  const [active, setActive] = useState(0);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActive((active + 1) % groups.length);
    if (e.key === 'ArrowLeft') setActive((active - 1 + groups.length) % groups.length);
  };
  return (
    <div className="modules">
      <div role="tablist" aria-label="GEN ERP module groups" className="tabs" onKeyDown={onKey}>
        {groups.map((g, i) => (
          <button key={g.title} role="tab" id={`tab-${i}`} aria-selected={active === i} aria-controls="tabpanel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)}>{g.title}</button>
        ))}
      </div>
      <ul role="tabpanel" id="tabpanel" aria-labelledby={`tab-${active}`} className="module-list" key={active}>
        {groups[active].modules.map((m) => (
          <li key={m.name} className={m.mine ? 'mine' : ''}>{m.name}{m.mine && <span className="sr-only"> (I worked on this)</span>}</li>
        ))}
      </ul>
      <p className="legend"><span className="mine-dot" aria-hidden /> Areas I worked on. Other items are part of the wider platform.</p>
    </div>
  );
}

export default function ProjectShowcase({ data: d }: { data: Showcase }) {
  return (
    <article className="showcase" id={d.id} aria-labelledby={`${d.id}-h`}>
      <div className="showcase-intro">
        <div>
          <p className="meta">{d.kicker}</p>
          <h3 id={`${d.id}-h`}>{d.name} <span className="team">{d.team}</span></h3>
          <p className="lead-sm">{d.overview}</p>
          <h4>My contribution</h4>
          <ul className="points">{d.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
          <ul className="chips" aria-label="Technologies">{d.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          {d.link && <a className="link" href={d.link.href} target="_blank" rel="noopener noreferrer">{d.link.label} <ExternalLink size={14} aria-hidden /></a>}
        </div>
        <Mockup kind={d.kind} />
      </div>
      {d.groups && <ModuleOverview groups={d.groups} />}
      {d.features && <div className="features"><h4>What it covers</h4><ul>{d.features.map((f) => <li key={f}>{f}</li>)}</ul></div>}
      <p className="note small">Company project. Source code and screens are private.</p>
    </article>
  );
}
