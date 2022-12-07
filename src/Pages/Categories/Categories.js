import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Categories = () => {
    const CatNews = useLoaderData()

    return (
        <div>
            {/* <h2 className='text-center'> This catagories has total {CatNews.length} news</h2> */}
            {
                CatNews.map(news => <NewsSummaryCard
                    key={news._id} news={news}
                ></NewsSummaryCard>)
            }

        </div>
    );
};

export default Categories;