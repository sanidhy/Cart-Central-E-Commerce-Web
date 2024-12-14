import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json';
export const HomeBanner = () => {
    return (
        <div className="homeBanner">
            <img className='homeBannerimg' src='https://images-eu.ssl-images-amazon.com/images/G/31/OHL_Events/img24/HSS/Dec24/3000x1200_PC2._CB540801550_.jpg' />
            <div className="grayBackgroundHomeBanner"></div>

            <div className="homeBannerItemDiv">

                {
                    homeBannerItemProduct.product.map((item, ind) => {
                        return (
                            <div className="homeBannerItemDivCard">
                                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                <div className="imgHomeBannerItemDivCard">
                                    {
                                        item.imgs.map((it, ind )=> {
                                            return (
                                                <div className="imgBannerHomeDiv">
                                                    <img className='imgBannerHomeDivImg' src={it} />
                                                    <div className="imgBannerImgName">{item.itemTitle}</div>
                                                </div>
                                            );

                                        })
                                    }

                                </div>

                                <div className="seeMoreHomeBanner">See More</div>
                            </div>
                        );
                    })
                }

            </div>

        </div>
    )
}