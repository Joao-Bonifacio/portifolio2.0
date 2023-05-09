import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/swiper-bundle.css"
import Image from "next/image"

SwiperCore.use([Autoplay])

export default function Galery() {
    const images = [
        "/images/calcOB/cover.jpg.png",
        "/images/hangMan/cover.jpg",
        "/images/hangMan/secondary.jpg",
        "/images/jokenpo/cover.jpg",
        "/images/jokenpo/secondary.jpg",
        "/images/linkedin/html.png",
        "/images/linkedin/css.png",
        "/images/movieDB/cover.jpg",
        "/images/movieDB/secondary.jpg",
        "/images/newsLetter/cover.jpg",
        "/images/newsLetter/more.jpg",
        "/images/newsLetter/news.jpg",
        "/images/newsLetter/search.jpg",
        "/images/pokedex/cover.jpg",
        "/images/pokedex/secondary.jpg",
        "/images/tradeBallance/cover.jpg",
        "/images/tradeBallance/edit.jpg",
        "/images/tradeBallance/storage.jpg",
        "/images/upStep/upStep-cover.jpg",
        "/images/upStep/upStep-DB.jpg",
        "/images/upStep/upStep-login.jpg",
        "/images/upStep/upStep-signup.jpg",
        "/images/upStep/upStep-soldier.jpg"
    ]
    return (
        <Swiper spaceBetween={1} centeredSlides={true} autoplay={{ delay: 3000 }}>
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image src={image} width={460} height={280} alt={`Slide ${index}`} className="rounded-md"/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}