'use client';
import {useEffect, useState} from 'react';
import s from './site.module.css';

type Item = readonly [id:string, label:string];
export function GovernmentNavigation({items}:{items:readonly Item[]}) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const sections = items.map(([id]) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
      if (!sections.length) return;
      const threshold = window.innerWidth <= 800 ? 105 : 125;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
        else break;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1].id;
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, {passive:true});
    window.addEventListener('resize', schedule);
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); if (frame) cancelAnimationFrame(frame); };
  }, [items]);
  return <nav className={s.governmentNav} aria-label="On this page"><span>ON THIS PAGE</span><ol>{items.map(([id,label])=><li key={id}><a href={`#${id}`} className={active===id?s.governmentNavActive:undefined} aria-current={active===id?'location':undefined} onClick={()=>setActive(id)}>{label}</a></li>)}</ol></nav>;
}
