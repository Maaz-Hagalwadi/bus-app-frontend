import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Form, Button } from 'react-bootstrap';
import '../../App.css';

const Dashboard = () => {
    const [searchData, setSearchData] = useState({
        source: '',
        destination: '',
        date: ''
    });

    const handleChange = (ele) => {
        const { name, value } = ele.target;
        setSearchData({ ...searchData, [name]: value });
    };

    const handleSubmit = (ele) => {
        ele.preventDefault();
        console.log('Search Data:', searchData);
        // You can send this data to your backend or handle it accordingly
    };

    return (
        <div className="background-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/mybuslogo-removebg-preview.png" alt="JourneyJet Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'orange' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/destinations" style={{ color: 'orange' }}>Destinations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: 'orange' }}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ color: 'orange' }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-auto">
                        <DropdownButton
                            align="end"
                            title="Accounts"
                            id="dropdown-menu-align-end"
                            variant="secondary"
                        >
                            <Dropdown.Item as={Link} to="/register">Sign Up</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </nav>
            <div className="search-form-container" style={{ marginTop: '100px' }}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card transparent-form">
                                <h1 className="lk" style={{ color: 'orange' }}>Search Buses</h1>
                                <div className="card-body">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Source:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="source"
                                                value={searchData.source}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Destination:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="destination"
                                                value={searchData.destination}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: 'orange' }}>Date:</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="date"
                                                value={searchData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>
                                        <div className="d-grid">
                                            <Button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1f2e2e', border: 'none' }}>Search</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
