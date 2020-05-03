import React from 'react';
import './GridView.css';
import ItemCard from './ItemCard';

// class GridView extends React.Component {
//   state = {
//     itemList: null
//   }

//   constructor(props){
//     super(props);
//     console.log("djkandkja",props)
//   }

//   componentDidMount(){
//     const jsxList = this.props.items.map(
//       item => <img alt={item.id} key={item.id} src={item.urls.regular} />
//     )
//     this.setState({ itemList : jsxList});
//     console.log("mdjkandnajlndlam",this.props.items,jsxList,this.state.itemList);
//   }
  
//   render() {
//     return (
//       <div>{this.state.itemList}</div>
//     )
//   }
// }

function GridView(props) {
  const jsxList = props.items.map(
    item => <ItemCard image={item} />
  )
  return <div className='image-list'>{jsxList}</div>
}

export default GridView;