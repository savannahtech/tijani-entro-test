export type InputChangeProps = React.ChangeEvent<HTMLInputElement>;

export interface TaskProps {
  assigneeName: string;
  createdAt: string;
  description: string;
  id: number;
  status: string;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface ConnectTaskProps {
  // taskId: number;
  relatedTaskId: number;
}

export interface ReactNodeProps {
  children: React.ReactNode;
}
