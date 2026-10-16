import { validAssignment, type Assignment } from "./assignment";

export type Category = {
  id: string;
  name: string;
  weight: number;
  assignments: Assignment[];
};

// Returns whether category is well formed
export function validCategory(cat: Category): boolean {
  return (
    cat.id.trim() !== "" &&
    cat.name.trim() !== "" &&
    Number.isFinite(cat.weight) &&
    cat.weight >= 0 &&
    cat.weight <= 1 &&
    cat.assignments.every(validAssignment)
  );
}

// Calculates category grade
export function calculateCategoryGrade(cat: Category): number | null {
  let totalPointsEarned = 0;
  let totalPossiblePoints = 0;

  for (const assignment of cat.assignments) {
    totalPointsEarned += assignment.earnedPoints;
    totalPossiblePoints += assignment.possiblePoints;
  }

  if (totalPossiblePoints === 0) {
    return null;
  }

  return totalPointsEarned / totalPossiblePoints;
}

// Calculates weighted category grade
export function calculateWeightedGrade(cat: Category): number | null {
  const catGrade = calculateCategoryGrade(cat);

  if (catGrade === null) return null;

  return catGrade * cat.weight;
}
