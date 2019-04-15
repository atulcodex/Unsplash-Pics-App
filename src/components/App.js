import React from 'react';
import Unsplash from '../Api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = { images: [] }; //we are putting squar breakets because our data or images are commming in array format

        onSearchSubmit = async (term) => {
            const response = await Unsplash.get("/search/photos", {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render(){
        return (
          <div>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
          </div>
        );
    }
}

export default App;