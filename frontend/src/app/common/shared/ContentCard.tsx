import { Card } from "@chakra-ui/card";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Center, Container, IconButton, useColorMode } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props {
    backUrl?: string;
}

const ContentCard = ({ children, backUrl }: PropsWithChildren<Props>) => {
    const { colorMode } = useColorMode();

    return (
        <Center>
            <Card
                width='35vw'
                position='relative'
                p='5' m='3'
                borderRadius='1rem'
                bgColor={colorMode === 'light' ? 'whiteAlpha.500' : 'blackAlpha.500'}
            >
                {backUrl && <IconButton
                    aria-label="back-button"
                    size='xs' position='absolute'
                    top='0' right='0'
                    icon={<ArrowBackIcon />}
                    as={Link} to={backUrl}
                    borderRadius='0'
                    borderTopRightRadius='1rem'
                    borderBottomLeftRadius='0.5rem'
                />}
                {children}
            </Card>
        </Center>
    )
}

export default ContentCard;