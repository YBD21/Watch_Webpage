import React from "react";
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
  const colorOptions = props.data.colorOptions.map((item,pos)=>{
    const classArr =[classes.ProductImage]
     if (pos === props.currentPreviewImagepos){
      classArr.push(classes.SelectedProductImage);
     }

    return(
    <img key={pos} className ={classArr.join(" ")} src={item.imageUrl} alt ={item.styleName} onClick = {() =>props.onColorOptionClick(pos)}/>
    );
  } )
 const FeatureList = props.data.featureList.map((item,pos) =>{
   const classArr =[classes.FeatureItems] ;

  //  if (pos ===1 && props.showHeartBeat) {
  //   classArr.push(classes.SelectedFeatureItems);
  //  } else if(pos ===0 && !props.showHeartBeat) {
  //   classArr.push(classes.SelectedFeatureItems);
  //  }
 if(pos === props.currentSelectedFeature){
  classArr.push(classes.SelectedFeatureItems);
 }

  return (
    <button onClick ={() => props.onFeatureItemClick(pos) } key ={pos} className ={classArr.join(" ")}>{item}</button>
  )
 })

return(
<div className ={classes.ProductData}> 
<h1 className={classes.ProductTitle}> {props.data.title} </h1>
 <p className={classes.ProductDescription}> {props.data.description} </p> 
<h3 className={classes.SectionHeading}> Select Color </h3>
<div>
{colorOptions}

{/* <img className ={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src ={"https://imgur.com/iOeUBV7.png"}  alt="Black Colored Strap"  />
<img className ={classes.ProductImage} src ={"https://imgur.com/PTgQlim.png"}  alt="Red Colored Strap"  />
<img className ={classes.ProductImage} src ={"https://imgur.com/Mplj1YR.png"}  alt="Blue Colored Strap"  />
<img className ={classes.ProductImage} src ={"https://imgur.com/xSIK4M8.png"}  alt="Purple Colored Strap"  /> */}

</div>

<h3 className ={classes.SectionHeading} >Features</h3>
<div> 
{FeatureList}
   </div>
   <button className={classes.PrimaryButton}> Buy Now </button>

</div>
)
}


export default ProductDetail;