import styles from '../../styles/content.module.scss'

export default function Content({
    header,
    children,
    footer,
}: {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}) {
    return (
        <div className={styles.content}>
            <div className={styles.content__inner}>
                <div className={styles.content__header}>
                    {header}
                </div>
                <div className={styles.content__main}>
                    {children}
                </div>
                <div className={styles.content__footer}>
                    {footer}
                </div>
            </div>
        </div>
    )
}