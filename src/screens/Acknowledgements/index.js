import React from "react"
import {} from "react-bootstrap"

const Acknowledgements = () => {
    return (
        <>
            <div className="d-flex w-100 justify-content-center my-5">
                <h1>Acknowledgements</h1>
            </div>
            <div className="mx-5">
                <p>Most of the static images used in our website is </p>
                <ul className="mx-5">
                    <li>
                        <a  className="text-primary" href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
                            Designed by pikisuperstar / Freepik
                        </a>
                    </li>
                    <li>
                        <a  className="text-success" href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
                            Designed by pch.vector / Freepik
                        </a>
                    </li>
                    <li>
                        <a  className="text-warning" href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">
                            Designed by vectorjuice / Freepik
                        </a>
                    </li>
                </ul>
                <p>I want to thank all of you for your free contribution.</p>
            </div>
            <hr />
            <div>
                <p className="mx-5">
                    Most of the png icons used in our website is taken from Flaticon.
                    I want to thank <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">
                    Flaticon.com </a>
                    for their free contribution.
                </p>
            </div>
            <hr />
            <div>
                <p className="mx-5">
                    Some of the static images used in this website is taken from the
                    Pngtree. I want to thank <a href="https://pngtree.com/" target="_blank" rel="noopener noreferrer">
                    Pngtree </a>for their free contribution.
                </p>
            </div>
        </>
    )
}

export default Acknowledgements;
