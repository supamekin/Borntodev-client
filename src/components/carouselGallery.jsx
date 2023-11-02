import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const CarouselGallery = ({ banners, bdRadius }) => {
  const arrowStyles= {
    position: "absolute",
    zIndex: 9,
    top: "calc(50% - 15px)",
    width: 32,
    height: 32,
    cursor: "pointer",
    padding: 0
  };

  const indicatorStyles= {
    background: "#fff",
    height: 8,
    borderRadius: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 10,
                  border: "0px",
                  backgroundColor: "transparent",
                  width: "32px",
                  height: "32px",
                }}
              >
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="#1E1E1E"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M19.4901 8.99545C19.3603 8.99923 19.237 9.0534 19.1464 9.14649L12.6464 15.6465C12.5527 15.7403 12.5 15.8674 12.5 16C12.5 16.1326 12.5527 16.2597 12.6464 16.3535L19.1464 22.8535C19.1925 22.9015 19.2476 22.9398 19.3087 22.9662C19.3698 22.9926 19.4355 23.0065 19.502 23.0072C19.5685 23.0079 19.6345 22.9953 19.6961 22.9701C19.7577 22.945 19.8136 22.9078 19.8607 22.8608C19.9077 22.8137 19.9449 22.7578 19.97 22.6962C19.9952 22.6346 20.0078 22.5686 20.0071 22.5021C20.0064 22.4356 19.9925 22.3699 19.9661 22.3088C19.9397 22.2477 19.9014 22.1926 19.8534 22.1465L13.7069 16L19.8534 9.85352C19.9256 9.78327 19.9748 9.69288 19.9947 9.59417C20.0146 9.49547 20.0043 9.39306 19.965 9.30034C19.9258 9.20761 19.8594 9.1289 19.7747 9.0745C19.69 9.0201 19.5908 8.99255 19.4901 8.99545Z"
                    fill="white"
                  />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 10,
                  border: "0px",
                  backgroundColor: "transparent",
                  width: "32px",
                  height: "32px",
                }}
              >
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="#1E1E1E"
                    fillOpacity="0.4"
                  />
                  <path
                    d="M14.1617 8.99475C14.0622 8.99478 13.965 9.02449 13.8824 9.08008C13.7999 9.13568 13.7358 9.21464 13.6984 9.30685C13.661 9.39906 13.652 9.50033 13.6725 9.59771C13.693 9.69509 13.742 9.78414 13.8134 9.85347L19.9599 16L13.8134 22.1464C13.7654 22.1925 13.7271 22.2477 13.7007 22.3088C13.6743 22.3698 13.6604 22.4355 13.6597 22.5021C13.659 22.5686 13.6716 22.6346 13.6968 22.6962C13.7219 22.7577 13.7591 22.8137 13.8061 22.8607C13.8532 22.9078 13.9091 22.945 13.9707 22.9701C14.0323 22.9952 14.0983 23.0078 14.1648 23.0072C14.2313 23.0065 14.297 22.9926 14.3581 22.9662C14.4192 22.9398 14.4743 22.9015 14.5204 22.8535L21.0204 16.3535C21.1142 16.2597 21.1668 16.1325 21.1668 16C21.1668 15.8674 21.1142 15.7402 21.0204 15.6464L14.5204 9.14644C14.4738 9.09845 14.4181 9.06029 14.3564 9.03424C14.2948 9.00818 14.2286 8.99475 14.1617 8.99475Z"
                    fill="white"
                  />
                </svg>
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{
                    ...indicatorStyles,
                    background: "#3750A1",
                    width: isSelected ? 20 : 8,
                  }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                style={{ ...indicatorStyles, width: isSelected ? 20 : 8 }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {banners &&
            banners?.length > 0 &&
            banners?.map((item, key) => {
              return (
                <div key={key} style={{ width: '100%'}}>
                  <img
                    style={{
                      width: "100%",
                      height: "256px",
                      maxHeight: '256px',
                    //   objectFit: '',
                      borderRadius: bdRadius ?? 8,
                    }}
                    src={item ?? BannerImage}
                    alt={""}
                    // onError={() => 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                  />

                  <div></div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselGallery;
