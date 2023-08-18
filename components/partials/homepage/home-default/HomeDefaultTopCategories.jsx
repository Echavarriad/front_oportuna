import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useFetch } from '~/pages/api/api';

const HomeDefaultTopCategories = () => {
    const { data } = useFetch(
        'https://oportuna.red/Wms_Oportuna/api/get_productos_tiendas'
    );

    let datos = data.productos;
    let base = datos.base_url;
    let idgrup = datos.idgrupo + '/';

    const carouseItems = data.productos?.map((item) => (
        <div
            className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 "
            key={item.ProductId}>
            <div className="ps-block--category">
                <Link href="/shop">
                    <a className="ps-block__overlay"></a>
                </Link>
                <img src="" alt="martfury" />
                <p>Electronics</p>
            </div>
        </div>
    ));
    return (
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Top categories of the month</h3>
                <div className="row"></div>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;
