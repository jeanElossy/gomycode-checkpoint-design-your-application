import React, { useState } from 'react';
import uniqueid from 'uniqueid';

const Articles = ( { className }) => {

    const [data, setData] = useState(
        [
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            {
                id: uniqueid,
                img: "medias/5.png",
                name: "Jupe volante",
                count1: 3500,
                count2: 1500
            },
            
    ]);


    return (
        <div className={className}>
            <div className="container-fluid">
                <div className="row">
                    <div className="choose col-12 col-md-2">
                        <h1 className="h5 ms-4">Nouvel arrivage</h1>
                        <h2 className="h5 ms-4">Top ventes</h2>
                    </div>

                    <div className="product col-12 col-md-10 bg-light">
                        <div className="row">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="card p-4" style={{width: "16rem", height: "24rem"}} key={item.id}>
                                            <img src={item.img} alt="" className="images"/>

                                            <h1 className="h4">
                                                {item.name}
                                            </h1>

                                            <div className="mt-2">
                                                <div>{item.count1} / unite</div>
                                                <div>{item.count2} / a partie de 5 unites</div>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between gap-2 mt-3">
                                                <button className="btn btn-primary">Acheter</button>
                                                <button className="btn btn-outline-primary fw-bold">+</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles;


