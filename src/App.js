import React,{Component} from 'react';
import classes from'./App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductData from './Utills/ProductData';


class App extends Component {
  state ={
    productData: ProductData,
    // currentPreviewImage :'https://imgur.com/iOeUBV7.png',
    currentPreviewImagepos :0,
    // showHeartBeat : false,
    currentSelectedFeature:0, 
  }
 onColorOptionClick = (pos) =>{
  this.setState({currentPreviewImagepos: pos} );
 }

  // onFeatureItemClick =(pos) =>{
  //   let updatedState =false;
  //   if (pos === 1){
  //     updatedState = true;
  //   }
  //  this.setState({showHeartBeat:updatedState});
  onFeatureItemClick =(pos) =>{
   this.setState({currentSelectedFeature:pos});

  }
  
  //  const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl

  //  this.setState({currentPreviewImage: updatedPreviewImage}

  render () {
    return (
      <div className="App">
        <header className="App-header">
         <nav  className={classes.Topbar} > 
         <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1600,h_900,strp/random_logo_by_criticl_d7eqdvw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"  alt= "Random Logo"/> 
         
         </nav>
        </header>
         <div className = {classes.Maincontroller}> 
           {/* <ProductPreview currentPreviewImage ={this.state.currentPreviewImage} showHeartBeat = {this.state.showHeartBeat}/> */}

           <ProductPreview currentPreviewImage ={this.state.productData.colorOptions[this.state.currentPreviewImagepos].imageUrl} currentSelectedFeature = {this.state.currentSelectedFeature}
           />
     
           <ProductDetail data = {this.state.productData} onColorOptionClick ={this.onColorOptionClick}
           currentPreviewImagepos ={this.state.currentPreviewImagepos} onFeatureItemClick={this.onFeatureItemClick}  currentSelectedFeature = {this.state.currentSelectedFeature}/>
             
         </div>
  
      </div>
    );
  }
  }
  

export default App;
