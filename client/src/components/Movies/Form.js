import React, { useState } from 'react';
import axios from "axios";
import { getApiUrl } from '../../utils';

const API_URL = getApiUrl();

const Form = ({location, history}) => {
    const data = location?.state || {title: "", director: "", metascore: "", stars: []}
    const [state, setState] = useState({
        ...data
    });
    const [error, setError] = useState(null)
    const handleChange = e => {
        if (e.target.name === 'stars') {
            setState({
                ...state,
                stars: e.target.value.split(',')
            });
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            });

        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        const method = state.id ? 'put' : 'post';
        const url = state.id ? `${API_URL}/${state.id}` : API_URL;
        const successRedirectionPath = state.id ? `/movies/${state.id}` : '/';
        axios[method](url, state)
            .then(res => history.push(successRedirectionPath))
            .catch(err => setError(err.response));
        setState(data)
    }
    const saveStar = (newStar, index) => {
        if (newStar) {
            const {stars} = state;
            stars[index] = newStar;
            setState({
                ...state,
                stars
            })
        }
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <h2>
                {state.id >= 0 ? 'Update' : 'Add new movied'}
            </h2>
            {error && <div className="error">{error}</div>}
            <input onChange={handleChange} className="form-control" type="text" name="title" placeholder="Title" value={state.title} />
            <input onChange={handleChange} className="form-control" type="text" name="director" placeholder="Director" value={state.director} />
            <input onChange={handleChange} className="form-control" type="text" name="metascore" placeholder="Metascore" value={state.metascore} />
            <div className="stars">
                <div className="header">
                    <h4>Actors</h4>
                    <button onClick={e => {
                        e.preventDefault(); setState({...state, stars: [...state.stars, " "]})
                    }} className="btn  btn-primary small">
                        <i className="fa fa-plus icon"></i>
                        Add star
                    </button>
                </div>
                {state.stars.map((star, index) => <Start 
                    key={index} star={star} 
                    handleChange={newStar => saveStar(newStar, index)}
                    handleDelete={starName => setState({...state, stars: state.stars.filter(name => name !== starName)})}/>
                )}
            </div>
            <button className="btn btn-primary">
                {state.id >= 0 && <i className="fa fa-save icon"></i>}
                {state.id === undefined && <i className="fa fa-plus icon"></i>}
                {state.id >= 0 ? 'Update' : 'Add Movie'}
            </button>
        </form>
    )
}

const Start = ({star, handleChange, handleDelete}) => {
    const [state, setState] = useState("");
    const __handleChange = e => {
        setState(e.target.value);
    }

    return(
        <div className="star">
            {star.trim() && <p className="star-name">{star}</p>}
            {!star.trim() && <input onChange={__handleChange} className="form-control" type="text" name="star" value={state} placeholder="Star name" /> }
            <div className="actions">
                {star.trim() && 
                    <button onClick={e => {e.preventDefault(); handleDelete(star)}} className="btn btn-danger action">
                        <i className="fa fa-trash"></i>
                    </button>
                }
                {star === " " &&
                    <button onClick={e => {
                        e.preventDefault();
                        handleChange(state)
                    }} className="btn action">
                        <i className="fa fa-save"></i>
                    </button>
                }
            </div>
        </div>
    )
}

export default Form;