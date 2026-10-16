import { validCategory, type Category } from "./category";

export type Class = {
  id: string;
  name: string;
  categories: Category[];
};

// Returns whether class is well formed
export function validClass(course: Class): boolean {
  if (course.id.trim() === "" || course.name.trim() === "") {
    return false;
  }

  let totalWeights = 0;

  for (const cat of course.categories) {
    if (!validCategory(cat)) {
      return false;
    }

    totalWeights += cat.weight;
  }

  return Math.abs(totalWeights - 1) < 0.000001;
}
