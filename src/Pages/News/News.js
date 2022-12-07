import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData()
    const { title, author, total_view, rating, details, _id, thumbnail_url, image_url, category_id } = news
    return (
        <Card className="mb-3">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author.img}
                        style={{ height: '50px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <small>{author.published_date}</small>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <>{details}</>
                </Card.Text>

                <Link to={`/categories/${category_id}`}>
                    <Button variant="primary">Back</Button>
                </Link>

                {/* <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Back</Button>
                </Link> */}

            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center ">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span><small>{rating?.number}</small></span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>);
};

export default News;