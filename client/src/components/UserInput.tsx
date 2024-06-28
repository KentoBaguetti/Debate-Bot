import type React from "react";
import { useState } from "react";
import "../styles/UserInput.css";
import userImg from "../assets/userlawyer.jpg";

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
			<div className="image-container">
				<img
					src={userImg}
					alt="User Input Background"
					className="background-image"
				/>
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
		</div>
	);
};

export default UserInput;
