//Do commit - keys will be defined in Heroku,no risk in commiting
module.exports= {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  facebookClientID:process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret:process.env.FACEBOOK_CLIENT_SECRET,
  facebookProfileURL:process.env.FACEBOOK_PROFILE_URL,
  facebookProfileFields: process.env.FACEBOOK_PROFILE_FIELDS,
  DB: process.env.DB,
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  cookieKey: process.env.COOKIE_KEY
};
