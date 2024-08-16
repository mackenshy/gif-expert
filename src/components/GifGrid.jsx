import PropTypes from 'prop-types'
import { GifGridItem } from "./"
import { useFetchGifs } from "../hooks/useFetchGifs"

export function GifGrid({ category }) {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && (<h2>Loading...</h2>)}
            <div className="card-grid">
                {
                    images.map( gif => (
                        <GifGridItem 
                            key={gif.id} 
                            { ...gif }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
