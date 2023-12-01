import styles from '../../styles/content_section.module.scss'

export default function ContentSection({
    title,
    showTitle = true,
    children,
}: {
    title?: string,
    showTitle?: boolean,
    children?: React.ReactNode,
}) {
    return (
        <div className={styles.content_section}>
            <div className={styles.content_section__inner}>
                {showTitle ?
                    <div className={styles.content_section__title}>
                        {title}
                    </div>
                : null}
                <div className={styles.content_section__main}>
                    {children}
                </div>
            </div>
        </div>
    )
}