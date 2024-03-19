import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

interface User {
  name: string;
  email: string;
}

const MyReactNativeForm: React.FC = () => {
  const initialValues: User = {
    name: '',
    email: '',
  };

  const onSubmit = (values: User) => {
    console.log('Submitting form:', values);
    // Handle form submission logic here (e.g., send data to server)
  };
  
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"

              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            <Button title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default MyReactNativeForm;