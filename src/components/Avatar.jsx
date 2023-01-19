import styles from './Avatar.module.css';

export function Avatar({ temBorda = true, src }) {
  return (
    <img
      className={temBorda ? styles.avatarComBorda : styles.avatar}
      src={src}
    />
  );
}
