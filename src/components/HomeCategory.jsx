import { Text, } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { HomeItem } from './HomeItem'
import { useImages } from '../hooks'
const HomeCategory = ({category, cant}) => {
  const { images, isLoading } = useImages(category,cant);
  return (
      <>
        {
        isLoading && <Text style={globalStyles.loadingText}>Loading...</Text>
        }
        {
          images.map(img => (
            <HomeItem
              key={img.id}
              url={img.url}
              title={category}
            />
          ))
        }
      </>
    )
}

export default HomeCategory