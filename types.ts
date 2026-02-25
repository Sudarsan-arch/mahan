
export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export enum Section {
  Home = 'home',
  Pristabhumi = 'pristabhumi',
  Biography = 'biography',
  Gallery = 'gallery',
  Vision = 'vision',
  Contact = 'contact'
}
