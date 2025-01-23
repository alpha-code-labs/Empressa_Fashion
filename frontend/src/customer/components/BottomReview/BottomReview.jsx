import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import GradeIcon from '@mui/icons-material/Grade';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    // 1
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px] " data-value="1">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <div className='w-full md:w-1/3 px-3 md:mb-0'>
            <div className="flex justify-center items-center p-4 ">
                <p className="p-2 px-4 group"  >
                    Gorgeous dress!
                </p>
            </div>
            {/* <p className='font-text text-center text-lg  text-black mt-[30px] underline  '>
                Gorgeous dress!
            </p> */}
            <p className='font-text text-center text-base  text-gray-800'>
                The Kyra Midi is just beautiful and looks great layered & with boots as we change seasons. I love the volume of the fabric, especially the gathering at the back, and the length of the dress.
            </p>
            <p className='font-text text-center text-lg  text-black mt-[30px] '>
                Anjali, Lucknow
            </p>
        </div>

    </div>,
    //2
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px]  border border-gray-200 rounded m-[10px]" data-value="2">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <div className='w-full md:w-1/3 px-3 md:mb-0'>
            <div className="flex justify-center items-center p-4 ">
                <p className="p-2 px-4 group"  >
                    I love my dress
                </p>
            </div>
            {/* <p className='font-text text-center text-lg  text-black mt-[30px] underline '>
                I love my dress
            </p> */}
            <p className='font-text text-center text-base  text-gray-800'>
                It is beautifully made, it looks fabulous and I feel good knowing that my Daughters of India dress in an investment in slow fashion, empowering women and a community in there artisan crafts .
            </p>
            <p className='font-text text-center text-lg  text-black mt-[30px] '>
                Kanhaiya, Sandila
            </p>
        </div>

    </div>,
    //3
    <div className="item hover:shadow-2xl  mt-[100px] mb-[50px] border border-gray-200 rounded m-[10px]" data-value="3">
        <div className='text-center pt-[30px]'>
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
        </div>
        <div className='w-full md:w-1/3 px-3 md:mb-0'>
            <div className="flex justify-center items-center p-4 ">
                <p className="p-2 px-4 group"  >
                    The most beautiful piece of clothing I own.
                </p>
            </div>
            {/* <p className='font-text text-center text-lg  text-black mt-[30px] underline '>
                The most beautiful piece of clothing I own
            </p> */}
            <p className='font-text text-center text-base  text-gray-800'>
                MY GOODNESS. This dress is worth every single penny. I have never felt more beautiful and feminine in my life. It is so lightweight, flowy, and just down right stunning. Also the color is so sweet and romantic.
            </p>
            <p className='font-text text-center text-lg  text-black mt-[30px] '>
                Parul , Bihar
            </p>
        </div>

    </div>
];

const BottomReview = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        infinite
    />
);
// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import GradeIcon from '@mui/icons-material/Grade';
// const items = [

//     <div className="item bg-[#f9f9f9]" data-value="1">

//         <div className="text-center ">
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />
//             <GradeIcon />

//         </div>
//         <p>The most beautiful piece of clothing I own</p>
//     </div>,


// ];

// const BottomReview = () => (

//     <AliceCarousel
//         mouseTracking
//         items={items}
//         autoPlay
//         autoPlayInterval={5000}
//         infinite
//     />
// );

export default BottomReview;
