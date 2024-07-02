// src/types/PageProps.ts
export interface PageProps {
    title: string;
    content: string;
    onNavigate: (path: string) => void;
  }
  