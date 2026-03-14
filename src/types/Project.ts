export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
};


export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  isOffline?: boolean;
  isSleeping?: boolean;
  sleepingTitle?: string;
  sleepingMessage?: string;
  //offlineMessage?: string;
  warning1?: string; // Adicione isso
  warning2?: string;
  

  // ===== README (page content) =====
  readme?: {
    overview?: string;
    problem?: string;
    //process?: string;
    result?: string;
    process: string;
    technologies: string[];
    images?: ProjectMedia[];
    chartImages?: string[];
  };

  // ===== Optional links =====
  githubUrl?: string;
  liveUrl?: string;

  // ===== Optional UI breakdown =====
  components?: {
    name: string;
    image: string;
  }[];
}