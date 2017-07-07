import React, { Component } from 'react';
import './style/productFilter.css';

class ProductCategoryRow extends Component{

    render(){
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        );
    }
}

class ProductRow extends Component{

    render(){
        let { name, price, stocked } = this.props.product;
        name = stocked ? <span style={ { color: 'red' } }>{ name }</span> : name;
        return(
            <tr>
                <td>{ name }</td>
                <td>{ price }</td>
            </tr>
        );
    }
}

class ProductTable extends Component{

    render(){
        let rows = [],
            lastCategory = null,
            category = null,
            name = '',
            { products, filterText, inStockOnly} = this.props;

        products.forEach((item) => {
            name = item.name;
            category = item.category;

            if(!name.toLowerCase().includes(filterText.toLowerCase()) || (!item.stocked && inStockOnly)){
                return;
            }

            if(category !== lastCategory){
                rows.push(<ProductCategoryRow category={category} key={category}/>);
                lastCategory = category;
            }

            rows.push(<ProductRow product={item} key={name}/>);
        });

        return (
            <table>
                <thead>
                    <tr><th>name</th><th>price</th></tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    }
}

class SearchBar extends Component{

    /*changeHandler(){
        console.log(this);// TODO this代表实例 undefined
    }*/

    changeHandler = () => {
        console.log(this);
        this.props.handlerUserOperate(this.refs.filterTextEle.value, this.refs.inStockOnlyEle.checked);
    };

    render(){
        const { filterText, inStockOnly} = this.props;
        return (
            <form>
                <input type="text" value={filterText} onChange={this.changeHandler} ref="filterTextEle"/>
                <div>
                    <input type="checkbox" checked={inStockOnly} onChange={this.changeHandler} ref="inStockOnlyEle"/>
                    Only show products in stock
                </div>
            </form>
        );
    }
}

let PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class FilterableProductTable extends Component{
    state = {
        filterText: '',
        inStockOnly: false
    };

    handlerUserOperate = (filterText, inStockOnly) => {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    };

    render(){
        return (
            <div className="product-filter">
                <SearchBar
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                    handlerUserOperate={this.handlerUserOperate}
                />
                <ProductTable
                    products={ PRODUCTS }
                    filterText={ this.state.filterText }
                    inStockOnly={ this.state.inStockOnly }
                />
            </div>
        );
    }
}

export default FilterableProductTable;