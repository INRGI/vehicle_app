import { ErrorMessage, Formik, Form } from "formik";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Button, Container, Input, InputContainer, Text, Title } from "./Forma.styled";
import { nanoid } from "nanoid";
import Error from '../Error/Error';

const initialValues = {
    name: "",
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const Forma = () => {
    const nameId = nanoid();

    const handleSubmit = (values, actions) => {

        toast.success('Your request sended', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        actions.resetForm();
    };

    return (
        <>
            <Formik
                initialValues={initialValues} 
                onSubmit={handleSubmit} 
                validationSchema={FeedbackSchema} 
                validateOnBlur={false}
                validateOnChange={false}>
                <Form>
                    <Container>
                        <Title>Book your campervan now</Title>
                        <Text>Stay connected! We are always ready to help you.</Text>

                        <InputContainer>
                        
                        </InputContainer>
                        <Input type="text" name="name" id={nameId} placeholder="Name"/>

                        <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>

                        <Button type='submit'>Send</Button>
                    </Container>
                </Form>
            </Formik>
            <ToastContainer />
        </>
    )
};

export default Forma;