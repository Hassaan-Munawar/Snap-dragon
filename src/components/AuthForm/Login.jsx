import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});
	const { loading, error, login } = useLogin();
	return (
		<>
			<Input
				borderBottom={'2px solid gray'}
				_hover={{ borderColor: 'none' }}
				_focus={{ border:'2px solid #DF1734' }}
				_placeholder={{ color: 'gray.400' }}
				width={"100%"}
				size={"md"}
				fontSize={14}
				onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
				value={inputs.email}
				type='email'
				placeholder='Email'
			/>
			<Input
				borderBottom={'2px solid gray'}
				_hover={{ borderColor: 'none' }}
				_focus={{ border:'2px solid #DF1734' }}
				_placeholder={{ color: 'gray.400' }}
				width={"100%"}
				size={"md"}
				fontSize={14}
				type='password'
				placeholder='Password'
				value={inputs.password}
				onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
			/>
			
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
