import UseActionState from "@/components/UseActionState";
import UseFormStatus from "@/components/UseFormStatus";
import UseOptimistic from "@/components/UseOptimistic";

export default function Home() {
	return (
		<main className="flex flex-col p-10 gap-6">
			<UseActionState />
			<UseFormStatus />
			<UseOptimistic />
		</main>
	);
}
