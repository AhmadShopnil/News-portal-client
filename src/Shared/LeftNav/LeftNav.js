
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCateries] = useState([])

    useEffect(() => {
        fetch('https://news-portal-server-omega.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCateries(data))
    }, [])
    return (
        <div>

            <h2>All Categories: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;