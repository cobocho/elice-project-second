import { Post } from './post';

export const enum BoardTypes {
  all = 'all',
  review = 'review',
  gather = 'gather',
  free = 'free',
}

export interface Board {
  id: string;
  title: BoardTypes;
  posts: Post[];
}
