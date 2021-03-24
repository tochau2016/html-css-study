import slide1 from './1.jpg'
import slide2 from './2.jpg'
import slide3 from './3.jpg'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    <img src="#" alt="LOGO" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Trang Chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tin Tức</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Liên hệ</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đăng Nhập</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đăng Ký</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Searchbar */}
            {/* <section className="search-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <form >
                                <div>
                                    <div className="input-group">
                                        <input type="search" className="form-control" placeholder="Tìm kiếm" name="" id="" />
                                        <div className="input-group-append">

                                            <button type="button" className="btn btn-secondary ms-2">Secondary</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

            {/*Carousel*/}
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" style={{height: '500px'}} alt="First Slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" style={{height: '500px'}} alt="Second Slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" style={{height: '500px'}} alt="Third Slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </>
    )
}
export default Header