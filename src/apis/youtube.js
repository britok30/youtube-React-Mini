import axios from "axios";

const KEY = "AIzaSyCZ7LIyYbOCbVMAB3wEbl2h8XWlNbzb3xw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});
