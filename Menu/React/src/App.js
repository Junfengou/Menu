import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
    For whatever reason. When running in IIS express, the pop up browser will not hot reload. 
    Hot reload only work if you're looking at the "Real Browser"

    Just manually type in the URL: http://localhost:44377/

    [webpack --mode development --watch] still work for hot reload 😄
*/

function App() {
    const [persons, setPersons] = useState([]);
    const APIUrl = '/API/GetData';

    const getData = async () => {
        const res = await axios(
            APIUrl
        );
        setPersons(res.data);
    }

    
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>People table updated!</h1>
            {persons && persons.length > 0 &&
                <table style={{ borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "solid 1px black" }}>Name</th>
                            <th style={{ border: "solid 1px black" }}>Favourite Colour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map(p => {
                            return <tr key={p.Name}>
                                <td style={{ border: "solid 1px black" }}>{p.Name}</td>
                                <td style={{ border: "solid 1px black" }}>{p.FavouriteColour}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            }
        </>
    );
}
export default App;