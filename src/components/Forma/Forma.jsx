import { Formik, Form, Field, ErrorMessage } from "formik";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Button, Container, Input, InputContainer, InputText, Text, Title } from "./Forma.styled";
import { nanoid } from "nanoid";
import Error from '../Error/Error';

const initialValues = {
    name: "",
    email: "",
    comment: "",
};

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Name too Short!").max(50, "Name too Long!").required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    comment: Yup.string().min(3, "Comment too Short!").max(100, "Comment too Long!"),
});

const Forma = () => {
    const nameId = nanoid();
    const emailId = nanoid();
    const commentId = nanoid();

    const handleSubmit = async (values, actions) => {
        const errors = await actions.validateForm();
        if (Object.keys(errors).length) {
            Object.keys(errors).forEach((key) => {
                actions.setFieldTouched(key, true, false);
                actions.setFieldError(key, errors[key]);
            });
            toast.error('Please fix the errors before submitting', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        actions.resetForm();
        toast.success('Your request has been sent', {
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

        
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Container>
                            <Title>Book your campervan now</Title>
                            <Text>Stay connected! We are always ready to help you.</Text>
                            
                            <InputContainer>
                                <Field as={Input} type="text" name="name" id={nameId} placeholder="Name" />
                                <ErrorMessage name="name">{msg => <Error msg={msg} />}</ErrorMessage>

                                <Field as={Input} type="text" name="email" id={emailId} placeholder="Email" />
                                <ErrorMessage name="email">{msg => <Error msg={msg} />}</ErrorMessage>

                                <Field as={InputText} name="comment" id={commentId} placeholder="Comment" />
                                <ErrorMessage name="comment">{msg => <Error msg={msg} />}</ErrorMessage>
                            </InputContainer>
                            
                            <div>
                                <Button type='submit'>Send</Button>
                            </div>
                        </Container>
                    </Form>
                )}
            </Formik>
            
        </>
    );
};

export default Forma;
