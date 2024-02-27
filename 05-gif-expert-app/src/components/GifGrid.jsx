import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className='card-grid'>
                {images.map((imagen) =>
                    <GifGridItem key={imagen.id} {...imagen} />
                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}