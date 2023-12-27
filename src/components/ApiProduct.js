import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiProduct() {
        const [list, setList] = useState([]);
        let url = "https://658c2957859b3491d3f59c3a.mockapi.io/Product";
        useEffect(() => {
                axios.get(url).then(function (res) {
                        console.log(res.data);
                        setList(res.data);
                });
        }, []);
        return (
                <div>
                        {list.map((item, index) => (
                                <div key={index}>
                                        {" "}
                                        {item.id}, {item.name}, {item.price}
                                </div>
                        ))}
                </div>
        );
}
