import Logo_Borntodev from "../../assets/logo/Logo_Borntodev.webp"
import Logo_Sun from "../../assets/logo/Logo_Sun.jpg"

const CardGallery = () => {

    return (
        <>
            <div style={{ width: '60vw', height: '256px' }}>
                <CarouselGallery banners={[Logo_Borntodev, Logo_Sun]}/>
            </div>
        </>
    )
};
export default CardGallery;