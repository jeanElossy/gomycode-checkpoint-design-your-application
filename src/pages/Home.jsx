import React from 'react'
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="home">

            <Header />

            <div className="text__image container-fluid bg-primary">
                <div className="row">
                    <div className="text col-12 col-md-7 text-white">
                        <h1>Beneficies de vos articles preferes <br /> en gros et en details</h1>
                        <p className="mt-4">Acheter et faites vous livrer vos colis en Cote d'Ivoire, au Burkina Faso, au Liberia, et en Sierra Leonne </p>
                        <div className="success mt-4">
                            <button className="btn btn-success p-2">Acheter maintenant</button>
                        </div>
                    </div>
                    <div className="image col-12 col-md-5">
                        <img src="medias/2.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="market">
                <span>
                    1
                </span>
            </div>
            <div className="produits container">
                <div className="row">
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h5 className="col-md-5 p-3">Hommes</h5>
                            <img 
                                src="medias/3.png" 
                                alt="" 
                                className="col-md-7"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h5 className="col-md-5 p-3">Sacs</h5>
                            <img src="medias/8.png" alt="" className="col-md-7"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 card">
                        <div className="row">
                            <h5 className="col-md-5 p-3">Femmes</h5>
                            <img src="medias/1.png" alt=""  className="col-md-7 pt-4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home
