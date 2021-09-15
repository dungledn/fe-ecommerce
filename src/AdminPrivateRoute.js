import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";

function AdminPrivateRoute({...rest}) {

    const [ authenticated, setAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`)
            .then(res => {
                if (res.data.status === 200) {
                    setAuthenticated(true);
                } 
                setLoading(false);
            })
            // .catch(res => {
            //     history.push('/');
            // });
        return () => {
            setAuthenticated(false);
        }
    }, [])
    
    axios.interceptors.response.use(undefined, function (err) {
        console.log(err.response)
        if (err.response.status === 401) {
            history.push('/');
        }
        return Promise.reject(err)
      });

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <Route {...rest}
            render={ ({props, location}) =>
            authenticated ?
            ( <MasterLayout {...props} />) :
            ( <Redirect to={{pathname: "/login", state: { from: location }}} /> )
        }
        />
    );
}

export default AdminPrivateRoute;