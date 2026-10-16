import type { Category } from "./types/category";
import CategoryCard from "./components/CategoryCard";

export default function App() {
  const testCategory: Category = {
    id: "category-1",
    name: "Quizzes",
    weight: 0.2,
    assignments: [
      {
        id: "assignment-1",
        name: "Chapter 1 Quiz",
        earnedPoints: 18,
        possiblePoints: 20,
      },
      {
        id: "assignment-2",
        name: "Chapter 2 Quiz",
        earnedPoints: 16,
        possiblePoints: 20,
      },
    ],
  };

  return (
    <main>
      <CategoryCard category={testCategory} />
    </main>
  );
}
