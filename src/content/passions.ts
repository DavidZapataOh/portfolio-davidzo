/**
 * Live stage content. Photographs are David's own, dropped in public/live/<id>.jpg.
 * `line` renders only when he gives it (team, place, reason).
 */
export type Passion = {
  id: "football" | "travel" | "math" | "community";
  word: string;
  line?: string;
  alt: string;
  aspect: "3/2" | "2/3"; // landscape or portrait print
  rotate: number; // degrees, as the print was left on the table
  order: number; // reading order on the phone column
  x: number; // % of the table width
  y: number; // % of the table height
};

export const passions: Passion[] = [
  // Order is the stacking order (first at the bottom); every caption stays uncovered.
  { id: "football", word: "Football", alt: "David with his football team, all in Avalanche shirts, posing on the pitch.", aspect: "3/2", rotate: -4, x: 2, y: 8, order: 1 },
  { id: "travel", word: "Travel", alt: "A river at dusk, a boat passing, people sitting on the grass.", aspect: "2/3", rotate: 3, x: 30, y: 3, order: 2 },
  { id: "community", word: "Community", alt: "A crowd gathered around a speaker at a community meetup.", aspect: "3/2", rotate: 5, x: 64, y: 32, order: 4 },
  { id: "math", word: "Mathematics", alt: "David at a whiteboard full of equations, teaching a small group.", aspect: "3/2", rotate: -2, x: 56, y: 2, order: 3 },
];
