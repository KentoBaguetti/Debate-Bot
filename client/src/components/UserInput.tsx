import type React from "react";
import { useState } from "react";

interface UserInputProps {
	onSubmit: (userInput: string) => Promise<void>;
	isLoading: boolean;
}

const UserInput: React.FC<UserInputProps> = ({ onSubmit, isLoading }) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await onSubmit(inputValue);
		setInputValue("");
	};

	return (
		<div className="userInput">
			<form onSubmit={handleSubmit}>
				<textarea
					name="user-argument"
					className="user-argument"
					placeholder="Enter your puny ahhh argument here..."
					value={inputValue}
					onChange={handleChange}
					disabled={isLoading}
				/>
				<button type="submit" disabled={isLoading}>
					Provoke the King
				</button>
			</form>
		</div>
	);
};

export default UserInput;
