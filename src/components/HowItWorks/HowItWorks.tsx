import React, { useEffect, useState } from 'react';

// components
import Box from '../Box/Box';
import Text from '../Text/Text';
import Container from '../Container/Container';

const HowItWorks: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then((response: any) => { 
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                data.sort((a: any, b: any) => a.stepNumber - b.stepNumber);
                const sortedData = data.map((step: any) => {
                    return step.versionContent.sort((first: any, second: any) => {
                        const firstDate: any = Date.parse(first.effectiveDate);
                        const secondDate: any = Date.parse(second.effectiveDate);
                        return secondDate - firstDate;
                    })[0];
                })
                setData(sortedData)
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`)
            })
    }, [])

    if (data?.length < 1) {
        return null;
    }
    
    return (
        <Box
        >
            <Container>
                <Box padding='40px 0'>
                <Text
                    align='center'
                    color='darkGray'
                    font='latoLight'
                    size='32px'
                >
                    How It Works
                </Text>
                <Box
                    margin='0 0 80px'
                    display='flex'
                    justify='center'
                    wrap='wrap'
                >
                    {data.map((step: any, index) => (
                        <Box maxWidth='260px' margin='24px 15px 0'>
                            <Text
                                align='center'
                                color='darkGray'
                                font='lato'
                                size='58px'
                            >
                                {`0${index + 1}`}
                            </Text>
                            <Box
                                width='64px'
                                height='4px'
                                backgroundColor='#50e3c2'
                                margin='16px auto 24px'
                            />
                            <Text
                                align='center'
                                color='darkGray'
                                font='lato'
                                size='18px'
                            >
                                {step.title.toUpperCase()}
                            </Text>
                            <Box margin='16px 0 0' maxWidth='240px'>
                            <Text
                                align='center'
                                color='darkGray'
                                font='lato'
                                size='16px'
                                lineHeight='24px'
                            >
                                {step.body}
                            </Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default HowItWorks;