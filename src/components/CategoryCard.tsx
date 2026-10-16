import { calculateCategoryGrade, type Category } from "../types/category";
import AssignmentCard from "./AssignmentCard";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const categoryGrade = calculateCategoryGrade(category);

  return (
    <section className="category-card">
      <h2 className="category-card__name">{category.name}</h2>
      <div className="category-card__details">
        <p className="category-card__weight">{category.weight * 100}% of course grade</p>
        <p className="category-card__weighted-grade">
          Category grade: {categoryGrade === null ? "—" : `${categoryGrade * 100}%`}
        </p>
      </div>
      <div className="category-card__assignments">
        {category.assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </section>
  );
}
