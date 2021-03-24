import { Button, FormGroup, Label } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Register() {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: 500 }}>
        <Formik
          initialValues={{ email: '', password: '', colors: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
              .max(20 , 'Must be 20 characters or less')
              .min(8 , 'Must be 8 characters or more')
              .required('Required'),
            colors: Yup.string().required('Required'),
          })}
          onSubmit={(values) => {
            console.log('🚀 ~ file: Register.jsx ~ line 21 ~ Register ~ values', values);
          }}
        >
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Field name="email" type="text" className="form-control" />
              <p className="text-danger">
                <ErrorMessage name="email"/>
              </p>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Field name="password" type="text" className="form-control" />
              <p className="text-danger">
                <ErrorMessage name="password"/>
              </p>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Color</Label>
              <Field name="colors" as="select" className="form-control">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <p className="text-danger">
                <ErrorMessage name="colors"/>
              </p>
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
