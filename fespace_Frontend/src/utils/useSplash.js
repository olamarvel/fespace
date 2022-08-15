import  { useEffect, useState } from 'react';
import { unSplash } from './unsplash';

const useSplash = () => {
    const [images, setImages] = useState(null)

    useEffect(() => {
      unSplash.then((Images) => {
        setImages(Images)
      })
    }, [])
    return images
}

export default useSplash;
