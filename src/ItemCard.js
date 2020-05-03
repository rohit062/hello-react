import React from 'react';

class ItemCard extends React.Component{
  state = {
    span : 0
  }
  constructor(props){
    super(props);
    this.imageRefs = React.createRef();
  }

  componentDidMount(){
    // console.log("this.imageRefs.current",this.imageRefs.current.clientHeight)
    this.imageRefs.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRefs.current.clientHeight;
    const span = Math.ceil(height/20);
    this.setState({ span });
  }

  render(){
    const { id, urls, description } = this.props.image
    // console.log("sdad", id, urls, description)
    return <div style={{ gridRowEnd : `span ${this.state.span}`}}>
    <img ref={ this.imageRefs } alt={description} src={urls.regular} />
    </div>
  }
}

export default ItemCard;