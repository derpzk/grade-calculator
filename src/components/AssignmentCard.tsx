import { useState } from "react";
import type { Assignment } from "../types/assignment";

type AssignmentCardProps = {
    assignment: Assignment;
};

export default function AssignmentCard ({ assignment } : AssignmentCardProps) {
  const [isEditingName, setIsEditingName] = useState(false);

  return (
    <article className="assignment-card">
      <div className="assignment-card__name">
        {isEditingName ? (
          <input
            type="text"
            defaultValue={assignment.name}
            aria-label="Assignment name"
            autoFocus
            onBlur={() => setIsEditingName(false)}
          />
        ) : (
          <span>{assignment.name}</span>
        )}
        {!isEditingName && (
          <button
            type="button"
            className="assignment-card__edit"
            aria-label="Edit assignment name"
            title="Edit assignment name"
            onClick={() => setIsEditingName(true)}
          >
            ✎
          </button>
        )}
      </div>
      <span className="assignment-card__score">
        <input
          type="number"
          defaultValue={assignment.earnedPoints}
          aria-label="Earned points"
        />
        <span aria-hidden="true">/</span>
        <input
          type="number"
          defaultValue={assignment.possiblePoints}
          aria-label="Possible points"
        />
      </span>
    </article>
  );
}


