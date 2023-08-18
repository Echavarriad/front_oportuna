import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import { stickyHeader } from '~/utilities/common-helpers';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';
import { useFetch } from '~/pages/api/api';

const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const { data } = useFetch(
        'https://oportuna.red/Wms_Oportuna/api/get_empresa'
    );

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo name={data.logo} />
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="header__center">
                        <SearchHeader />
                    </div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDefault;
