import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

const API_URL = 'http://localhost:5000/api/movies'

const DeleteMovie = () => {
    const match = useRouteMatch();
    useEffect(() => {
        axios.delete(`${API_URL}/${match.params.id}`)
        .then(() => window.location = '/')
        .catch(err => console.log(err.response.data))
    }, [])
    return <></>
}

export default DeleteMovie;