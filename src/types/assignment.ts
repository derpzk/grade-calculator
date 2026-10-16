export type Assignment = {
  id: string;
  name: string;
  earnedPoints: number;
  possiblePoints: number;
};

// Returns whether assignment is well formed
export function validAssignment(assign: Assignment): boolean {
  return (
    assign.id.trim() !== "" &&
    assign.name.trim() !== "" &&
    Number.isFinite(assign.earnedPoints) &&
    assign.earnedPoints >= 0 &&
    Number.isFinite(assign.possiblePoints) &&
    assign.possiblePoints > 0
  );
}
