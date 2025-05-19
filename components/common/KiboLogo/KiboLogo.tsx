import { Box } from '@mui/system'
import { StaticImageData } from 'next/image'

import KiboImage from '../KiboImage/KiboImage'

interface KiboLogoProps {
  logo?: string | StaticImageData // URL or File
  alt?: string
  small?: boolean
}

const styles = {
  logoContainer: {
    width: {
      xs: 33,
      md: 78,
    },
    height: {
      xs: 33,
      md: 60,
    },
  },
  smallLogo: {
    width: 40,
    height: 40,
  },
}

const KiboLogo = ({
  logo = 'https://vulcanmaterials.azureedge.net/content-v2/images/default-source/default-album/vulcan-materials-logo.png?sfvrsn=c2926ad1_1',
  alt = 'vulcan-materials-logo',
  small,
}: KiboLogoProps) => {
  return (
    <Box width={'100%'} sx={small ? styles.smallLogo : styles.logoContainer}>
      <KiboImage src={logo} alt={alt} fill loading="eager" />
    </Box>
  )
}

export default KiboLogo
