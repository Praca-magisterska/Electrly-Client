import styles from '../../styles/form_content.module.scss'

export default function FormContent({
    header,
    children,
    footer,
}: {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}) {
    return (
        <div className={styles.form_content}>
            <div className={styles.form_content__inner}>
                <div className={styles.form}>
                    <div className={styles.form__inner}>
                        <div className={styles.form__header}>
                            {header}
                        </div>
                        <div className={styles.form__main}>
                            {children}
                        </div>
                        <div className={styles.form__footer}>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}