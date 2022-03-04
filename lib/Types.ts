export interface TodoGroupType {
  id: number;
  title: string;
  completed?: boolean;
  color: string;
}

export interface TodoType {
  id: number;
  todo: string;
  completed?: boolean;
  isNewItem?: boolean;
}
