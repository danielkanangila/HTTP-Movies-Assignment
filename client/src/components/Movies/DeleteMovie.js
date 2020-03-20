import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import axios from "axios";

const API_URL = 'http://localhost:5000/api/movies'

const DeleteMovie = () => {
    const match = useRouteMatch();
    const history = useHistory()
    useEffect(() => {
        axios.delete(`${API_URL}/${match.params.id}`)
        .then(() => history.push('/'))
        .catch(err => console.log(err.response.data))
    }, [])
    return <></>
}

export default DeleteMovie;