import React from 'react';
import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import useProduct from '~/hooks/useProduct';
import Rating from '~/components/elements/Rating';

const Product = ({ products, datos }) => {
    const { thumbnailImage, price, badge, title } = useProduct();
    console.log(datos);
    /*  let base = datos.base_url; */

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${products}`}>
                    <a>{/* <img src={base} /> */}</a>
                </Link>
                {/* {badge(products)} */}
                <ModuleProductActions product={products} />
            </div>
            <div className="ps-product__container">
                <Link href="/shop">
                    <a className="ps-product__vendor">Young Shop</a>
                </Link>
                <div className="ps-product__content">
                    {/* {title(products)} */}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>02</span>
                    </div>
                    {/* {price(products)} */}
                </div>
                <div className="ps-product__content hover">
                    {/*  {title(products)}
                    {price(products)} */}
                </div>
            </div>
        </div>
    );
};

export default Product;
