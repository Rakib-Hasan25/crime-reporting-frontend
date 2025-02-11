export interface User {
  id: string;
  email: string;
  phoneNumber: string;
  isVerified: boolean;
  isAdmin: boolean;
  profileImage?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CrimeReport {
  id: string;
  title: string;
  description: string;
  aiDescription?: string;
  images: string[];
  videos?: string[];
  division: string;
  district: string;
  location: {
    lat: number;
    lng: number;
  };
  author: User;
  upvotes: number;
  downvotes: number;
  verificationScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  proofImages: string[];
  proofVideos?: string[];
  author: User;
  crimeReportId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'unverified' | 'verified' | 'admin';