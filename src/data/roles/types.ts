export type RoleGuide = {
  intro: string;
  scopeNote?: string;
  duties: { title: string; paragraphs: string[] }[];
  limits: { title: string; text: string }[];
  examples: { title: string; text: string }[];
  election: {
    represents: string;
    selection: string;
    tenure: string;
    details?: string[];
  };
  accountability: string[];
  related: string[];
};
