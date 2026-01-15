export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];

  type: 'data' | 'web';

  // ===== Data projects =====
  problem?: string;
  process?: string;
  result?: string;
  chartImages?: string[];

  // ===== Web projects =====
  readme?: string;
  githubUrl?: string;
  liveUrl?: string;
  components?: {
    name: string;
    image: string;
  }[];
}