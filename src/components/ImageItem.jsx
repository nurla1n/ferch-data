import React from 'react'

function ImageItem({element}) {
  return (
   <>
    <div>
        <img src={element.urls.small} alt={element.urls.description} />
    </div>
   </>
  )
}

export default ImageItem