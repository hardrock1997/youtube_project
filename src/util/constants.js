const GOOGLE_API_KEY = "AIzaSyCSFmV_ThYbG9hjLIYnJ6HYqdGHyk0hvBA"
export const POPULAR_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&maxResults=${50}`

export const VIDEO_CATEGORIES_API_URL = `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${GOOGLE_API_KEY}`

export const VIDEO_BY_CATEGORY_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${GOOGLE_API_KEY}&maxResults=${50}&videoCategoryId=`

// https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=AIzaSyDpY859Qj7lG-XrfRW_Z5bJF9q-S3Pml_Q