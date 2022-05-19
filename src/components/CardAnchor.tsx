import styles from "../styles/CardAnchor.module.css";

type Props = {
  href: string;
  title: string;
  description: string;
};

export const CardAnchor = ({ href, title, description }: Props) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
};
