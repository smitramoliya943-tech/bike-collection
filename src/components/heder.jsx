import logo from "../assets/hero.png";

function Header() {
    return (
        <>
            <style>{`
                * {
                    box-sizing: border-box;
                }

                .header {
                    width: 100%;
                    height: 75px;
                    padding: 0 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #111;
                    color: white;
                    font-family: Arial, sans-serif;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 24px;
                    font-weight: bold;
                    letter-spacing: 2px;
                }

                .logo img {
                    width: 45px;
                    height: 45px;
                    object-fit: contain;
                }

                .nav {
                    display: flex;
                    gap: 35px;
                }

                .nav a {
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                    transition: 0.3s;
                }

                .nav a:hover {
                    color: #a1a58c;
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .search-box {
                    width: 240px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    background: #222;
                    border: 1px solid #444;
                    border-radius: 25px;
                    overflow: hidden;
                    transition: 0.3s;
                }

                .search-box:focus-within {
                    border-color: #ff3c00;
                    box-shadow: 0 0 10px rgba(255, 60, 0, 0.3);
                }

                .search-box input {
                    flex: 1;
                    height: 100%;
                    padding: 0 15px;
                    border: none;
                    outline: none;
                    background: transparent;
                    color: white;
                    font-size: 14px;
                }

                .search-box input::placeholder {
                    color: #999;
                }

                .search-btn {
                    width: 45px;
                    height: 100%;
                    border: none;
                    background: transparent;
                    color: white;
                    cursor: pointer;
                    font-size: 18px;
                }

                .search-btn:hover {
                    color: #ff3c00;
                }

                .login-btn {
                    padding: 10px 22px;
                    border: none;
                    border-radius: 25px;
                    background: #ff3c00;
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .login-btn:hover {
                    background: #df8080;
                    transform: translateY(-2px);
                }

                @media (max-width: 900px) {
                    .header {
                        padding: 0 20px;
                    }

                    .nav {
                        gap: 15px;
                    }

                    .search-box {
                        width: 180px;
                    }
                }

                @media (max-width: 700px) {
                    .header {
                        height: auto;
                        padding: 15px;
                        flex-wrap: wrap;
                        gap: 15px;
                    }

                    .nav {
                        order: 3;
                        width: 100%;
                        justify-content: center;
                    }

                    .header-right {
                        margin-left: auto;
                    }
                }
            `}</style>

            <header className="header">

                <div className="logo">
                    <img src={logo} alt="Velox Logo" />
                    <span>BIKES</span>
                </div>

                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Cars</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                <div className="header-right">

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search bikes..."
                        />

                        <button className="search-btn"> 🔍 </button>
                    </div>

                    <button className="login-btn">Logi</button>

                </div>

            </header>
        </>
    );
}

export default Header;
