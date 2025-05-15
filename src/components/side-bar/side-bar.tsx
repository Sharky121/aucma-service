import { menu } from "@/data/menu";

import Link from "next/link";

import Image from "next/image";

import Portal from "@/components/portal/portal";
import Button from "@/components/button/button";

import styles from "./side-bar.module.scss";
import { addressLine, phone } from "@/data/config";

type SideBarProps = {
    onClose: () => void;
}

const SideBar = ({onClose}: SideBarProps) => {
    return (
        <Portal>
            <div className={styles.sideBarBackdrop} onClick={onClose}></div>
            <div className={styles.sideBar}>
                <div className={styles.sideBar__container}>
                    <div className={styles.sideBar__header}>
                        <Link className={styles.sideBar__logo} href="/">
                            <Image src="/logo_danger.png" alt="Лого" width={200} height={40} unoptimized/>
                        </Link>

                        <button className={styles.sideBar__close} onClick={onClose}>
                            <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true" focusable="false">
                                <use xlinkHref="#ico-cross" x="0" y="0"></use>
                            </svg>
                        </button>
                    </div>

                    <nav className={`${styles.sideBar__nav} ${styles.sideBarNav}`}>
                        <ul className={styles.sideBarNav__list}>
                            {
                                menu.map((item, index) => (
                                    <li key={index} className={styles.sideBarNav__item}>
                                        <Link href={item.url} className={styles.sideBarNav__link} onClick={onClose}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <div className={styles.sideBar__footer}>
                        <Link className={styles.sideBar__phoneNumber} href={`tel:+${phone.href}`}>{phone.value}</Link>
                        <p className={styles.sideBar__address}>{addressLine}</p>
                        <Button type='button' customСlassName={styles.sideBar__phoneButton}>Перезвоните мне</Button>
                    </div>  
                </div>
            </div>
        </Portal>
    )
}

export default SideBar;