import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const RightNav = () => {

    const { googleLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoolgeSignIn = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoolgeSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>  Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub>   Login With Github</Button>

            </ButtonGroup>

            <div className='mt-4'>
                <h5>Find Us</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightNav;