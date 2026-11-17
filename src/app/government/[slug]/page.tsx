import { notFound } from 'next/navigation';
import { PresidentPage } from '@/components/president-page';
import { RoleGuide } from '@/components/role-guide';
import { VicePresidentPage } from '@/components/vice-president-page';
import { positions } from '@/data/positions';
import { federalLegislatorGuides } from '@/data/roles/federal-legislators';
import { localOfficeGuides } from '@/data/roles/local-offices';
import { stateOfficeGuides } from '@/data/roles/state-offices';
import type { RoleGuide as Guide } from '@/data/roles/types';

const guides: Readonly<Partial<Record<string, Guide>>> = {
  ...federalLegislatorGuides,
  ...stateOfficeGuides,
  ...localOfficeGuides,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return positions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return { title: positions.find((position) => position.slug === slug)?.name ?? 'Position' };
}

export default async function PositionPage({ params }: Props) {
  const { slug } = await params;
  if (slug === 'president') return <PresidentPage />;
  if (slug === 'vice-president') return <VicePresidentPage />;

  const position = positions.find((role) => role.slug === slug);
  const guide = guides[slug];
  if (!position || !guide) notFound();
  return <RoleGuide position={position} guide={guide} />;
}
