import Image from 'next/image';
import Link from 'next/link';

import styles from './logo.module.scss';

interface ILogo {
    customClass?: string;
}

const Logo = ({customClass}: ILogo) => {
    return (
        <Link className={`${styles.logo} ${customClass}`} href={'/'}>
            <Image className={styles.logo__img} src="/logo_danger.png" width={145} height={29} unoptimized = {true} alt="Логотип Aucma обслуживание"/>
        </Link>
    )
}

export default Logo;