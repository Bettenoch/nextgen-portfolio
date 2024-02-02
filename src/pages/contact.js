// 'use client';
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState } from "react";

import { Button, ChakraProvider, Container, FormControl, FormErrorMessage, FormLabel, Heading, Text, Textarea, useToast } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import theme from "@/config/theme";
import { sendContactForm } from "@/lib/api";

const initValues = { name: "", email: "", subject: "", message: ""}
const initState = { isLoading: false, error: "", values: initValues };
const Contact = () => {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, isLoading, error} = state;

    const handleChange = ({target}) => setState((prev) => ({
        ...prev, 
        values: {
            ...prev.values,
            [target.name]: target.value,
    },
    }));
    const onBlur = ({target}) => setTouched((prev) => ({...prev, [target.name]: true}));

const onSubmit = async () => {
    setState((prev) => ({
        ...prev, 
        isLoading: true
    }));
    try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
}

  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
            <title> BettEnock | Contact Page</title>
            <meta name="description" content="Web development road map" />
        </Head>
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-32 sm:pt-32 md:pt-48 lg:pt-52">
            <Heading className="text-center mb-10">
                <p className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Let&apos;s Spark Creativity Over a Cup of Coffee! </span> join me for an Inspiring Conversation.</p>
            </Heading>
            {error && (
            <Text color="red.300" my={4} fontSize="xl">
            {error}
            </Text>
      )}
                <Container className=" rounded-lg flex items-center bg-gradient-to-br from-indigo-100 to-teal-900 dark:bg-none">
                  <div className="flex flex-col items-center w-full p-4 ">
                    <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                        <FormLabel className="text-indigo-900 dark:text-teal-300">Name</FormLabel>
                        <Input type="text" name="name" autoComplete="on" value={values.name} errorBorderColor="red.300" onChange={handleChange} onBlur={onBlur}/>
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.email && !values.email} mb={5} >
                        <FormLabel className="text-indigo-900 dark:text-teal-300">Email</FormLabel>
                        <Input type="email" name="email" autoComplete="on" value={values.email} className="border-solid border-2 border-indigo-600" errorBorderColor="red.300" onChange={handleChange} onBlur={onBlur} />
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
                        <FormLabel className="text-indigo-900 dark:text-teal-300">Subject</FormLabel>
                        <Input type="text" className="text-gray-600 " autoComplete="on" name="subject" value={values.subject} errorBorderColor="red.300" onChange={handleChange} onBlur={onBlur}/>
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
                        <FormLabel className="text-indigo-900 dark:text-indigo-400">Message</FormLabel>
                        <Textarea type="text" name="message" value={values.message} errorBorderColor="red.300" rows={4} onChange={handleChange} onBlur={onBlur}/>
                    </FormControl>

                    <Button
                    variant="outline"
                    colorScheme= 'blue'
                    isLoading = {isLoading}
                    disabled = { !values.name || !values.email || !values.subject || !values.message}
                    onClick={onSubmit}
                    >
                        Submit
                    </Button>
                  </div>
                </Container>
            </Layout>
        </main>
      </ChakraProvider>
    </>
  );
};

export default Contact;
