import React from 'react';
import './shop.component.style.scss';

import CollectionPage from '../collection/collection.component'

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>         
        </div>
    );
    
}


export default ShopPage;