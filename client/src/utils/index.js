export const getApiUrl = () => {
    const env = process.env.NODE_ENV;
    if (env === 'prodduction') {
        return "https://lambdaschool.kkanangila.com/http-movies/api/movies";
    } else {
        return "http://localhost:5000/api/movies";
    }
}