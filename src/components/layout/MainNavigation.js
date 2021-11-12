import styles from "./MainNavigation.module.css";
import Link from 'next/link'
import Image from "next/image";



function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {/*// to navigate back to category page click on logo image */}
            <Link href="/">
              <Image
                src="https://www.meredith.com/sites/all/themes/meredith/logo.png"
                width="250"
                height="45"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
