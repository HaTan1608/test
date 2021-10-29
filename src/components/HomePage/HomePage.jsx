import {useState} from 'react'
import data from '../../data';
import {BsArrowRight} from 'react-icons/bs'
import Card from './Card';
const HomePage =() => {
    const [state] = useState({
        image1: '/assets/main1.PNG',
        image2:"/assets/main2.PNG",
        image3:'/assets/main3.png',
        image5:'/assets/main5.PNG',
        image6:'/assets/main6.PNG',
        image7:'/assets/main7.PNG',
        main5left:'/assets/main5left.PNG',
        item1:'/assets/item1.PNG',
        item2:'/assets/item2.PNG',
        item3:'/assets/item3.PNG',
    })
    return (
        <div className='homepage'>
            <div className='homepage__first'>
                <div className='homepage__first__image'>
                    <img src={state.image1} alt='main1'/>
                </div>
                <div className='row mb-20'>
                    <div className='homepage__first__content'>
                        <h2>Lorem ipsum</h2>
                        <BsArrowRight size={50} />
                        <h2>Market lauching</h2>
                        <BsArrowRight size={50}/>
                        <h2>Lorem ipsum</h2>
                    </div>
                </div>
            </div>
            <div className='homepage__second' style={{backgroundImage: `url("${state.image2}")` }}>
                <div className='container'>
                    <div className='homepage__second__content'>
                        <h1 >
                            WHAT HAPPENED!
                        </h1>
                        <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first step to your brand's success.How to create mobile-optimized videos in minutes</p>
                    </div>
                 </div>  
            </div>
            <div className='homepage__third'>
                <div className='homepage__third__heading'>
                    <h1>Best product</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first</p>
                </div>
                <div className='homepage__third__content' style={{backgroundImage:`url("${state.image3}")`,backgroundRepeat:'repeat'}}>
                    <div className='homepage__third__content__items row'>
                        <div className='homepage__third__content__items__item'>
                            <div className='homepage__third__content__items__item__count'>
                                01
                            </div>
                            <img src={state.item1} alt='image1'/>
                            <div className='homepage__third__content__items__item__details'>
                                <p>How to create mobile-optimized</p>
                                <button>GO</button>
                            </div>
                        </div>
                        <div className='homepage__third__content__items__item'>
                            <div className='homepage__third__content__items__item__count'>
                                02
                            </div>
                            <img src={state.item2} alt='image1'/>
                            <div className='homepage__third__content__items__item__details'>
                                <p>How to create mobile-optimized</p>
                                <button>GO</button>
                            </div>
                        </div>
                        <div className='homepage__third__content__items__item'>
                            <div className='homepage__third__content__items__item__count'>
                                03
                            </div>
                            <img src={state.item3} alt='image1'/>
                            <div className='homepage__third__content__items__item__details'>
                                <p>How to create mobile-optimized</p>
                                <button>GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homepage__four'>
                <div className='container'>
                    <div className="row">
                        {data && data.products.map((product,index)=>(
                            ( index<25 &&<Card item={product}/> )
                        ))}
                    </div>
                    <div className="homepage__four__button">
                        <button >See more</button>
                    </div>
                </div>
            </div>
            <div className='homepage__five'  style={{backgroundImage: `url("${state.image5}")` }}>
                <div className='container'>
                    <div className='homepage__five__heading'>
                        <h1>Brand story</h1>
                        <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first</p>
                    </div>
                    <div className='homepage__five__content row'>
                        <div className='homepage__five__content__left'  style={{backgroundImage: `url("${state.main5left}")` }}>
                            <h2>Collaboration</h2>
                        </div>
                        <div className='homepage__five__content__right'>
                            <h2>What happend's brand story</h2>
                            <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the firstHow to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first</p>
                            <button>See more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homepage__six'>
                <div className='homepage__six__image'>
                    <img src={state.image6} alt='image6'/>
                </div>
                <div className='homepage__six__heading'>
                    <h1>Happened's issue</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first</p>
                    <button>See more</button>
                </div>
            </div>
            <div className='homepage__seven'>
                <div className='homepage__seven__image'>
                    <img src={state.image7} alt='image7'/>
                </div>
                <div className='homepage__seven__heading'>
                    <h1>What Happened</h1>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos. Can be trimmed. Take the first</p>
                    <button>See more</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
