import { CardBody, CardHeader } from "@chakra-ui/card";
import { Button, ButtonGroup, Flex, Heading, Spacer, Link as ChakraLink, Checkbox } from "@chakra-ui/react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import MyInput from "../../common/form/MyInput";
import ContentCard from "../../common/shared/ContentCard";
import * as Yup from 'yup';
import { UserRegisterValues } from "../../models/User";
import { useState } from "react";


export default function RegisterForm() {

    const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

    const initialValues: UserRegisterValues = {
        email: "",
        login: "",
        password: "",
        apartmentNumber: "",
        city: "",
        houseNumber: "",
        pesel: 0,
        phoneNumber: 0,
        postCode: "",
        street: "",
    }

    return (
        <>
            <ContentCard>
                <CardHeader>
                    <Heading>
                        Register
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values => alert(values))}
                        validationSchema={Yup.object({
                            login: Yup.string().required(),
                            password: Yup.string().required(),
                            email: Yup.string().required().email(),
                            apartmentNumber: Yup.string().required(),
                            city: Yup.string().required(),
                            houseNumber: Yup.string().required(),
                            postCode: Yup.string().required(),
                            street: Yup.string().required(),
                            pesel: Yup.number().required(),
                            phoneNumber: Yup.number().required(),
                        })}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <MyInput
                                    label="Email"
                                    name="email"
                                    errors={errors.email}
                                    touched={touched.email}
                                    type="email"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="Login"
                                    name="login"
                                    errors={errors.login}
                                    touched={touched.login}
                                    type="text"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="Password"
                                    name="password"
                                    errors={errors.password}
                                    touched={touched.password}
                                    type="password"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="Pesel"
                                    name="pesel"
                                    errors={errors.pesel}
                                    touched={touched.pesel}
                                    type="number"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="PhoneNumber"
                                    name="phoneNumber"
                                    errors={errors.password}
                                    touched={touched.password}
                                    type="number"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="ApartmentNumber"
                                    name="apartmentNumber"
                                    errors={errors.apartmentNumber}
                                    touched={touched.apartmentNumber}
                                    type="text"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="HouseNumber"
                                    name="houseNumber"
                                    errors={errors.apartmentNumber}
                                    touched={touched.apartmentNumber}
                                    type="text"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="PostCode"
                                    name="postCode"
                                    errors={errors.password}
                                    touched={touched.password}
                                    type="text"
                                    isRequired={true}
                                />
                                <MyInput
                                    label="City"
                                    name="city"
                                    errors={errors.password}
                                    touched={touched.password}
                                    type="city"
                                    isRequired={true}
                                />
                                <Checkbox
                                    p='2'
                                    pl='1'
                                    onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                                >
                                    Accept privacy policy
                                </Checkbox>
                                <Flex pt='2'>
                                    <ButtonGroup colorScheme='teal'>
                                        <Button type='submit' disabled={!isPrivacyAccepted}>
                                            Register
                                        </Button>
                                        <Button as={Link} to='/'>
                                            Back
                                        </Button>
                                    </ButtonGroup>
                                    <Spacer />
                                    <ChakraLink color='blue.500' as={Link} to='/login'>
                                        Already have an account?
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