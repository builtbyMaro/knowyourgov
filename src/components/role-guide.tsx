import Link from 'next/link';
import type { RoleGuide as Guide } from '@/data/roles/types';
import { positions, type Position } from '@/data/positions';
import s from './site.module.css';

const contents = [
  ['duties', 'Duties under the law'],
  ['limits', 'Where the role’s authority ends'],
  ['examples', 'What that looks like in practice'],
  ['election', 'Election and term of office'],
  ['accountability', 'How to follow their work'],
] as const;

export function RoleGuide({ position, guide }: { position: Position; guide: Guide }) {
  const levelHref = `/government/${position.level.toLowerCase()}/`;
  const related = guide.related.flatMap((slug) => positions.filter((role) => role.slug === slug));

  return (
    <>
      <section className={s.pageHero}>
        <div className={s.wrap}>
          <nav aria-label="Breadcrumb" className={s.breadcrumbs}>
            <Link href="/">Home</Link> / <Link href="/government/">Understand Government</Link> /{' '}
            <Link href={levelHref}>{position.level} Government</Link> / <span aria-current="page">{position.name}</span>
          </nav>
          <span className={s.eyebrow}>{position.level.toUpperCase()} GOVERNMENT · {position.arm.toUpperCase()}</span>
          <h1>{position.name}</h1>
          <p>{guide.intro}</p>
        </div>
      </section>

      <div className={`${s.wrap} ${s.section} ${s.roleLayout}`}>
        <nav aria-label="On this page" className={`${s.card} ${s.roleContents}`}>
          <h2>On this page</h2>
          <ul>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
        </nav>

        <article className={`${s.content} ${s.roleContent}`}>
          {guide.scopeNote && <p className={s.note}>{guide.scopeNote}</p>}

          <section aria-labelledby="duties">
            <h2 id="duties">What the law requires</h2>
            {guide.duties.map(({ title, paragraphs }) => (
              <div key={title}>
                <h3>{title}</h3>
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ))}
          </section>

          <section aria-labelledby="limits">
            <h2 id="limits">Where the role’s authority ends</h2>
            <ul>
              {guide.limits.map(({ title, text }) => <li key={title}><strong>{title}:</strong> {text}</li>)}
            </ul>
          </section>

          <section aria-labelledby="examples">
            <h2 id="examples">What that looks like in practice</h2>
            <div className={s.presidentExamples}>
              {guide.examples.map(({ title, text }) => (
                <div key={title}><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </section>

          <section aria-labelledby="election">
            <h2 id="election">Election and term of office</h2>
            <dl className={s.roleElection}>
              <dt>Represents</dt><dd>{guide.election.represents}</dd>
              <dt>How they take office</dt><dd>{guide.election.selection}</dd>
              <dt>Term</dt><dd>{guide.election.tenure}</dd>
            </dl>
            {guide.election.details?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section aria-labelledby="accountability">
            <h2 id="accountability">How to follow their work</h2>
            <ul>{guide.accountability.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          {position.contest && (
            <div className={s.note}>
              <h3>Looking for official election information?</h3>
              <p>Find the electoral authority responsible for this contest and check its announcements.</p>
              <Link className={s.textLink} href="/elections/">View official election information →</Link>
            </div>
          )}
        </article>

        <aside aria-labelledby="related-roles" className={`${s.card} ${s.roleRelated}`}>
          <h2 id="related-roles">Related roles</h2>
          <ul>{related.map((role) => <li key={role.slug}><Link href={`/government/${role.slug}/`}>{role.name} →</Link></li>)}</ul>
          <Link href={levelHref}>Explore {position.level.toLowerCase()} government →</Link>
        </aside>
      </div>
    </>
  );
}
