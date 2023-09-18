import React from 'react'
import ImageItem from './ImageItem'

function ImageList({array}) {
  return (
   <>
   <div className="photos">
   {
        array.map((element,index)=>{
            return <ImageItem element={element} key={index} />
        })
    }
   </div>
   </>
  )
}

export default ImageList