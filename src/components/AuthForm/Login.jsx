import { Alert, AlertIcon, Button, Input,InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, login } = useLogin();
	return (
		<>
			<Input
				borderBottom={'2px solid gray'}
				_hover={{ borderColor: 'none' }}
				_focus={{ borderWidth:'2px' }}
				_placeholder={{ color: 'gray.400' }}
				width={"100%"}
				size={"md"}
				fontSize={14}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value.trim().toLowerCase() })}
				value={inputs.email}
				type='email'
				placeholder='Email'
			/>
			<InputGroup>
				<Input
					borderBottom={'2px solid gray'}
					_hover={{ borderColor: 'none' }}
					_focus={{ borderWidth:'2px' }}
					_placeholder={{ color: 'gray.400' }}
					width={"100%"}
					size={"md"}
					fontSize={14}
					placeholder='Password'
					type={showPassword ? "text" : "password"}
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value.trim().toLowerCase() })}
				/>
				<InputRightElement h='full'>
					<Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <ViewIcon color={'black'} /> : <ViewOffIcon color={'black'} />}
					</Button>
				</InputRightElement>
			</InputGroup>

			
			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
			<Button
				w={"full"}
				fontSize={16}
				color={'#fff'}
				bg={'#DF1734'}
				_hover={{ backgroundColor: "#96031B" , color:'#fff'}}
				_active={{ backgroundColor: "#96031B" }}
				isLoading={loading}
				onClick={() => login(inputs)}
				size={"md"}
			>
				Log in
			</Button>
		</>
	);
};

export default Login;
