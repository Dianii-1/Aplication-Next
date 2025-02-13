'use client'
import Link from "next/link";
import styles from './styles.module.css'
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  name: string;
}

const ActiveLink = ({ path, name }: ActiveLinkProps) => {

    const pathName = usePathname()
  return (
    <Link className={`${styles.link} ${ (pathName === path) && styles['active-link']}`} href={path}>
      {name}
    </Link>
  );
};

export default ActiveLink;
