import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";

type BreadcrumbProps = {
  title: string;
  href: string;
};

const MolecularBreadcrumb: React.FC = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbProps[] | null>(
    null
  );

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray: BreadcrumbProps[] = linkPath.map((path, i) => {
        return { title: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  const BreadcrumbProps = breadcrumbs.map((props) => {
    return {
      title: (
        <Link href={props.href.split("?")[0]}>
          {props.title.split("?")[0].toUpperCase()}
        </Link>
      ),
    };
  });

  return <Breadcrumb items={BreadcrumbProps} />;
};

export default MolecularBreadcrumb;
