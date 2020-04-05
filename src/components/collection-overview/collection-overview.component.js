import React from 'react';
import './collection-overview.style.scss'

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {collections.map(({id, ...otherCollectionPorps})=>(
               <CollectionPreview key={id} {...otherCollectionPorps} />
            ))}           
        </div>
    );
    
}

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
})

export default connect(mapStateToProps, null)(CollectionOverview);