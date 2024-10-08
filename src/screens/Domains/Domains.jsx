import React from "react";
import "./Domains.css";
import StarCanvas from "../landingPage/StarbackGround";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";
import { baseUrl } from "../../API/api";
// import Loader from "../../components/Loader/loader";

const domains = await fetch(`${baseUrl}/domain`).then((v) => v.json());
const Domains = () => {
    const [activeCards, setActiveCards] = useState({});
    const [click, setClick] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    console.log(domains);

    const toggleActive = (index) => {
        setActiveCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const [comingSoon, setComingSoon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    const navigate = useNavigate();

    const clickDomain = (index) => {
        try {
            navigate(`/domains/${domains[index].id}/${domains[index].name.toLowerCase()}`);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <>
            <StarCanvas />
            {/* {isLoading && <Loader />} */}
            {error ? (
                <Error />
            ) : (
                <Box style={{ position: "relative", zIndex: "25" }}>
                    <div className="domains">
                        <div class="wrapper">
                            {domains.map((domain, index) => {
                                return (
                                    <div
                                        class="card"
                                        key={domain.id}
                                        className={`card ${activeCards[index] ? "active" : ""}`}
                                        onClick={() => toggleActive(index)}
                                    >
                                        <img
                                            src={`${baseUrl}/domain/photo?id=${domain.id}`}
                                            alt={domain.name}
                                            style={{ margin: "5%" }}
                                        />
                                        <h2>{domain.name.toUpperCase()}</h2>
                                        <Button
                                            sx={{
                                                color: "black",
                                                background: "#00b4d8",
                                                "&:hover": {
                                                    backgroundColor: "#00b4d8",
                                                },
                                                "&:focus": {
                                                    backgroundColor: "#00b4d8",
                                                },
                                                "&:active": {
                                                    backgroundColor: "#00b4d8",
                                                },
                                            }}
                                            onClick={() => {
                                                clickDomain(index);
                                            }}
                                        >
                                            Explore
                                        </Button>
                                        {!comingSoon && <p>{domain.description}</p>}
                                        {comingSoon && <p>The Section is under construction.</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Box>
            )}
        </>
    );
};

export default Domains;
