"use client";
import { useFormStatus } from "react-dom";
import { SubmitForm } from "./SubmitForm";

function Form() {
	const { pending, data, method } = useFormStatus();
	const simpleInputValue = data?.get("simpleInput")?.toString() || "";

	return (
		<>
			<input
				type="text"
				name="simpleInput"
				className="w-full p-2 bg-yellow-100"
				disabled={pending}
				placeholder="Input text..."
				defaultValue="Lorem ipsum..."
				required
			/>

			<button
				type="submit"
				disabled={pending}
				className="py-2 px-8 bg-black text-yellow-200 uppercase w-full disabled:bg-slate-200 disabled:text-red-700"
			>
				{pending ? "Submitting..." : "Submit"}
			</button>

			{simpleInputValue && method && (
				<div className="p-4 absolute top-full w-full left-0 bg-yellow-300 z-50 shadow-lg">
					<ul>
						<li>Inputted Value: {simpleInputValue}</li>
						<li>Method: {method}</li>
					</ul>
				</div>
			)}
		</>
	);
}

export default function UseFormStatus() {
	return (
		<div className="flex flex-col p-6 bg-slate-100 border gap-2 items-center w-full relative">
			<h2>useFormStatus:</h2>

			<form action={SubmitForm} className="w-full flex flex-col gap-2">
				<Form />
			</form>
		</div>
	);
}
