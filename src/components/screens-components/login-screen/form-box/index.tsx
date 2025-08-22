import { VStack } from '@/components/ui/vstack';
import { IMAGES } from '@/src/assets';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { FormInput } from '@/src/components/core';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button';

const FormBox = () => {
	const [value, setValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = () => {
		setIsLoading(true);
	};
	return (
		<View style={styles.formBox}>
			<View style={styles.logoWrapper}>
				<Image source={IMAGES?.Login?.default?.LOGO} alt='logo' style={styles.logo} />
			</View>
			<VStack space='md'>
				<Text
					style={{ fontFamily: 'Montserrat-Bold' }}
					className='text-[30px] text-center font-bold text-[#161B1F);

]'>
					Log in to your{'\n'}account
				</Text>
				<Text style={styles.subText}>Welcome! Please enter your details.</Text>
				<FormInput
					value={value}
					handleChange={setValue}
					label='Enter Email / Mobile number'
					error={''}
					inputFieldProps={{
						placeholder: 'dinesh.kapoor@gmail.com',
						keyboardType: 'email-address',
					}}
					inputContainerProps={{
						isDisabled: isLoading,
					}}
				/>

				<Checkbox
					className='gap-5'
					size='md'
					isInvalid={false}
					isDisabled={isLoading}
					value=''>
					<CheckboxIndicator>
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel className='font-medium opacity-70 color-[#5B6169] text-lg'>
						{'I accept to receive promotional\nupdates.'}
					</CheckboxLabel>
				</Checkbox>
				<Button
					size='xl'
					variant='solid'
					action='primary'
					isDisabled={isLoading}
					className='mt-4 rounded-xl'
					onPress={handleSubmit}>
					{isLoading && <ButtonSpinner size={'small'} color={'#5B6169'} />}
					<ButtonText>Send OTP</ButtonText>
				</Button>
			</VStack>
		</View>
	);
};

export default FormBox;
