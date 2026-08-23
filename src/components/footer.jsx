function Footer() {
    return (
        <>
            <style>{`
                .footer {
                    width: 100%;
                    background: #0b0b0b;
                    color: #fff;
                    border-top: 1px solid #292929;
                    margin-top: 50px;
                }

                .footer-container {
                    width: 100%;
                    max-width: 1400px;
                    margin: auto;
                    padding: 60px 6% 45px;

                    display: grid;
                    grid-template-columns: 2fr 1fr 1.3fr 1.5fr;
                    gap: 50px;
                }

                .footer-brand h2 {
                    font-size: 30px;
                    margin-bottom: 18px;
                }

                .footer-brand h2 span {
                    color: #888;
                }

                .footer-brand p {
                    max-width: 350px;
                    color: #999;
                    line-height: 1.7;
                    font-size: 14px;
                }

                .footer-box h3 {
                    font-size: 18px;
                    margin-bottom: 22px;
                }

                .footer-box > a {
                    display: block;
                    width: fit-content;
                    color: #999;
                    text-decoration: none;
                    margin-bottom: 13px;
                    font-size: 14px;
                    transition: 0.3s;
                }

                .footer-box > a:hover {
                    color: #fff;
                    transform: translateX(5px);
                }

                .social-icons {
                    display: flex;
                    gap: 10px;
                    margin-top: 25px;
                    flex-wrap: wrap;
                }

                .social-icons a {
                    color: #999;
                    text-decoration: none;
                    border: 1px solid #333;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 12px;
                    transition: 0.3s;
                }

                .social-icons a:hover {
                    background: #fff;
                    color: #111;
                }

                .contact p {
                    color: #999;
                    font-size: 14px;
                    margin-bottom: 13px;
                }

                .footer-btn {
                    margin-top: 12px;
                    padding: 11px 18px;
                    border: none;
                    border-radius: 7px;
                    background: #fff;
                    color: #111;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .footer-btn:hover {
                    background: #ddd;
                    transform: translateY(-2px);
                }

                .footer-bottom {
                    width: 100%;
                    max-width: 1400px;
                    margin: auto;
                    border-top: 1px solid #222;
                    padding: 22px 6%;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    color: #666;
                    font-size: 13px;
                }

                .footer-bottom-links {
                    display: flex;
                    gap: 25px;
                }

                .footer-bottom-links a {
                    color: #666;
                    text-decoration: none;
                }

                .footer-bottom-links a:hover {
                    color: #fff;
                }

                @media (max-width: 900px) {
                    .footer-container {
                        grid-template-columns: 1fr 1fr;
                        gap: 40px;
                    }
                }

                @media (max-width: 600px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        padding: 45px 7%;
                        gap: 35px;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }

                    .footer-bottom-links {
                        flex-direction: column;
                        gap: 8px;
                    }
                }
            `}</style>

            <footer className="footer">

                <div className="footer-container">

              
                    <div className="footer-box footer-brand">
                        <h2>🏍️ Moto<span>Ride</span></h2>

                        <p>
                            Discover premium bikes, powerful machines
                            and the perfect ride for every journey.
                        </p>

                        <div className="social-icons">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">YouTube</a>
                        </div>
                    </div>

        
                    <div className="footer-box">
                        <h3>Quick Links</h3>

                        <a href="#">Home</a>
                        <a href="#">Bikes</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </div>

                   
                    <div className="footer-box">
                        <h3>Bike Categories</h3>

                        <a href="#">Sports Bikes</a>
                        <a href="#">Super Bikes</a>
                        <a href="#">Cruiser Bikes</a>
                        <a href="#">Naked Bikes</a>
                    </div>

                  
                    <div className="footer-box contact">
                        <h3>Contact Us</h3>

                        <p>📍 Gujarat, India</p>
                        <p>📞 +91 98765 43210</p>
                        <p>✉️ motoride@gmail.com</p>

                        <button className="footer-btn">
                            Explore Bikes
                        </button>
                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 MotoRide. All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer;