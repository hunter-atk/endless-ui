import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { MEDIA_QUERY_SMALL_SCREEN, MEDIA_QUERY_LARGE_SCREEN } from '../../common/mediaQueries';

// components
import Button from '../Button/Button';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Container from '../Container/Container';

// images
import HeroBackground from '../../assets/photo-couch.jpg';
import HeroBackgroundLarge from '../../assets/photo-couch_2x.jpg';

const Hero: React.FC = () => {
    const isSmallScreen = useMediaQuery({
        query: MEDIA_QUERY_SMALL_SCREEN,
    })

    const isLargeScreen = useMediaQuery({
        query: MEDIA_QUERY_LARGE_SCREEN,
    })
    
    return (
        <Box
            height='100vh'
            width='100vw'
            padding='14px 0 12px'
            backgroundAttachment='fixed'
            backgroundSize='cover'
            backgroundPosition='center top'
            backgroundImage={isLargeScreen
                ? HeroBackgroundLarge
                : HeroBackground
            }
        >
            <Container>
                <Box
                    display='flex'
                    align='flex-end'
                    justify='flex-start'
                    height='calc(100vh - 100px)'
                >
                    <Box>
                    <Text
                        color='white'
                        font='lato'
                        size='24px'
                    >
                        New Games &amp; Accessories
                    </Text>
                    <Box maxWidth='700px' margin='16px 0 32px'>
                    <Text
                        color='white'
                        font='latoLight'
                        size={isSmallScreen ? '36px' : '55px'}
                    >
                        Monthly packages. Excitement delivered daily.
                    </Text>
                    </Box>
                    <Box maxWidth='500px' margin='0 0 32px'>
                    <Text
                        color='white'
                        font='lato'
                        size='20px'
                        lineHeight='27px'
                    >
                        What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.
                    </Text>
                    </Box>
                    <Button>
                        Get Started
                    </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default Hero;