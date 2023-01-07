import { Box, Button, TextField, useTheme } from "@mui/material"
import { tokens } from "../theme" 
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import {Header} from "../components/Header"

const Form = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery("(min-width:600px)")
  const handleFormSubmit = (values)=>{
    console.log(values)
  }
  return (
    <Box m="20px"
     sx={{
      "& .MuiBox-root .MuiFormControl-root .MuiFormLabel-root": {
        color: `${colors.grey[100]}`
      }
     }}
    >
      <Header title="CREATE USER" subTitle="Create a New User Profile"/>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkOutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        })=>(
         
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4,minmax(0,1fr))"
            sx={{
              "& > div": {
                gridColumn: isNonMobile ? undefined : "span 4"
              }
            }}>
              <TextField
               fullWidth
               variant="filled"
               type="text"
               label="firstName"
               onBlur={handleBlur('firstName')}
               onChange={handleChange('firstName')}
               value={values.firstName}
               error={!!touched.firstName && !!errors.firstName}
               helperText={touched.firstName && errors.firstName}
               sx={{gridColumn: "span 2"}}
              /> 
              <TextField
               fullWidth
               variant="filled"
               type="text"
               label="lasttName"
               onBlur={handleBlur('lastName')}
               onChange={handleChange('lastName')}
               value={values.lastName}
               error={!!touched.lastName && !!errors.lastName}
               helperText={touched.lastName && errors.lastName}
               sx={{gridColumn: "span 2"}}
              /> 
              <TextField
               fullWidth
               variant="filled"
               type="email"
               label="email"
               onBlur={handleBlur('email')}
               onChange={handleChange('email')}
               value={values.email}
               error={!!touched.email && !!errors.email}
               helperText={touched.email && errors.email}
               sx={{gridColumn: "span 4"}}
              /> 
              <TextField
               fullWidth
               variant="filled"
               type="text"
               label="phone contact"
               onBlur={handleBlur('contact')}
               onChange={handleChange('contact')}
               value={values.contact}
               error={!!touched.contact && !!errors.contact}
               helperText={touched.contact && errors.contact}
               sx={{gridColumn: "span 4"}}
              /> 
              <TextField
               fullWidth
               variant="filled"
               type="text"
               label="address 1"
               onBlur={handleBlur('address1')}
               onChange={handleChange('address1')}
               value={values.address1}
               error={!!touched.address1 && !!errors.address1}
               helperText={touched.address1 && errors.address1}
               sx={{gridColumn: "span 4"}}
              /> 
              <TextField
               fullWidth
               variant="filled"
               type="text"
               label="address 2"
               onBlur={handleBlur('address2')}
               onChange={handleChange('address2')}
               value={values.address2}
               error={!!touched.address2 && !!errors.address2}
               helperText={touched.address2 && errors.address2}
               sx={{gridColumn: "span 4"}}
              /> 
              <Button type="submit" variant="contained" color="secondary">CREATE NEW USER</Button>
            </Box>
          </form>
          
        )}  
      </Formik>  
    </Box>
  )
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const checkOutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup.string().matches(phoneRegExp,'invalid phone number').required('required'),
  address1: yup.string().required("required"),
  address2: yup.string().required("required")
})

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
}

export default Form