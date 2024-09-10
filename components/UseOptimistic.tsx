"use client";
import { startTransition, useEffect, useOptimistic, useState } from "react";
import { SubmitForm } from "./SubmitForm";

export default function UseOptimistic() {
	// const num = 100;
	const [defaultNum, setDefaultNum] = useState(100);
	const [optimisticState, addOptimistic] = useOptimistic(
		defaultNum,
		(state, addNum: any) => {
			//  console.log("state", state);
			// console.log("addNum", addNum);
			return state + addNum;
		}
	);

	const updateNumber = (addNum: number) => {
		startTransition(async () => {
			addOptimistic(addNum);
			await SubmitForm();
			setDefaultNum(optimisticState + addNum);
		});
	};

	useEffect(() => {
		console.log("defaultNum:", defaultNum);
	}, [defaultNum]);

	return (
		<div className="flex flex-col p-6 bg-slate-100 border gap-2 items-center w-full relative">
			<h2>useOptimistic:</h2>

			<div className="w-full flex flex-col gap-2">
				<button
					onClick={() => updateNumber(1)}
					className="py-2 px-8 bg-black text-yellow-200 uppercase"
				>
					Add
				</button>
				<div className="bg-yellow-400 p-2">
					optimisticState: {optimisticState}
				</div>
			</div>
		</div>
	);
}
