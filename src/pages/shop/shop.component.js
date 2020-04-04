import React from 'react';
import './shop.component.style.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => {
    return (
        <div>
            {collections.map(({id, ...otherCollectionPorps})=>(
               <CollectionPreview key={id} {...otherCollectionPorps} />
            ))}           
        </div>
    );
    
}

const mapStateToProps = state => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps, null)(ShopPage);