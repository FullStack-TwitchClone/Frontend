"use client";

import { useTranslations } from "use-intl";
import {Button} from "@/components/shared/Button";

export default function Home() {
	const t = useTranslations("home");
	return <div className='text-4xl font-bold'>
		{t("title")}
	</div>;
}
