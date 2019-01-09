export interface Tweet {
  id: number;
  id_str: string;
  created_at: Date;
  entities: any;
  favorite_count: number;
  retweet_count: number;
  text: string;
  user: {
    profile_image_url: string,
    name: string,
    screen_name: string
  };
}
