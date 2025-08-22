import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ReactNode, forwardRef, memo } from 'react';

type FormInputProps = {
	value: string;
	label?: string;
	error?: string;
	isRequired?: boolean;
	handleChange?: (text: string) => void;

	leftIcon?: ReactNode;
	leftInputSlot?: ReactNode;
	rightIcon?: ReactNode;
	rightInputSlot?: ReactNode;

	inputContainerProps?: React.ComponentProps<typeof Input>;
	inputFieldProps?: React.ComponentProps<typeof InputField>;
	rightInputSlotProps?: React.ComponentProps<typeof InputSlot>;
	leftInputSlotProps?: React.ComponentProps<typeof InputSlot>;

	labelProps?: React.ComponentProps<typeof Text>;
	errorProps?: React.ComponentProps<typeof Text>;
};

const FormInput = forwardRef<any, FormInputProps>(
	(
		{
			value,
			label,
			error,
			isRequired = false,
			handleChange,

			leftIcon,
			leftInputSlot,
			rightIcon,
			rightInputSlot,

			inputContainerProps,
			inputFieldProps,
			leftInputSlotProps,
			rightInputSlotProps,

			labelProps,
			errorProps,
		},
		ref,
	) => {
		return (
			<VStack space='md'>
				{label && (
					<Text
						className='text-base  text-gray-800 font-[Montserrat-Medium]'
						{...labelProps}>
						{label}
						{isRequired && (
							<Text className='text-red-600 ml-1' {...labelProps}>
								*
							</Text>
						)}
					</Text>
				)}

				<Input
					className='w-full rounded-lg'
					size='lg'
					isInvalid={!!error}
					{...inputContainerProps}>
					{(leftIcon || leftInputSlot) && (
						<InputSlot className='pl-3' {...leftInputSlotProps}>
							{leftIcon}
							{leftInputSlot}
						</InputSlot>
					)}

					<InputField
						ref={ref}
						value={value}
						onChangeText={handleChange}
						{...inputFieldProps}
					/>

					{(rightIcon || rightInputSlot) && (
						<InputSlot className='pr-3' {...rightInputSlotProps}>
							{rightIcon}
							{rightInputSlot}
						</InputSlot>
					)}
				</Input>

				{error && (
					<Text className='text-red-500 text-sm' {...errorProps}>
						{error}
					</Text>
				)}
			</VStack>
		);
	},
);

FormInput.displayName = 'FormInput';
export default memo(FormInput);
