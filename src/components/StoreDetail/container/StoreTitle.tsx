import styled from 'styled-components';
import Slider from 'react-slick';
import TitleScrap from '../components/TitleScrap';
import { useGetStoreById } from '../../../api/storeApi';

type Props = {
  storeId: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .title-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .title-btns {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 10px;
    }
  }

  .share-btn {
    background-color: #ffffff;
    pointer: cursor;
  }

  .title-img {
    align-self: center;
    width: 100%;
    height: 400px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  .slick-slider {
    width: 100%;
    position: relative;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
  }
`;

const StoreTitle = ({ storeId }: Props) => {
  const { data: store, isLoading, isError } = useGetStoreById(storeId);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  const settings = {
    dots: true,
  };

  return (
    <Container>
      <div className="title-head">
        <p className="title">{store.title}</p>
        <div className="title-btns">
          <TitleScrap storeId={storeId!} />
          <button className="share-btn">
            <img src="/images/share.svg" alt="" />
          </button>
        </div>
      </div>
      <Slider {...settings}>
        {store.images.map((image: string, i: number) => (
          <img className="title-img" key={i} src={image} alt="브랜드이미지" />
        ))}
      </Slider>
    </Container>
  );
};

export default StoreTitle;
