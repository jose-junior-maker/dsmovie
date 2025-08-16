import StarFull from '../../assets/img/star-full.svg?react';
import StarHalf from '../../assets/img/star-half.svg?react';
import StarEmpty from '../../assets/img/star-empty.svg?react';
import './styles.css'

export default function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}