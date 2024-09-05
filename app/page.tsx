import UseActionState from "@/components/UseActionState";
import UseFormStatus from "@/components/UseFormStatus";

export default function Home() {
	return (
		<main className="flex flex-col p-10 gap-6">
			<UseActionState />
			<UseFormStatus />
		</main>
	);
}
