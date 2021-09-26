import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import getStripe from "../utils/getStripe";
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js'

interface StripeSubcriptionProps {}

export const StripeSubcription: React.FC<StripeSubcriptionProps> = ({}) => {
  const stripe = useStripe()
  const elements = useElements()
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log("donations");

    // if(elements === null){
    //   return
    // }

    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type:'card',
    //   card: elements.getElement(CardElement)
    // })

    // console.log(paymentMethod)
    
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: input.customDonation,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
  };
  return (
    <form onSubmit={handleSubmit}>

      {/* <Center py={6}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              Hobby
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>XAF</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                2000
              </Text>
              <Text color={"gray.500"}>/month</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                10 Job postings
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                100 Applications
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                View Job seeker Profile
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
              type="submit"
            >
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Center> */}
      <CardElement/>
      <Button type="submit" disabled={!stripe || !elements}>
        pay
      </Button>
    </form>
  );
};
