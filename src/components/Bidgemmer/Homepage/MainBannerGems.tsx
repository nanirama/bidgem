import React, {useEffect, useState} from 'react';
import ReactWOW from 'react-wow';
import gem1 from '../../../assets/images/bidgemmer/gems/gems-02.svg';
import gem2 from '../../../assets/images/bidgemmer/gems/gems-03.svg';
import gem3 from '../../../assets/images/bidgemmer/gems/gems-04.svg';
import gem4 from '../../../assets/images/bidgemmer/gems/gems-05.svg';

const GEMS_SPEED = [2, 3, -5, 3, 3];

const MainBannerGems = () => {

    const [transformState, setTransformState] = useState<Array<{ x: number, y: number }>>(GEMS_SPEED.map(i => ({
        x: 0,
        y: 0
    })));

    useEffect(() => {
        const setFromEvent = (e: MouseEvent) => {
            setTransformState(GEMS_SPEED.map(speed => {
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                return {x, y};
            }));
        };

        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return (
        <div className='img-gems-container'>
            <ReactWOW delay='.2s' animation='fadeIn'>
                <img src={gem3} loading='lazy' alt='image of a gem'
                     className='img-gems d-none d-xl-block ml-0 ml-md-2 ml-xl-5 mt-0 mt-md-2'
                     style={{
                         left: '10rem',
                         top: '10rem',
                         width: 150,
                         transform: `translate(${transformState[0].x}px,${transformState[0].y}px)`
                     }}/>
            </ReactWOW>
            <ReactWOW delay='.25s' animation='fadeIn'>
                <img src={gem1} loading='lazy' alt='image of a gem'
                     className='img-gems gem1 mr-0 mr-md-2 mr-xl-5 mt-4 mt-md-2'
                     style={{
                         transform: `translate(${transformState[1].x}px,${transformState[1].y}px)`
                     }}/>
            </ReactWOW>
            <ReactWOW delay='.3s' animation='fadeIn'>
                <img src={gem4} loading='lazy' alt='image of a gem'
                     className='img-gems d-none d-xl-block ml-0 ml-md-2 ml-xl-5 mt-0 mt-md-2'
                     style={{
                         right: '25%',
                         top: '30rem',
                         width: 100,
                         transform: `translate(${transformState[2].x}px,${transformState[2].y}px) rotate(60deg)`
                     }}/>
            </ReactWOW>
            <ReactWOW delay='.25s' animation='fadeIn'>
                <img src={gem2} loading='lazy' alt='image of a gem'
                     className='img-gems d-none d-xl-block mr-0 mr-md-2 mr-xl-5 mt-4 mt-md-2'
                     style={{
                         left: '20rem',
                         bottom: '20%',
                         width: 100,
                         transform: `translate(${transformState[3].x}px,${transformState[3].y}px)`
                     }}/>
            </ReactWOW>
            <ReactWOW delay='.35s' animation='fadeIn'>
                <img src={gem4} loading='lazy' alt='image of a gem'
                     className='img-gems d-none d-xl-block ml-0 ml-md-2 ml-xl-5 mt-0 mt-md-2'
                     style={{
                         left: '26rem',
                         bottom: '10%',
                         width: 100,
                         transform: `translate(${transformState[4].x}px,${transformState[4].y}px)`
                     }}/>
            </ReactWOW>
        </div>
    )
};

export default MainBannerGems;