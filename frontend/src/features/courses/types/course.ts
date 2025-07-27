// Tipos para los bloques de contenido de Strapi
export interface BlockContent {
  type: string;
  children: Array<{
    type: string;
    text: string;
  }>;
}

// Tipos para las imágenes de Strapi
export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Tipos de datos de Strapi sin procesar
export interface StrapiLesson {
  id: number;
  documentId: string;
  title: string;
  description: any[];
  duration: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiCourse {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: any[];
  instructor: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  duration: string;
  level: string;
  students: number;
  image: StrapiImage;
  banner: StrapiImage;
  lessons: StrapiLesson[];
  localizations: any[];
}

// Tipos simplificados para el frontend
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: any[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: any[];
  instructor: string;
  image: string;
  banner: string;
  lessons: Lesson[];
  duration: string;
  level: string;
  students: number;
}