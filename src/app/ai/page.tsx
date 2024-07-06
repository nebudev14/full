import { getServerAuthSession } from "~/server/auth";
import TestAI from "../_components/test-lang";

export default async function AI() {
    const session = await getServerAuthSession();

    return (
        <div>
            <TestAI />
        </div>
    );
}