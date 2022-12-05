import { CardBody, CardHeader } from "@chakra-ui/card";
import { Button, ButtonGroup, Flex, Heading, Spacer, Link as ChakraLink } from "@chakra-ui/react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import MyInput from "../../app/common/form/MyInput";
import ContentCard from "../../app/common/shared/ContentCard";
import * as Yup from 'yup';
import { UserLoginValues } from "../../app/models/User";


export default function LoginForm() {

    const initialValues: UserLoginValues = {
        login: "",
        password: "",
    }

    return (
        <>
            <ContentCard>
                <CardHeader>
                    <Heading>
                        Login
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values => alert(values))}
                        validationSchema={Yup.object({
                            login: Yup.string().required(),
                            password: Yup.string().required()
                        })}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <MyInput
                                    label="Login"
                                    name="login"
                                    errors={errors.login}
                                    touched={touched.login}
                                    type="text"
                                />
                                <MyInput
                                    label="Password"
                                    name="password"
                                    errors={errors.password}
                                    touched={touched.password}
                                    type="password"
                                />
                                <Flex pt='2'>
                                    <ButtonGroup colorScheme='teal'>
                                        <Button type='submit'>
                                            Login
                                        </Button>
                                        <Button as={Link} to='/'>
                                            Back
                                        </Button>
                                    </ButtonGroup>
                                    <Spacer />
                                    <ChakraLink color='blue.500' as={Link} to='/register'>
                                        Do not have an account yet?
                                    </ChakraLink>
                                </Flex>
                            </form>
                        )}
                    </Formik>
                </CardBody>
            </ContentCard>
        </>
    )
}