export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];

  // ===== README (page content) =====
  readme?: {
    overview?: string;
    //problem?: string;
    //process?: string;
    //result?: string;
    process: string;
    technologies: string[];
    images?: string[];
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