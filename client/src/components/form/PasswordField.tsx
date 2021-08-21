import {
	Box,
	Text,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	useDisclosure,
	useMergeRefs,
	Link,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label: string;
	placeholder: string;
	loginOrRegister: boolean;
};

export const PasswordField: React.FC<InputFieldProps> = React.forwardRef(
	(props, ref) => {
		const inputRef = React.useRef(null);

		const { isOpen, onToggle } = useDisclosure();
		const mergeRef = useMergeRefs(inputRef, ref);

		const [field, { error }] = useField(props);

		const onClickReveal = () => {
			onToggle();
		};
		return (
			<FormControl isInvalid={!!error}>
				<Flex justifyContent="space-between">
					<FormLabel>{props.label}</FormLabel>
					{props.loginOrRegister ? (
						<Link
							color="#00b074"
							fontWeight="semibold"
							href="/forgot-password"
                            fontSize="sm"
						>
							Forgot password?
						</Link>
					) : null}
				</Flex>
				<InputGroup>
					<InputRightElement>
						<IconButton
							bg="transparent"
							icon={isOpen ? <HiEyeOff /> : <HiEye />}
							onClick={onClickReveal}
							aria-label={
								isOpen ? 'Mask password' : 'Reveal Password'
							}
						></IconButton>
					</InputRightElement>
					<Input
						{...field}
						id={field.name}
						ref={mergeRef}
						type={isOpen ? 'text' : 'password'}
						placeholder={props.placeholder}
					/>
				</InputGroup>
				{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
			</FormControl>
		);
	}
);
