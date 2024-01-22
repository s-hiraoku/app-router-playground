import styles from "./SidebarMenu.module.css";

type Props = {};

export const SidebarMenu: React.FC<Props> = ({}) => {
  return (
    <div className={styles.sidebar}>
      <a href="#" className={styles.menuItem}>
        ホーム
      </a>
      <a href="#" className={styles.menuItem}>
        プロフィール
      </a>
      <a href="#" className={styles.menuItem}>
        設定
      </a>
    </div>
  );
};
