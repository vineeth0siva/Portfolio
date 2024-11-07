import { useLocation, useParams } from 'react-router-dom';

const CarosalMapping = () => {
    const imagedata = [{
    id: 1,
    image1: `${process.env.PUBLIC_URL}/img/portfolio/image_019.jpg`,
    image2: `${process.env.PUBLIC_URL}/img/portfolio/image_020.jpg`,
    image3: `${process.env.PUBLIC_URL}/img/portfolio/image_021.jpg`,
    image4: `${process.env.PUBLIC_URL}/img/portfolio/image_022.jpg`,
    image5: `${process.env.PUBLIC_URL}/img/portfolio/image_023.jpg`,
    image6: `${process.env.PUBLIC_URL}/img/portfolio/image_024.jpg`,
    image7: `${process.env.PUBLIC_URL}/img/portfolio/image_025.jpg`,
    image8: `${process.env.PUBLIC_URL}/img/portfolio/image_026.jpg`
},
{
    id: 2,
    image1: `${process.env.PUBLIC_URL}/img/portfolio/Drawing_1.jpeg`,
    image2: `${process.env.PUBLIC_URL}/img/portfolio/Drawing_2.jpeg`,
    image3: `${process.env.PUBLIC_URL}/img/portfolio/Drawing_3.jpeg`,
    image4: `${process.env.PUBLIC_URL}/img/portfolio/Drawing_4.jpeg`,
},
]
const [images, setimages] = useState([]);
  const location = useLocation();
  const { id } = useParams();
  const cardData = location.state?.cardData;

  // Now you can use cardData which contains all the information from the card
  console.log('Received card data:', cardData);

  return (
    // Your CarosalMapping component JSX
    <div>
      <h1>{cardData?.title}</h1>
      <img src={cardData?.frontImage} alt={cardData?.title} />
      {/* Add more elements using the cardData */}
    </div>
  );
};

export default CarosalMapping;
