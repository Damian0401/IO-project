import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Center } from "@chakra-ui/react";


export default function NotFound() {

    return (
        <>
            <Center h='100vh' p={4}>
                <Alert w='auto' status='error' p='2' borderRadius='0.5rem'>
                    <AlertIcon />
                    <AlertTitle>Not found!</AlertTitle>
                    <AlertDescription>We are so sorry, but we can't find what you are looking for.</AlertDescription>
                </Alert>
            </Center>
        </>
    )
}