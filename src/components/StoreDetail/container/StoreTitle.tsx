import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';

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

  .scrap-btn,
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

const StoreTitle = () => {
  const { storeId } = useParams();
  async function fetchStore() {
    const response = await fetch(`http://34.22.81.36:3000/stores/store/${storeId}`);
    return response.json();
  }
  const { data: store, isLoading, isError } = useQuery(['store'], fetchStore);

  const settings = {
    dots: true,
  };

  if (isError) return <h3>error</h3>;
  if (isLoading) return <h3>Loading...</h3>;
  return (
    <Container>
      <div className="title-head">
        <p className="title">{store.title}</p>
        <div className="title-btns">
          <button className="scrap-btn">
            <img src="/images/scrap.svg" alt="" />
          </button>
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