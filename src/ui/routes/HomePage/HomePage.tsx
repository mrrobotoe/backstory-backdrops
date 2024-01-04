import ourStoryPhoto from '../../../assets/our-story-photo.webp';
import { useBlazeSlider } from '../../../lib/hooks/useBlazeSlider';
import photoOne from '../../../assets/ef76dc_315acd3bfa8d44cabf85df0ad1f1ffa8~mv2.webp';
import photoTwo from '../../../assets/ef76dc_a144cb5ee64f4c90b94d49a5a3e9284f~mv2.webp';
import photoThree from '../../../assets/ef76dc_aea1a2d44d0442b2aa487815ed8f2442~mv2.webp';
import photoFour from '../../../assets/ef76dc_cfc0730c0872414c824388314a810dd5~mv2.webp';

export const HomePage = () => {
  const elRef = useBlazeSlider({
    all: {
      enableAutoplay: true,
      slidesToShow: 3,
      autoplayInterval: 3500,
    },
    'only screen and (max-width: 600px)': {
      slidesToShow: 1,
    },
  });

  return (
    <div className='homepage-container'>
      <header className='hero'>
        <div className='heading-container'>
          <h1>Backstory Backdrops</h1>
        </div>
      </header>
      <section className='carousel-container'>
        <div className='blaze-slider' ref={elRef}>
          <div className='blaze-container'>
            <div className='blaze-track-container'>
              <div className='blaze-track'>
                <div className='photo-container'>
                  <img
                    src={photoOne}
                    alt='photo of backdrops'
                  />
                  <p>Weddings</p>
                </div>
                <div className='photo-container'>
                  <img
                    src={photoTwo}
                    alt='photo of backdrops'
                  />
                  <p>Birthdays</p>
                </div>
                <div className='photo-container'>
                  <img
                    src={photoThree}
                    alt='photo of backdrops'
                  />
                  <p>Showers</p>
                </div>
                <div className='photo-container'>
                  <img
                    src={photoFour}
                    alt='photo of backdrops'
                  />
                  <p>Corporate</p>
                </div>
              </div>
            </div>
            <div className='pagination-container'>
              <button
                className='blaze-prev'
                aria-label='Go to previous slide'
              ><i className="fa-duotone fa-arrow-left"></i></button>
              <div className='blaze-pagination'></div>
              <button
                className='blaze-next'
                aria-label='Go to next slide'
              ><i className="fa-duotone fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      <section className='about-container'>
        <section>
          <div className='our-story-container'>
            <h1>Our Story</h1>
            <p>
              It all started with a boxwood backdrop and the ultimate VIP lounge
              for the birthday party of our music loving 5 year old. Since then,
              we have been telling our client's stories through our artfully
              designed backdrops, displays, and installations.
            </p>
          </div>
          <img alt='family photo' src={ourStoryPhoto} />
        </section>
      </section>
    </div>
  );
};
