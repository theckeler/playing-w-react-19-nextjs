"use client";
import { useActionState } from "react";

const quotes = [
	{
		quote:
			"The only limit to our realization of tomorrow is our doubts of today.",
		author: "Franklin D. Roosevelt",
	},
	{
		quote:
			"In the end, we will remember not the words of our enemies, but the silence of our friends.",
		author: "Martin Luther King Jr.",
	},
	{
		quote: "The purpose of our lives is to be happy.",
		author: "Dalai Lama",
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: "John Lennon",
	},
	{
		quote: "Get busy living or get busy dying.",
		author: "Stephen King",
	},
	{
		quote:
			"You have within you right now, everything you need to deal with whatever the world can throw at you.",
		author: "Brian Tracy",
	},
	{
		quote: "Believe you can and you're halfway there.",
		author: "Theodore Roosevelt",
	},
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
	},
	{
		quote:
			"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
		author: "Albert Schweitzer",
	},
	{
		quote: "Don't watch the clock; do what it does. Keep going.",
		author: "Sam Levenson",
	},
];

async function grabQuote(previousState: any) {
	return {
		quoteRand: quotes[Math.floor(Math.random() * 10)],
		quotePrev: { ...previousState.quoteRand },
	};
}

export default function UseActionState() {
	const [quote, quoteAction] = useActionState(grabQuote, {
		quoteRand: quotes[0],
		quotePrev: "",
	});

	// useEffect(() => {
	// 	console.log("quote", quote);
	// }, [quote]);

	return (
		<div className="flex flex-col p-6 bg-slate-100 border gap-2 items-center w-full">
			<h2>useActionState:</h2>
			<form className="flex flex-col gap-2 w-full">
				<ul className="grid md:grid-cols-2 gap-4 items-stretch min-h-[200px]">
					<li className="border bg-yellow-100 rounded p-4 flex gap-2 flex-col">
						<span>Previous State:</span>
						<span className="">{quote?.quotePrev?.quote}</span>
						<span className="font-bold">-- {quote?.quotePrev.author}</span>
					</li>
					<li className="border bg-yellow-100 rounded p-4 flex gap-2 flex-col">
						<span>Current State:</span>
						<span className="">{quote?.quoteRand.quote}</span>
						<span className="font-bold">-- {quote?.quoteRand.author}</span>
					</li>
				</ul>

				<button
					formAction={quoteAction}
					className="py-2 px-8 bg-black text-yellow-200 uppercase"
				>
					Random Quote
				</button>
			</form>
		</div>
	);
}
