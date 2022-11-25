import { Card } from "@chakra-ui/card";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Center, Container, IconButton, useColorMode } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Link, useNavigate } from "react-router-dom";
import { history } from "../../../index";


const ContentCard = ({ children }: PropsWithChildren) => {
    const { colorMode } = useColorMode();
    const navigation = useNavigate();

    return (
        <Center>
            <Card
                width='35vw'
                position='relative'
                p='5' m='3'
                borderRadius='1rem'
                bgColor={colorMode === 'light' ? 'whiteAlpha.500' : 'blackAlpha.500'}
            >
                <IconButton
                    aria-label="back-button"
                    size='xs' position='absolute'
                    top='0' right='0'
                    icon={<ArrowBackIcon />}
                    onClick={() => navigation(-1)}
                    borderRadius='0'
                    borderTopRightRadius='1rem'
                    borderBottomLeftRadius='0.5rem'
                />
                {children}
            </Card>
        </Center>
    )
}

export default ContentCard;