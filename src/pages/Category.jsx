import React from 'react'; 
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Category extends React.Component {
    constructor() {
        super();
        this.state = { categoryInfos: [] };
    }

    componentDidMount() {
        const { params } = this.props.match;
        const { categoryID } = params;
        getProductsFromCategoryAndQuery(categoryID).then(({results}) => this.setState({ categoryInfos: results }));
    }
    
    render() {        
        const { categoryInfos } = this.state;
        return (
            <div>
                { categoryInfos.map(
                    ({ title, id, thumbnail }) => <ProductCard title={ title } key={ id } img={ thumbnail } />
                )}
            </div>
        );
    }
}

export default Category;
