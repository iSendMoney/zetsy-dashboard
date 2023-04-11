import hello from "hellojs";

export default hello.init({
  google: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  github: import.meta.env.VITE_GITHUB_CLIENT_ID,
  twitter: import.meta.env.VITE_TWITTER_CLIENT_ID,
  facebook: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
});
