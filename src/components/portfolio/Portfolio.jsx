import { useState } from 'react';
import { Skeleton } from '@mui/material';
import BackToTopButton from '../backtotopbutton/BackToTopButton';
import Navigation from '../navigation/Navigation';
import styles from './portfolio.module.css';

export default function Portfolio() {
  const images = [
    '/portfolio/A-bucket-full-of-tears.jpg',
    '/portfolio/big-tony.jpg',
    '/portfolio/bus.jpg',
    '/portfolio/caat.jpg',
    '/portfolio/Calendar.jpg',
    '/portfolio/carols.jpg',
    '/portfolio/cat.jpg',
    '/portfolio/chair.jpg',
    '/portfolio/cloisonne-bird.jpg',
    '/portfolio/cofagain.jpg',
    '/portfolio/Cold.jpg',
    '/portfolio/dacia.jpg',
    '/portfolio/dm.jpg',
    '/portfolio/evelator.jpg',
    '/portfolio/field.jpg',
    '/portfolio/garden2.jpg',
    '/portfolio/granny.jpg',
    '/portfolio/housecat1.jpg',
    '/portfolio/img202.jpg',
    '/portfolio/img353.jpg',
    '/portfolio/jazz.jpg',
    '/portfolio/leave.jpg',
    '/portfolio/letter.jpg',
    '/portfolio/lunatic.jpg',
    '/portfolio/Milk.jpg',
    '/portfolio/Mr-cover.jpg',
    '/portfolio/museum.jpg',
    '/portfolio/news.jpg',
    '/portfolio/nurse.jpg',
    '/portfolio/ny.jpg',
    '/portfolio/Photo-19.01.2024,-20-19-06-(1).jpg',
    '/portfolio/Photo-19.01.2024,-20-19-06-(2).jpg',
    '/portfolio/Photo-19.01.2024,-20-19-06-(6).jpg',
    '/portfolio/Photo-19.01.2024,-20-19-06-(8).jpg',
    '/portfolio/Photo-19.01.2024,-20-19-06.jpg',
    '/portfolio/Photo-19.01.jpg',
    '/portfolio/pigeon.jpg',
    '/portfolio/queen.jpg',
    '/portfolio/santa.jpg',
    '/portfolio/staircase_smaLL.jpg',
    '/portfolio/store.jpg',
    '/portfolio/tea.jpg',
    '/portfolio/teke.jpg',
    '/portfolio/tekenuurtje-.jpg',
    '/portfolio/Thank-you4q.jpg',
    '/portfolio/Theimaginedbookcover.jpg',
    '/portfolio/Theimaginedbookcover2.jpg',
    '/portfolio/THe-king-illustrationdark.jpg',
    '/portfolio/train.jpg',
    '/portfolio/tree-(2).jpg',
    '/portfolio/vintagestore.jpg',
  ];

  return (
    <div>
      <Navigation />
      <div className={styles.galleryContainer}>
        <div className={styles.galeriePoze}>
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
            />
          ))}
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}

function Image(props) {
  const { src } = props;
  const [isLoading, setIsLoading] = useState(true);
  const handleOnLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className={styles.image}>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width={200}
          height={150}
        />
      )}
      <img
        src={src}
        alt=""
        onLoad={handleOnLoad}
      />
    </div>
  );
}
