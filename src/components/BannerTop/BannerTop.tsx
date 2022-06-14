import React from 'react';

// components
import Box from '../Box/Box';
import Container from '../Container/Container';

// images
import EndlessLogo from '../../assets/logo-endless.svg';

const BannerTop: React.FC = () => (
    <Box
        backgroundColor='#242424'
        padding='16px 0 10px'
        position='fixed'
        top='0'
        width='100vw'
    >
        <Container>
            <img
                alt='logo'
                src={EndlessLogo}
                height='20px'
                width='auto'
            />
        </Container>
    </Box>
);

export default BannerTop;