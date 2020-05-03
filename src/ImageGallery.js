import React from 'react';
import SearchBar from './SearchBar';
import unsplashApiClient from './api/unsplashApiClient';
import GridView from './GridView';

class ImageGallery extends React.Component{

  state = { imageList : [] };

  handelSearchSubmit = async (searchText) => {
    // make the api call to splash to get the images
    const imageList = await unsplashApiClient.get('/search/photos', {
      params : { query : searchText }
    });
    this.setState({ imageList: imageList.data.results });
  }

  render(){
    return (
      <div className='ui container' style={{ marginTop : '10px'}}>
        <SearchBar onSubmit={ this.handelSearchSubmit }/>
        <GridView items={this.state.imageList} />
      </div>
    )
  }
}

export default ImageGallery;