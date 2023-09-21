import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import MediaRepository from '~/repositories/MediaRepository';
import { baseUrl } from '~/repositories/Repository';
import { getItemBySlug } from '~/utilities/product-helper';
import Promotion from '~/components/elements/media/Promotion';
import { useFetch } from '~/pages/api/api';

const HomeDefaultBanner = () => {
    const [bannerItems, setBannerItems] = useState(null);
    const [promotion1, setPromotion1] = useState(null);
    const [promotion2, setPromotion2] = useState(null);

    async function getBannerItems() {
        const responseData = await MediaRepository.getBannersBySlug(
            'banner-home-fullwidth'
        );
        if (responseData) {
            setBannerItems(responseData);
        }
    }

    const { data } = useFetch(
        'https://oportuna.red/Wms_Oportuna/api/get_productos_tiendas'
    );

    async function getPromotions() {
        const responseData = await MediaRepository.getPromotionsBySlug(
            'home_fullwidth_promotions'
        );
        if (responseData) {
            setPromotion1(getItemBySlug(responseData, 'main_1'));
            setPromotion2(getItemBySlug(responseData, 'main_2'));
        }
    }

    useEffect(() => {
        getBannerItems();
        getPromotions();
    }, []);

    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems) {
        let datos = data.product;
        const carouseItems = datos.map((item) => (
            <div className="slide-item" key={item.ProductId}>
                <Link href="/shop">
                    <a
                        className="ps-banner-item--default bg--cover"
                        style={{
                            backgroundImage: `url()`,
                        }}
                    />
                </Link>
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel">
                {carouseItems}
            </Slider>
        );
    }
    return (
        <div
            className="ps-home-banner ps-home-banner--1"
            style={{ height: '50vh' }}>
            <div className="ps-container">
                <div className="ps-section" style={{ width: '100%' }}>
                    {mainCarouselView}
                </div>
                {/* <div className="ps-section__right"></div> */}
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
