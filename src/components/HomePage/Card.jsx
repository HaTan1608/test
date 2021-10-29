import data from '../../data';
import {Link} from 'react-router-dom';
import {AiFillHeart } from 'react-icons/ai';
const Card =({item}) => {
   
    return (
        
                        <div className='homepage__four__item'>
                            <div className='homepage__four__item__image'>
                            <Link to='#'><img src={item.image} alt={item.image}/></Link>
                            </div>
                            <div className='homepage__four__item__details'>
                            <h2>
                                <Link to='#'>{item.name}</Link>
                                
                            </h2>
                            <div className='homepage__four__item__details__end'>
                                <span>{item.price} won</span>
                                <div>
                                    <AiFillHeart size={20} color='FA7D22'/>
                                    &nbsp; {item.liked}
                                </div>
                            </div>
                            </div>
                        </div>
                       
    )
}

export default Card
