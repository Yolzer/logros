export interface Difficulty {
  id: number;
  name: string;
  points: number;
}
export interface Achievement {
  id: number;
  title: string;
  description?: string;
  difficultyId: number;
  completed: boolean;
}
export interface Reward {
  id: number;
  name: string;
}
