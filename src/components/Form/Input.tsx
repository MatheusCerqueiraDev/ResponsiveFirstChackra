import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={label}>{label}</FormLabel>}
      <ChakraInput
        bg="gray.900"
        focusBorderColor="pink.500"
        id={label}
        _hover={{
          bgColor: "gray.900",
        }}
        name={name}
        size="lg"
        variant="filled"
        {...rest}
      />
    </FormControl>
  );
}
