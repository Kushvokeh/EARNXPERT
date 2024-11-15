export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  points: number;
  referralCode: string;
  referredBy?: string;
  referralCount: number;
  watchedVideos: string[];
  completedTrivia: string[];
  createdAt: Date;
}

export interface TriviaQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  duration: number;
  points: number;
  category: string;
  description: string;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  avatar?: string;
  points: number;
  referralCount: number;
}