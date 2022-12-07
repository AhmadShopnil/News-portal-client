import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccecpted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        // console.log(name, photo)
        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                setError('')
                handleUpdateProfile(name, photo)
                handleEmailVerification();
                toast.success('Please verrify your email address')

            })
            .catch(error => setError(error.message))
    }

    const handleEmailVerification = () => {
        return verifyEmail()
            .then(result => {

            })
            .catch(error => {
                error.console.error(error)
            })
    }


    const handleAccepted = (event) => {
        setAccecpted(event.target.checked)
    }
    const handleUpdateProfile = (name, photo) => {

        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(result => {

            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div>
            <h2>Sign Up Here</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter you name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepted} label={<>Accecpt<Link to='/trems'>Accept trems and condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepted}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;