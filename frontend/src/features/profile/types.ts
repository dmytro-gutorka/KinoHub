export type SocialLinks = {
  telegram?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
};

export interface IUserProfile {
  firstName: string;
  lastName: string;
  bio: string;
  avatarUrl: string;
  city: string;
  country: string;
  birthDate: string;
  social: SocialLinks;
}
