import './FeaturedBlock.scss'
import Post from "../Post/Post";
import mock from '../../mock/bigPosts'
import Slider from "react-slick";

const FeaturedBlock = () => {
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className={'FeaturedBlockRoot'}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className={'FBHeader'}>
                <div className={'FBTitle'}>Featured Stories</div>
                <div className={'FBSubTitle'}>Did you read our personal favorites?</div>
            </div>
            <div className='cardSmallSet'>
                <Slider {...settings}>
                    {mock
                        .map((item) => {
                            return(
                                <Post variant='small' data={item} key={item.id} />
                            )
                        })}
                </Slider>
            </div>
            <div className={'FBLinkBlock'}>Want to read all of our stories?<a className={'FBLink'} href=''>Read the full blog</a></div>
        </div>
    )
}

export default FeaturedBlock;