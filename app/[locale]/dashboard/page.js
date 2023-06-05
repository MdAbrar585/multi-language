import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const Dashboard = () => {
  const t = useTranslations("Dashboard");

  return (
    <div>
      <div>
        <Link href="/dashboard" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/dashboard" locale="bn">
          In Bangla
        </Link>
        <br />
        <br />
      </div>
      <h1>{t("title")}</h1>
      <p>
        {t("description")}
      </p>
    </div>
  );
};

export default Dashboard;
